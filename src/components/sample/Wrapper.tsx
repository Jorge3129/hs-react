import {HsFC, PropsWithChildren} from "../../hs-react/types/fc";
import HsReact, {useState} from "../../hs-react";
import './Wrapper.css'


const Wrapper: HsFC<PropsWithChildren> = ({children}) => {

   console.log(children)

   return (HsReact.createElement(
           'div',
           {className: 'outer_wrapper'},
           children
       )
   );
};

export default Wrapper;
