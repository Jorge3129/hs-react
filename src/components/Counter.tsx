import {HsFC} from "../hs-react/types/fc";
import HsReact, {useState} from "../hs-react";
import {useEffect} from "../hs-react";

const Counter: HsFC<{}> = () => {

   const [count, setCount] = useState(0);

   useEffect(() => {
      // const timer = setInterval(() => {
      //    console.log(count)
      //    setCount(count + 1)
      // }, 500)
      // // console.log("a")
      // return () => {
      //    clearInterval(timer)
      // }
   }, []);

   return (HsReact.createElement(
           'div',
           {
              style: {
                 backgroundColor: 'aliceblue',
                 borderRadius: '0.3rem',
                 margin: '1rem 0',
                 padding: '1rem'
              }
           },
           `Counter: ${count}`
       )
   );
};

export default Counter;
