import HsReact, {useState} from "./hs-react";
import './App.css'
import NavBar from "./components/NavBar";
import {IRoute} from "./components/models/route";
import {useEffect} from "./hs-react/hs-react/hooks/useEffect";
import UserList from "./components/UserList";
import Counter from "./components/Counter";

const routes: IRoute[] = [
   {path: "/", title: "Home"},
   {path: "/app", title: "App", component: UserList},
   {path: "/about", title: "About"},
   {path: "/profile", title: "Profile"},
]

function App() {

   const [route, setRoute] = useState(routes[0]);

   useEffect(() => {
      // console.log(route)
   }, [route])

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
               ),
               route.title === "App" ?
                   HsReact.createElement(
                       UserList,
                       {}
                   )
                   : route.title === "Home" ?
                       HsReact.createElement(
                           Counter,
                           {}
                       )
                       : null
           )
       )
   );
}

export default App;
