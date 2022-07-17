import HsReact, {useState} from "../hs-react";
import UserCard from "./UserCard";
import {HsFC} from "../hs-react/types/fc";
import Wrapper from "./Wrapper";

export interface IUser {
   id: number
   name: string;
   age: number;
}

const initUsers: IUser[] = [
   {id: 1, name: "John", age: 20},
   {id: 2, name: "Paul", age: 22},
   {id: 3, name: "George", age: 21},
   {id: 4, name: "Ringo", age: 24},
]

const UserList: HsFC<{}> = () => {

   const [users, setUsers] = useState(initUsers);

   const deleteUser = (id: number) => {
      setUsers(users.filter(user => user.id !== id))
   }

   return (HsReact.createElement(
           'ul',
           {className: 'user_list'},
           // HsReact.createElement(
           //     Wrapper,
           users.map(user => HsReact.createElement(
               UserCard,
               {user, deleteUser, key: user.id})
           )
           // )
       )
   );
};

export default UserList;
