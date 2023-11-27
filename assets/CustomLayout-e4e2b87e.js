import{j as e}from"./jsx-runtime-9c4ae004.js";import{M as i,b as r}from"./index-89487369.js";import{u as s}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-6b53837e.js";import"../sb-preview/runtime.js";import"./chunk-H6ZRF7XV-146ce0bc.js";import"./index-d475d2ea.js";import"./index-6fd5a17b.js";import"./extends-98964cd2.js";import"./index-7579bee9.js";import"./index-356e4a49.js";function t(o){const n=Object.assign({h1:"h1",p:"p",h2:"h2",code:"code",pre:"pre"},s(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Advanced/Custom Layout"}),`
`,e.jsx(n.h1,{id:"custom-layout",children:"Custom Layout"}),`
`,e.jsx(n.p,{children:`You can provide a custom layout for the graph. This is useful if
you want to use a layout we don't provide out of the box or have
a specific layout you wish to use.`}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:["To use a custom layout, you need to set the ",e.jsx(n.code,{children:"layoutType"})," to ",e.jsx(n.code,{children:"custom"}),` and
provide `,e.jsx(n.code,{children:"layoutOverrides"})," with a ",e.jsx(n.code,{children:"getNodePosition"}),` function that will return
the `,e.jsx(n.code,{children:"x/y/z"})," position for a given node id."]}),`
`,e.jsx(n.p,{children:"Here is a basic example:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { GraphCanvas, CustomLayoutInputs, NodePositionArgs } from 'reagraph';

const App = () => (
  <GraphCanvas
    layoutType="custom"
    layoutOverrides={{
      getNodePosition: (id: string, { nodes }: NodePositionArgs) => {
        const idx = nodes.findIndex(n => n.id === id);
        const node = nodes[idx];

        // IMPORTANT CODE HERE
        return {
          x: 25 * idx,
          y: idx % 2 === 0 ? 0 : 50,
          z: 1
        };
      }
    } as CustomLayoutInputs}
    nodes={simpleNodes}
    edges={simpleEdges}
  />
);
`})}),`
`,e.jsxs(n.p,{children:["In this example, the ",e.jsx(n.code,{children:"getNodePosition"}),` function returns a position
based on the index found in the graph. This is just a simple example
to show how to use the `,e.jsx(n.code,{children:"getNodePosition"})," function."]}),`
`,e.jsx(n.p,{children:"The interface for this is as follows:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// NOTE: Abbreviated version of the interface
export interface LayoutFactoryProps {
  /**
   * Get the node position for a given node id.
   */
  getNodePosition: (id: string, args: NodePositionArgs) => InternalGraphNode;
}

export interface NodePositionArgs {
  /**
   * The graphology object. Useful for any graph manipulation.
   */
  graph: Graph;

  /**
   * Any nodes that were dragged. This is useful if you want to override
   * the position of a node when dragged.
   */
  drags?: DragReferences;

  /**
   * The nodes for the graph.
   */
  nodes: InternalGraphNode[];

  /**
   * The edges for the graph.
   */
  edges: InternalGraphEdge[];
}
`})}),`
`,e.jsx(n.h2,{id:"example",children:"Example"}),`
`,e.jsx("div",{style:{height:400,width:"100%",position:"relative",margin:"0 auto",background:"white",borderRadius:4,border:"1px solid rgba(0,0,0,.1)",boxShadow:"rgb(0 0 0 / 10%) 0 1px 3px 0",overflow:"hidden"},children:e.jsx(r,{id:"demos-layouts--custom"})})]})}function y(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e.jsx(n,Object.assign({},o,{children:e.jsx(t,o)})):t(o)}export{y as default};
//# sourceMappingURL=CustomLayout-e4e2b87e.js.map
