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
           {
              className: 'user-card',
              style: {
                 backgroundColor: 'aliceblue',
                 borderRadius: '0.3rem',
                 margin: '1rem 0',
                 padding: '1rem'
              }
           },
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
                   {
                      className: 'danger',
                      onClick: () => deleteUser(user.id)
                   },
                   "Delete",
               ),
           ),
       )
   );
};

export default UserCard;
