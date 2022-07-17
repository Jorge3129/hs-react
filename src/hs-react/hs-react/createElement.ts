import {HsReactNode} from "../types/element";
import {HsFC} from "../types/fc";

export const createElement = <T extends (string | HsFC)>(
    type: T,
    props: T extends HsFC<infer P> ?
        P & { key?: string | number } :
        { [key: string]: any } | null,
    ...children: HsReactNode[]
): HsReactNode => {
   return {
      type,
      props: {...(props || {}), children},
   }
}
