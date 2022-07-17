import HsReact from "../hs-react";
import UserCard from "./UserCard";
import {HsFC} from "../hs-react/types/fc";

interface IProps {
   userName: string
}

const users = [
   {name: "John", age: "20"},
   {name: "Paul", age: "22"},
   {name: "George", age: "21"},
   {name: "Ringo", age: "24"},
]

const UserList: HsFC<{}> = () => {
   return (HsReact.createElement(
           'ul',
           {className: 'user-card'},
           users.map(user => HsReact.createElement(UserCard, {userName: user.name}))
       )
   );
};

export default UserList;
