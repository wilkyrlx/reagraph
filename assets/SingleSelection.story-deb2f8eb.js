import{j as p}from"./jsx-runtime-9c4ae004.js";import{r as d}from"./index-1b03fe98.js";import{G as i}from"./RadialMenu-a21554b3.js";import{u as g}from"./useSelection-8cfedcce.js";import{c as r,a as t,s as m,b as C}from"./demo-8f145094.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";const z={title:"Demos/Selection/Single",component:i},a=()=>{const e=d.useRef(null),{selections:s,onNodeClick:n,onCanvasClick:o}=g({ref:e,nodes:r,edges:t,selections:[r[0].id],type:"single"});return p.jsx(i,{ref:e,nodes:r,edges:t,selections:s,onNodeClick:n,onCanvasClick:o})},l=()=>{const e=d.useRef(null),{selections:s,onNodeClick:n,onCanvasClick:o}=g({ref:e,nodes:m,edges:C,type:"single"});return p.jsx(i,{ref:e,nodes:m,edges:C,selections:s,onCanvasClick:o,onNodeClick:n})},c=()=>{const e=d.useRef(null),{selections:s,onNodeClick:n,onCanvasClick:o}=g({ref:e,nodes:r,edges:t,type:"single"});return p.jsx(i,{ref:e,draggable:!0,nodes:r,edges:t,selections:s,onCanvasClick:o,onNodeClick:n})};var f,u,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    selections: [complexNodes[0].id],
    type: 'single'
  });
  return <GraphCanvas ref={graphRef} nodes={complexNodes} edges={complexEdges} selections={selections} onNodeClick={onNodeClick} onCanvasClick={onCanvasClick} />;
}`,...(k=(u=a.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var R,N,h;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: simpleNodes,
    edges: simpleEdges,
    type: 'single'
  });
  return <GraphCanvas ref={graphRef} nodes={simpleNodes} edges={simpleEdges} selections={selections} onCanvasClick={onCanvasClick} onNodeClick={onNodeClick} />;
}`,...(h=(N=l.parameters)==null?void 0:N.docs)==null?void 0:h.source}}};var v,x,S;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const {
    selections,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes: complexNodes,
    edges: complexEdges,
    type: 'single'
  });
  return <GraphCanvas ref={graphRef} draggable nodes={complexNodes} edges={complexEdges} selections={selections} onCanvasClick={onCanvasClick} onNodeClick={onNodeClick} />;
}`,...(S=(x=c.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};export{a as Defaults,c as Dragging,l as Simple,z as default};
//# sourceMappingURL=SingleSelection.story-deb2f8eb.js.map
