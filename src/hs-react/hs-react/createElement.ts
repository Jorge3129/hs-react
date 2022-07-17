import {HsReactNode} from "../types/element";
import {HsFC} from "../types/fc";


export const createElement = (
    type: string | HsFC,
    props: { [key: string]: any } | null,
    ...children: HsReactNode[]
): HsReactNode => {
   return {
      type,
      props: props || {},
      children
   }
}
