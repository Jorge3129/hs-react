import {HsFC} from "../hs-react/types/fc";
import HsReact, {useState} from "../hs-react";

interface IProps {
   //userName: string
}

const Form: HsFC<IProps> = () => {

   const [name, setName] = useState("");

   return (HsReact.createElement(
           'form',
           {className: 'user-form'},
           HsReact.createElement(
               'div',
               null,
               HsReact.createElement(
                   'input',
                   {
                      type: "text",
                      placeholder: "Enter name...",
                      value: name,
                      onChange: (e: any) => {
                         // console.log(e)
                         setName(e.target.value)
                      },
                   },
               ),
           ),
           HsReact.createElement(
               'div',
               null,
               `Name: ${name}`,
           )
       )
   );
};

export default Form;
