import HsReact, {useState} from "../../hs-react";
import {HsFC} from "../../hs-react/types/fc";
import {IUser} from "./UserList";

interface IProps {
   user: IUser
   deleteUser: (id: number) => void
}

const UserCard: HsFC<IProps> = ({user, deleteUser}) => {

   const [count, setCount] = useState(0);

   const handleClick = () => {
      setCount(count + 1)
   }

   return (HsReact.createElement(
           'div',
           {className: 'user-card'},
           HsReact.createElement(
               'div',
               null,
               user.name,
           ),
           HsReact.createElement(
               'button',
               {onClick: handleClick},
               "Click me !",
           ),
           `Count: ${count}`,
           HsReact.createElement(
               'div',
               null,
               HsReact.createElement(
                   'button',
                   {onClick: () => deleteUser(user.id)},
                   "Delete !",
               ),
           ),
       )
   );
};

export default UserCard;
