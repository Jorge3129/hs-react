import {compTree} from "../../reconciliator/comp-tree";

export const useEffect = (callback: Function, depArray?: any[]) => {
   const path = compTree.path;
   const comp = compTree.current[path]
   comp.effectDepsIndex++
   const index = comp.effectDepsIndex;
   const hasNoDeps = !depArray
   const deps = comp.effectDeps[index]
   const hasChangedDeps = deps ? !depArray?.every((el, i) => JSON.stringify(el) === JSON.stringify(deps[i])) : true
   if (hasNoDeps || hasChangedDeps) {
      const oldCleanup = comp.effectCleanup[index];
      if (oldCleanup) oldCleanup()
      const cleanUp = callback()
      if (typeof cleanUp === "function") {
         comp.effectCleanup[index] = cleanUp
      }
      comp.effectDeps[index] = depArray
   }
}
