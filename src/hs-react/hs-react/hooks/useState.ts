import {appRoot} from "../../hs-react-dom/createRoot";
import {compTree} from "../../reconciliator/comp-tree";

export const UseState = (() => {

   const useState = <T>(initValue: T) => {
      const comp = compTree.currentComponent;
      if (comp) {
         comp.stateIndex++
      }
      const index = comp?.stateIndex;

      if (appRoot.firstRender && comp) {
         comp.state.push(initValue)
      }

      const setValue = (value: T) => {
         const comp = compTree.currentComponent;
         if (comp && index !== undefined) {
            comp.state[index] = value;
         }
         appRoot.rerender()
         console.log(compTree.currentComponent?.state)
      }
      return [comp?.state[comp?.stateIndex], setValue] as [T, (value: T) => void]
   }

   return useState;
})()


export default UseState


