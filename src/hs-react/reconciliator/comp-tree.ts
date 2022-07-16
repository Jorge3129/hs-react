import { IComponent } from "./component"

export interface IVirtualDOM {
   tree: IComponent | null
   currentComponent: IComponent | null
}


export const compTree: IVirtualDOM = {
   tree: null,
   currentComponent: null
}
