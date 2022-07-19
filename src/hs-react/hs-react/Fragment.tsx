import {HsFC, PropsWithChildren} from "../types/fc";
import HsReact from "../index";

export const Fragment: HsFC<PropsWithChildren> =
    ({children}) => {
       return HsReact.createElement(
           'fragment',
           {},
           ...children
       )
    }
