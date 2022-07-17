import HsReact, {useState} from "../../hs-react";
import {HsFC} from "../../hs-react/types/fc";


const Header: HsFC = () => {

   const [count, setCount] = useState("Baaka");

   const handleClick = () => {
      setCount(count + 1)
   }

   return (HsReact.createElement(
           'div',
           {className: 'header'},
           "Hello World",
           HsReact.createElement(
               'button',
               {onClick: handleClick},
               "Click me !",
           ),
           `Count: ${count}`
       )
   );
};

export default Header;
