import {HsFC, PropsWithChildren} from "../hs-react/types/fc";
import HsReact, {useState} from "../hs-react";


const Wrapper: HsFC<PropsWithChildren> = ({children}) => {
   return (HsReact.createElement(
           'div',
           {className: 'outer-wrapper'},
           HsReact.createElement(
               'div',
               {className: 'inner-wrapper'},
               children
           )
       )
   );
};

export default Wrapper;
