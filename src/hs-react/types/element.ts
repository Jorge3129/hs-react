export interface ElementNode {
   type: string
   props: { [key: string]: any }
   children: MyNode[]
}

export type FC<T = any> = (props: T) => MyNode

export type MyNode = ElementNode | string
