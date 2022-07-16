import {MyNode} from "../types/element";
import {compTree} from "../reconciliator/comp-tree";
import {appRoot} from "../hs-react-dom/createRoot";

type MyExtendedNode = MyNode | null | false | number | MyExtendedNode[];

export const createElement = (
    type: string | Function,
    props: { [key: string]: any } | null,
    ...children: MyExtendedNode[]
): MyNode => {
   const res = (() => {

      if (typeof type === "function") {
         // console.log(type.name)
         if (appRoot.firstRender) {
            const component = {name: type.name, state: [], children: [], stateIndex: -1};
            if (compTree.tree === null) compTree.tree = component
            //virtualDOM.currentComponent?.children.push(component)
            compTree.currentComponent = component;
         }
         if (compTree.currentComponent) {
            compTree.currentComponent.stateIndex = -1
         }
         const renderedNode = type(props);
         // console.log(type.name)
         // console.log(virtualDOM)
         return renderedNode;
      }

      const newChildren = transformChildren(children);

      const node: MyNode = {
         type,
         props: props || {},
         children: newChildren || []
      }
      // console.log(`<${node.type} class=${node.props.className}>`)

      return node;
   })()
   // console.log(res)
   return res
}

const transformChildren = (children: MyExtendedNode[]): MyNode[] => {
   return children.flatMap(child => {
      if (Array.isArray(child)) return [...transformChildren(child)]
      if (typeof child === "number") return [child + ''];
      if (!child) return []
      return [child];
   })
}
