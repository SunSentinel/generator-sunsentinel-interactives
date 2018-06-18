import * as d3 from 'd3';
import * as topojson from 'topojson';


//check for loaded libraries
const loadExample = () => {
  console.log(`
    jQuery: ${$},
    d3: ${d3},
    topojson: ${topojson},
  `);
}

export { loadExample };