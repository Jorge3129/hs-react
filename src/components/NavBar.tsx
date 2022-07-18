import {HsFC} from "../hs-react/types/fc";
import HsReact, {useState} from "../hs-react";
import './styles/NavBar.css'
import {IRoute} from "./models/route";

interface IProps {
   routes: IRoute[]
   setRoute: (route: IRoute) => void
}

const NavBar: HsFC<IProps> = ({routes, setRoute}) => {

   return HsReact.createElement(
       'nav',
       {
          className: 'navbar',
       },
       HsReact.createElement(
           'ul',
           {className: 'navbar_list'},
           routes.map(route => HsReact.createElement(
               'li',
               {
                  className: 'navbar_list_item',
                  onClick: () => {
                     window.history.pushState(null, "", route.path);
                     setRoute(route)
                  },
               },
               route.title
           ))
       )
   )
};

export default NavBar;
