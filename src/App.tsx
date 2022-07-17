import HsReact, {useState} from "./hs-react";
import './App.css'
import Header from "./components/Header";
import UserList from "./components/UserList";
import Form from "./components/Form";

function App() {

   const [show, setShow] = useState(false);

   return (
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
   );
}

export default App;
