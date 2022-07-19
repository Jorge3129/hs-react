import {HsReactNode} from "./element";

export type HsFC<P = any> = ((props: P) => HsReactNode) & { displayName?: string }

export type HsReactProps<P> = Omit<P & { key?: string | number }, "children">

export type PropsWithChildren<P = any> = P & { children: HsReactNode[] }
