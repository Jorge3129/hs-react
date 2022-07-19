import {HsReactComponent} from "../types/element"
import {compTree} from "./comp-tree";
import {renderNode} from "./renderNode";

export const renderComponent = ({type, props}: HsReactComponent, path: number[]) => {
   const componentName = (type.name || type.displayName) + path.join(',')
   // console.log(new Array(path.length).fill(" ").join("") + `<${componentName}>`)
   compTree.path = componentName
   if (!compTree.old[componentName]) {
      compTree.current[componentName] = {
         name: componentName,
         state: [],
         stateIndex: -1,
         effectDeps: [],
         effectDepsIndex: -1,
         effectCleanup: []
      };
   } else {
      compTree.current[componentName] = JSON.parse(JSON.stringify(compTree.old[componentName]))
   }
   compTree.current[componentName].stateIndex = -1
   compTree.current[componentName].effectDepsIndex = -1
   const renderedNode = type(props);
   //@ts-ignore
   if (typeof renderedNode === "object" && renderedNode !== null && renderedNode.props.children.length) {
      //@ts-ignore
      return renderNode(renderedNode, path)
   }
   return renderedNode;
}


export default {}
