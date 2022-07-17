import {HsReactElement, HsReactNode} from "../types/element";
import {compTree} from "./comp-tree";

export const renderNode = ({type, props}: HsReactElement, path: number[]): HsReactNode => {
   const res = (() => {
      if (typeof type === "function") {
         const componentName = type.name + path.join(',')
         compTree.path = componentName
         if (!compTree.old[componentName]) {
            compTree.current[componentName] = {name: componentName, state: [], stateIndex: -1};
         } else {
            compTree.current[componentName] = JSON.parse(JSON.stringify(compTree.old[componentName]))
         }
         compTree.current[componentName].stateIndex = -1
         const renderedNode = type(props);
         if (Array.isArray(renderedNode)) {
            return renderedNode.map((c, i) => {
               return renderNode(c as any,
                   //@ts-ignore
                   [...path, typeof c === "object" && c !== null ? c.props.key : i]
               )
            })
         }
         if (typeof renderedNode === "object" && renderedNode !== null && renderedNode.props.children.length) {
            return renderNode(renderedNode, path)
         }
         return renderedNode;
      }

      const newChildren = transformChildren(props.children, path);

      const node: HsReactNode = {
         type,
         props: {...props || {}, children: newChildren},
      }

      return node;
   })()
   // console.log(res)
   return res
}

const transformChildren = (children: HsReactNode[], path: number[], useKey?: boolean): HsReactNode[] => {
   return children.flatMap((child, i) => {
      if (Array.isArray(child)) return [...transformChildren(child, [...path, i], useKey)]
      if (typeof child === "number") return [child + ''];
      if (typeof child === "string") return [child];
      if (!child || typeof child === "boolean") return []
      const key = child.props.key !== undefined ? child.props.key : i
      return [renderNode(child, [...path, key])];
   })
}

export default {}
