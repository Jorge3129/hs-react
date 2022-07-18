import {IComponent} from "./component";

interface ICompTree {
   current: {[key: string]: IComponent}
   old: {[key: string]: IComponent}
   path: string
}

export const compTree: ICompTree = {
   current: {},
   old: {},
   path: ""
}
