import HsReact, {useState} from "./hs-react";
import './App.css'
import NavBar from "./components/NavBar";
import {IRoute} from "./components/models/route";

const routes: IRoute[] = [
   {path: "/", title: "Home"},
   {path: "/app", title: "App"},
   {path: "/about", title: "About"},
   {path: "/profile", title: "Profile"},
]

function App() {

   const [route, setRoute] = useState(routes[0]);

   return (
       HsReact.createElement(
           'div',
           {
              className: 'app',
           },
           // `Route: ${route.path}`,
           HsReact.createElement(NavBar, {routes, setRoute}),
           HsReact.createElement(
               'div',
               null,
               HsReact.createElement(
                   'h2',
                   null,
                   `${route.title} Page`
               )
           )
       )
   );
}

export default App;
