import {HsFC} from "../hs-react/types/fc";
import HsReact from "../hs-react";
import './styles/NavBar.css'
import {IRoute} from "./models/route";

interface IProps {
   routes: IRoute[]
   setRoutePath: (route: string) => void
}

const NavBar: HsFC<IProps> = ({routes, setRoutePath}) => {

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
                     setRoutePath(route.path)
                     // window.dispatchEvent(new Event('popstate'));
                  },
               },
               route.title
           ))
       )
   )
};

export default NavBar;
