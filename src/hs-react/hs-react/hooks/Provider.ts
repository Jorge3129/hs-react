import {HsFC, PropsWithChildren} from "../../types/fc"
import HsReact from "../../index";
import {Fragment} from "../Fragment";


interface IProps<T> {
   value: T
}

type FullProps<T> = PropsWithChildren<IProps<T>>

export const createProvider = (): HsFC<FullProps<any>> => {
   const Provider: HsFC<FullProps<any>> = <T>({value, children}: FullProps<T>) => {
      return HsReact.createElement(
          Fragment,
          {},
          ...children
      )
   }
   Provider.displayName = "Provider"
   return Provider
}
