import{j as e}from"./jsx-runtime-9c4ae004.js";import{M as o,b as i}from"./index-89487369.js";import{u as t}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-6b53837e.js";import"../sb-preview/runtime.js";import"./chunk-H6ZRF7XV-146ce0bc.js";import"./index-d475d2ea.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-7579bee9.js";import"./index-356e4a49.js";function r(s){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre"},t(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Getting Started/Basics"}),`
`,e.jsx(n.h1,{id:"basics",children:"Basics"}),`
`,e.jsx(n.h2,{id:"graph",children:"Graph"}),`
`,e.jsxs(n.p,{children:["Let's build our first graph by defining some ",e.jsx(n.code,{children:"nodes"})," and ",e.jsx(n.code,{children:"edges"}),`.
Nodes are the blocks and edges are the relationships between the blocks.`]}),`
`,e.jsxs(n.p,{children:["The data shapes require one property of ",e.jsx(n.code,{children:"id"})," but you can pass ",e.jsx(n.code,{children:"label"}),`
or `,e.jsx(n.code,{children:"icon"})," to them to show some sort of indication what it represents."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const nodes = [
{
    id: '1',
    label: '1'
  },
  {
    id: '2',
    label: '2'
  }
];

const edges = [
  {
    source: '1',
    target: '2',
    id: '1-2',
    label: '1-2'
  },
  {
    source: '2',
    target: '1',
    id: '2-1',
    label: '2-1'
  }
];
`})}),`
`,e.jsxs(n.p,{children:["These shapes above will create two elements ",e.jsx(n.code,{children:"1"})," and ",e.jsx(n.code,{children:"2"}),` and create
a relationship between them. Once we have this defined, we can simply
pass these properties to the `,e.jsx(n.code,{children:"Canvas"})," and it will do the rest!"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import React from 'react';
import { GraphCanvas } from 'reagraph';

export const MyDiagram = () => (
  <GraphCanvas
    nodes={nodes}
    edges={edges}
  />
);
`})}),`
`,e.jsx(n.p,{children:"This will render a graph like this:"}),`
`,e.jsx("div",{style:{height:500,width:"100%",position:"relative",margin:"0 auto",background:"white",borderRadius:4,border:"1px solid rgba(0,0,0,.1)",boxShadow:"rgb(0 0 0 / 10%) 0 1px 3px 0",overflow:"hidden"},children:e.jsx(i,{id:"demos-basic--simple"})})]})}function w(s={}){const{wrapper:n}=Object.assign({},t(),s.components);return n?e.jsx(n,Object.assign({},s,{children:e.jsx(r,s)})):r(s)}export{w as default};
//# sourceMappingURL=Basics-0aacd575.js.map
