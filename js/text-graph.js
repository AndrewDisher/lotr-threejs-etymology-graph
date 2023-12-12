import ForceGraph3D from '3d-force-graph';
import SpriteText from 'three-spritetext';
import * as THREE from "three";

const Graph = ForceGraph3D()
      (document.getElementById('3d-network'))
        .jsonUrl('./data/lotr_data.json')
        //.nodeAutoColorBy('group')
        .nodeThreeObject(node => {
          const sprite = new SpriteText(node.id);
          sprite.material.depthWrite = false; // make sprite background transparent
          //sprite.color = node.color;
          sprite.textHeight = 8;
          //sprite.borderWidth = 1;
          //sprite.borderColor = "#007aff";
          //sprite.borderRadius = 5;
          
          return sprite;
        })
        ;

    // Spread nodes a little wider
    Graph.d3Force('charge').strength(-500);
    //Graph.d3Force('link').strength(link => link.value);

      const linkForce = Graph
        .d3Force('link')
        .distance(link => link.value);

    
