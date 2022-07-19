import {HsReactNode} from "../types/element";
import {HsFC, HsReactProps} from "../types/fc";

export const createElement = <T extends (string | HsFC)>(
    type: T,
    props: T extends HsFC<infer P> ?
        HsReactProps<P> :
        { [key: string]: any } | null,
    ...children: HsReactNode[]
): HsReactNode => {
   return {
      type,
      props: {...(props || {}), children},
   }
}
