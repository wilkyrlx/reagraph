import{j as m}from"./jsx-runtime-9c4ae004.js";import{d as h,G as d}from"./RadialMenu-a21554b3.js";import"./index-1b03fe98.js";import{c as i,a as c,s as C,b as D}from"./demo-8f145094.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";function E(e,s){const{invalid:o}=h(e,s),a=e.length;return o?"forceDirected2d":a>100?"radialOut2d":"treeTd2d"}const k={title:"Demos/Layouts",component:d},r=()=>{const e=E(i,c);return m.jsx(d,{layoutType:e,nodes:i,edges:c})},t=()=>m.jsx(d,{layoutType:"forceDirected2d",layoutOverrides:{nodeStrength:-50,linkDistance:500},nodes:i,edges:c}),n=()=>m.jsx(d,{layoutType:"custom",layoutOverrides:{getNodePosition:(e,{nodes:s})=>{const o=s.findIndex(a=>a.id===e);return s[o],{x:25*o,y:o%2===0?0:50,z:1}}},nodes:C,edges:D});var p,u,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const layout = recommendLayout(complexNodes, complexEdges);
  return <GraphCanvas layoutType={layout} nodes={complexNodes} edges={complexEdges} />;
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var y,g,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`() => <GraphCanvas layoutType="forceDirected2d" layoutOverrides={{
  nodeStrength: -50,
  linkDistance: 500
}} nodes={complexNodes} edges={complexEdges} />`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,v,N;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <GraphCanvas layoutType="custom" layoutOverrides={({
  getNodePosition: (id: string, {
    nodes
  }: NodePositionArgs) => {
    const idx = nodes.findIndex(n => n.id === id);
    const node = nodes[idx];
    return {
      x: 25 * idx,
      y: idx % 2 === 0 ? 0 : 50,
      z: 1
    };
  }
} as CustomLayoutInputs)} nodes={simpleNodes} edges={simpleEdges} />`,...(N=(v=n.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};export{n as Custom,t as Overrides,r as Recommender,k as default};
//# sourceMappingURL=Layouts.story-1340fed3.js.map
