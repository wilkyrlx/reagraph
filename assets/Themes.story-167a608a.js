import{j as i}from"./jsx-runtime-9c4ae004.js";import{G as r}from"./RadialMenu-a21554b3.js";import"./index-1b03fe98.js";import{d as C}from"./darkTheme-3eaae08b.js";import{s as n,b as c}from"./demo-8f145094.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";const T={title:"Demos/Themes",component:r},o=()=>i.jsx(r,{theme:C,nodes:n,edges:c,labelType:"all"}),g=p=>i.jsx(r,{...p,nodes:n,edges:c,contextMenuItems:[{label:"Add Node",onClick:()=>alert("Add a node")},{label:"Remove Node",onClick:()=>alert("Remove the node")}]}),e=g.bind({});e.args={theme:{canvas:{background:"#1E2026",fog:"#1E2026"},node:{fill:"blue",activeFill:"#1DE9AC",label:{stroke:"#1E2026",color:"#ACBAC7",activeColor:"#1DE9AC"}},menu:{background:"#54616D",border:"#7A8C9E",color:"#fff",activeBackground:"#1DE9AC",activeColor:"#000"},ring:{fill:"#54616D",activeFill:"#1DE9AC"},lasso:{border:"1px solid #55aaff",background:"rgba(75, 160, 255, 0.1)"},edge:{fill:"#54616D",activeFill:"#1DE9AC",label:{stroke:"#1E2026",color:"#ACBAC7",activeColor:"#1DE9AC"}},arrow:{fill:"#54616D",activeFill:"#1DE9AC"},cluster:{stroke:"#D8E6EA",label:{stroke:"#fff",color:"#2A6475"}}}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:'() => <GraphCanvas theme={darkTheme} nodes={simpleNodes} edges={simpleEdges} labelType="all" />',...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var t,d,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`args => <GraphCanvas {...args} nodes={simpleNodes} edges={simpleEdges} contextMenuItems={[{
  label: 'Add Node',
  onClick: () => alert('Add a node')
}, {
  label: 'Remove Node',
  onClick: () => alert('Remove the node')
}]} />`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};export{e as CustomTheme,o as DarkTheme,T as default};
//# sourceMappingURL=Themes.story-167a608a.js.map
