import {FC} from "../hs-react/types/element";
import HsReact from "../hs-react";
import UserCard from "./UserCard";

interface IProps {
   userName: string
}

const users = [
   {name: "John", age: "20"},
   {name: "Paul", age: "22"},
   {name: "George", age: "21"},
   {name: "Ringo", age: "24"},
]

const UserList: FC<{}> = () => {
   return (HsReact.createElement(
           'ul',
           {className: 'user-card'},
           users.map(user => HsReact.createElement(UserCard, {userName: user.name}))
       )
   );
};

export default UserList;
