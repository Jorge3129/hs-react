import HsReact, {createContext, useState} from "./hs-react";
import './App.css'
import NavBar from "./components/NavBar";
import {IRoute} from "./components/models/route";
import {useEffect} from "./hs-react";
import UserList from "./components/UserList";
import Counter from "./components/Counter";
import AboutPage from "./components/AboutPage";


const routes: IRoute[] = [
   {path: "/", title: "Home", component: Counter},
   {path: "/app", title: "App", component: UserList},
   {path: "/about", title: "About", component: AboutPage},
   {path: "/profile", title: "Profile"},
]

const RouteContext = createContext<any>(1);

function App() {

   const [routePath, setRoutePath] = useState("/");

   useEffect(() => {
      // console.log(route.path)
   }, [routePath])

   const onPopState = (e: any) => {
      const path = window.location.pathname;
      // console.log(path)
      setRoutePath(path)
   }

   useEffect(() => {
      window.addEventListener('popstate', onPopState)
      return () => {
         window.removeEventListener('popstate', onPopState)
      };
   }, []);

   const route = routes.filter(r => r.path === routePath)[0]

   return (
       HsReact.createElement(
           'div',
           {
              className: 'app',
           },
           HsReact.createElement(
               RouteContext.Provider,
               {value: ''},
               // `Route: ${route.path}`,
               HsReact.createElement(NavBar, {routes, setRoutePath}),
               HsReact.createElement(
                   'div',
                   null,
                   HsReact.createElement(
                       'h2',
                       null,
                       `${route.title} Page`
                   ),
                   route.component &&
                   HsReact.createElement(
                       route.component,
                       {}
                   )
               )
           )
       )
   );
}

export default App;
