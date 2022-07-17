import HsReact, {useState} from "../hs-react";
import {HsFC} from "../hs-react/types/fc";

interface IProps {
   userName: string
}

const UserCard: HsFC<IProps> = ({userName}) => {

   const [count, setCount] = useState(0);

   const handleClick = () => {
      setCount(count + 1)
   }

   return (HsReact.createElement(
           'div',
           {className: 'user-card'},
           userName,
           HsReact.createElement(
               'button',
               {onClick: handleClick},
               "Click me !",
           ),
           `Count: ${count}`
       )
   );
};

export default UserCard;
