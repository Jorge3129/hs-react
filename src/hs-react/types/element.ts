import {HsFC} from "./fc";

export type Key = string | number

export interface HsReactElement {
   type: string | HsFC;
   props: any;
   // children: HsReactNode[]
}

export interface HsReactComponent {
   type: HsFC;
   props: { [key: string]: any };
}

export interface HsDOMObjectElement {
   type: string;
   props: { [key: string]: any };
   children: HsDOMElement[]
}

export type HsDOMElement = HsDOMObjectElement | string

export type HsReactText = string | number;
export type HsReactChild = HsReactElement | HsReactText;

export type HsReactNode = HsReactChild | boolean | null | undefined | HsReactNode[];
