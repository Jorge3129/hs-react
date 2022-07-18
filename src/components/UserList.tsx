import {HsFC} from "../hs-react/types/fc";
import HsReact, {useState} from "../hs-react";
import UserCard from "./sample/UserCard";
import {useEffect} from "../hs-react/hs-react/hooks/useEffect";

export interface IUser {
   id: number
   name: string;
   age: number
}

const UserList: HsFC<{}> = () => {

   const [users, setUsers] = useState<IUser[]>([]);

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(json => {
             setTimeout(() => {
                if (Array.isArray(json)) setUsers(json)
             }, 500)
          })
   }, []);


   const deleteUser = (id: number) => {
      setUsers(users.filter(user => user.id !== id))
   }

   return (HsReact.createElement(
           'ul',
           {
              className: 'user_list',
              style: {
                 display: 'flex',
                 flexDirection: 'column',
                 width: 'fit-content',
                 margin: '0 auto'
              }
           },
           !users.length ? `Loading...` :
               users.map(user => HsReact.createElement(
                   UserCard,
                   {user, deleteUser, key: user.id})
               )
       )
   );
};

export default UserList;
