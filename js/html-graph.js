import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import ForceGraph3D from '3d-force-graph';

const Graph = ForceGraph3D({
    extraRenderers: [new CSS2DRenderer()]
  })
  (document.getElementById('3d-network'))
    .jsonUrl('./data/lotr_data.json')
    //.nodeAutoColorBy('group')
    .nodeThreeObject(node => {
      const nodeEl = document.createElement('div');
      nodeEl.textContent = node.id;
      //nodeEl.style.color = node.color;
      nodeEl.className = 'node-label';
      return new CSS2DObject(nodeEl);
    })
    .nodeThreeObjectExtend(true);

// Spread nodes a little wider
Graph.d3Force('charge').strength(-500);
//Graph.d3Force('link').strength(link => link.value);

const linkForce = Graph
  .d3Force('link')
  .distance(link => link.value);

function updateHighlight() {
  // trigger update of highlighted objects in scene
  Graph
    .nodeColor(Graph.nodeColor())
    .linkWidth(Graph.linkWidth())
    .linkDirectionalParticles(Graph.linkDirectionalParticles());
}
