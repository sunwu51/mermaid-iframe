import { createMermaidRenderer } from 'mermaid-isomorphic'
import express from 'express'

const app = express();
app.use(express.json());
const renderer = createMermaidRenderer();

app.post('/convert', async (req, res) => {
  try {
    let { diagrams } = req.body;
//     diagrams = [`
// graph TD;
//     A-->B;
//     A-->C;
//     B-->D;
//     C-->D;
// `]
    const results = await renderer(diagrams)
    res.json({results})
  } catch (err) {
    console.error(err)
    res.json({error: err})
  }
})

app.listen(3000, () => {
  console.log('Mermaid SVG server running on http://localhost:3000');
});


// const results = await renderer([diagram])
// console.log(results)
// // import express from 'express'
// // import mermaid from 'mermaid'
// // import { JSDOM } from 'jsdom'
// // const app = express();
// // app.use(express.json());

// // app.post('/convert', (req, res) => {
// //   const { markdown } = req.body;
  
// //   // Ensure Mermaid initializes properly
// //   const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
// //   global.document = dom.window.document;
// //   global.window = dom.window;
// //   mermaid.initialize({ startOnLoad: false });

// //   mermaid.mermaidAPI.render('graphDiv', markdown, (svgCode) => {
// //     res.send(svgCode);
// //   });
// // });

// // app.listen(3000, () => {
// //   console.log('Mermaid SVG server running on http://localhost:3000');
// // });
