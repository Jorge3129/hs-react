import {HsReactElement, HsReactNode} from "../types/element";
import {renderComponent} from "./renderComponent";

export const renderNode = ({type, props}: HsReactElement, path: number[]): HsReactNode => {
   const res = (() => {
      if (typeof type === "function") {
         return renderComponent({type, props}, path);
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
