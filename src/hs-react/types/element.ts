import {HsFC} from "./fc";

export type Key = string | number

export interface HsReactElement {
   type: string | HsFC;
   props: any;
   // children: HsReactNode[]
}

export type HsReactText = string | number;
export type HsReactChild = HsReactElement | HsReactText;

export interface HsReactNodeArray extends Array<HsReactNode> {
}

export type HsReactFragment = {} | HsReactNodeArray;

export type HsReactNode = HsReactChild | boolean | null | undefined | HsReactNodeArray;
