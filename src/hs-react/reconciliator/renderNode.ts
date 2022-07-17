import {HsReactElement, HsReactNode} from "../types/element";
import {compTree} from "./comp-tree";

export const renderNode = ({type, props, children}: HsReactElement, path: number[]): HsReactNode => {
   const res = (() => {
      if (typeof type === "function") {
         const componentName = type.name + path.join(',')
         compTree.path = componentName
         if (!compTree[componentName]) {
            compTree[componentName] = {name: componentName, state: [], children: [], stateIndex: -1};
         }
         compTree[componentName].stateIndex = -1
         const renderedNode = type(props);
         if (Array.isArray(renderedNode)) {
            return renderedNode.map((c, i) => renderNode(c as any, [...path, i]))
         }
         if (typeof renderedNode === "object" && renderedNode !== null && renderedNode.children.length) {
            return renderNode(renderedNode, path)
         }
         return renderedNode;
      }

      const newChildren = transformChildren(children, path);

      const node: HsReactNode = {
         type,
         props: props || {},
         children: newChildren
      }
      // console.log(`<${node.type} class=${node.props.className}>`)

      return node;
   })()
   // console.log(res)
   return res
}

const transformChildren = (children: HsReactNode[], path: number[]): HsReactNode[] => {
   return children.flatMap((child, i) => {
      if (Array.isArray(child)) return [...transformChildren(child, [...path, i])]
      if (typeof child === "number") return [child + ''];
      if (typeof child === "string") return [child];
      if (!child || typeof child === "boolean") return []
      return [renderNode(child, [...path, i])];
   })
}

export default {}
