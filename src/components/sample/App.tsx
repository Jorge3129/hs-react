import HsReact, {useState} from "../../hs-react";
import UserList from "./UserList";
import Header from "./Header";
import Form from "./Form";

const App = () => {

   const [show, setShow] = useState(false);

   return (
       HsReact.createElement(
           '',
           {value: ''},
           HsReact.createElement(
               'div',
               {
                  className: 'app',
               },
               HsReact.createElement(Header, {}),
               HsReact.createElement(UserList, {}),
               HsReact.createElement(
                   'button',
                   {
                      onClick: () => setShow(!show),
                   },
                   show ? "Hide form" : "Show form",
               ),
               show && HsReact.createElement(Form, {})
           )
       )

   );
}

export default App;
