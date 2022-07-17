import {HsReactNode} from "./element";

export type HsFC<P = any> = (props: P) => HsReactNode

export type PropsWithChildren<P = any> = P & { children: HsReactNode[] }
