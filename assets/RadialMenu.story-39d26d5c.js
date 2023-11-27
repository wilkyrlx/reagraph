import{j as a}from"./jsx-runtime-9c4ae004.js";import{G as s,R as p}from"./RadialMenu-a21554b3.js";import"./index-1b03fe98.js";import{s as c,b as u}from"./demo-8f145094.js";import"./index-27578f8f.esm-24d23efb.js";import"./extends-98964cd2.js";import"./client-449ccf6c.js";import"./index-6fd5a17b.js";const A={title:"Demos/Context Menu/Radial",component:s},o=()=>a.jsx(s,{nodes:c,edges:u,contextMenu:({data:C,onClose:e})=>a.jsx(p,{onClose:e,items:[{label:"Add Node",onClick:()=>{alert("Add a node"),e()}},{label:"Remove Node",onClick:()=>{alert("Remove the node"),e()}}]})}),n=()=>a.jsx(s,{nodes:c,edges:u,contextMenu:({data:C,onClose:e})=>a.jsx(p,{onClose:e,items:[{label:"Add Node",disabled:!0,onClick:()=>{alert("Add a node"),e()}},{label:"Remove Node",disabled:!0,onClick:()=>{alert("Remove the node"),e()}}]})});var d,t,l;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`() => <GraphCanvas nodes={simpleNodes} edges={simpleEdges} contextMenu={({
  data,
  onClose
}) => <RadialMenu onClose={onClose} items={[{
  label: 'Add Node',
  onClick: () => {
    alert('Add a node');
    onClose();
  }
}, {
  label: 'Remove Node',
  onClick: () => {
    alert('Remove the node');
    onClose();
  }
}]} />} />`,...(l=(t=o.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var r,i,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => <GraphCanvas nodes={simpleNodes} edges={simpleEdges} contextMenu={({
  data,
  onClose
}) => <RadialMenu onClose={onClose} items={[{
  label: 'Add Node',
  disabled: true,
  onClick: () => {
    alert('Add a node');
    onClose();
  }
}, {
  label: 'Remove Node',
  disabled: true,
  onClick: () => {
    alert('Remove the node');
    onClose();
  }
}]} />} />`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{n as Disabled,o as Simple,A as default};
//# sourceMappingURL=RadialMenu.story-39d26d5c.js.map
