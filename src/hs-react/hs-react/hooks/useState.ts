import {appRoot} from "../../hs-react-dom/createRoot";
import {compTree} from "../../reconciliator/comp-tree";

const useState = <T>(initValue: T) => {
   const path = compTree.path;
   const comp = compTree.current[path]
   comp.stateIndex++
   const index = comp.stateIndex;

   if (!compTree.old[path]) {
      comp.state.push(initValue)
   }

   const setValue = (value: T) => {
      const comp = compTree.current[path];
      if (comp && index !== undefined) {
         comp.state[index] = value;
      }
      appRoot.rerender()
   }
   return [comp.state[comp.stateIndex], setValue] as [T, (value: T) => void]
}


export default useState


