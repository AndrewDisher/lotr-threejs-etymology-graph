import data from '../data/lotr_data.json';
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import ForceGraph3D from '3d-force-graph';

// Importing lotr json data
const lotr_data = data;

// Implement logic for determining which nodes and links should be highlighted on hover
lotr_data.links.forEach(link => {
    const a = lotr_data.nodes[lotr_data.nodes.findIndex(node => node.id === link.source)];
    const b = lotr_data.nodes[lotr_data.nodes.findIndex(node => node.id === link.target)];
    !a.neighbors && (a.neighbors = []);
    !b.neighbors && (b.neighbors = []);
    a.neighbors.push(b);
    b.neighbors.push(a);

    !a.links && (a.links = []);
    !b.links && (b.links = []);
    a.links.push(link);
    b.links.push(link);
  });

const highlightNodes = new Set();
const highlightLinks = new Set();
let hoverNode = null;

console.log(lotr_data.nodes[lotr_data.nodes.findIndex(node => node.id === "Indic")].hasOwnProperty("neighbors"));

// Create the 3d force graph
const Graph = ForceGraph3D({
    extraRenderers: [new CSS2DRenderer()]
  })
  (document.getElementById('3d-network'))
    .graphData(lotr_data)
    .nodeColor(node => highlightNodes.has(node) ? node === hoverNode ? 'rgb(255,0,0,1)' : '#40e0d0' : 'rgba(0,255,255,0.6)')
    .nodeRelSize(30)
    .nodeVisibility(node => (node.visible === undefined) ? true : node.visible)
    .linkVisibility(link => (link.visible === undefined) ? true : link.visible)
    .linkWidth(link => highlightLinks.has(link) ? 4 : 2)
    .nodeThreeObject(node => {
      const nodeEl = document.createElement('div');
      nodeEl.textContent = node.id + ": " + node.value.toLocaleString('en-US') + " words";
      nodeEl.className = 'node-label';
      return new CSS2DObject(nodeEl);
    })
    .nodeThreeObjectExtend(true)
    .onNodeHover(node => {
        // no state change
        if ((!node && !highlightNodes.size) || (node && hoverNode === node)) return;
        console.log(node);
        if (node && !node.hasOwnProperty("neighbors")) return;

        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
          highlightNodes.add(node);
          node.neighbors.forEach(neighbor => highlightNodes.add(neighbor));
          node.links.forEach(link => highlightLinks.add(link));
        }

        hoverNode = node || null;

        updateHighlight();
      })
      .onNodeClick(node => {
        // Aim at node from outside it
        const distance = 300;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);

        const newPos = node.x || node.y || node.z
          ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
          : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)

        Graph.cameraPosition(
          newPos, // new position
          node, // lookAt ({ x, y, z })
          3000  // ms transition duration
        );
      });

// Spread nodes a little wider
Graph.d3Force('charge').strength(-500);

const linkForce = Graph
  .d3Force('link')
  .distance(link => link.value);


function updateHighlight() {
    //manage the visibility of the rest
	lotr_data.nodes.filter(node => ![...highlightNodes].includes(node)).forEach(other_node => {
		other_node.visible = (hoverNode ? false : true);
	});		
	lotr_data.links.filter(link => ![...highlightLinks].includes(link)).forEach(other_link => {
		other_link.visible = (hoverNode ? false : true);
	});

// trigger update of highlighted objects in scene
    Graph
    .nodeColor(Graph.nodeColor())
    .linkWidth(Graph.linkWidth())
}