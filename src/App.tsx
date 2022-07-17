import HsReact, {useState} from "./hs-react";
import './App.css'
import Header from "./components/Header";
import UserList from "./components/UserList";

function App() {

   const [show, setShow] = useState(false);
   const [name, setName] = useState("");

   return (
       HsReact.createElement(
           'div',
           {
              className: 'app',
           },
           HsReact.createElement(Header, null),
           HsReact.createElement(UserList, null),
           HsReact.createElement(
               'button',
               {
                  onClick: () => setShow(!show),
               },
               "Click me !",
           ),
           show && HsReact.createElement(
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
               `Name: ${name}`,
           )
       )
   );
}

export default App;
