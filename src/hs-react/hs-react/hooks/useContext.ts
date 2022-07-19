import {HsFC} from "../../types/fc";
import {createProvider} from "./Provider";

interface IContext<T> {
   value: T
   Provider: HsFC
}

export const createContext = <T>(defaultValue: T): IContext<T> => {
   return {
      value: defaultValue,
      Provider: createProvider()
   }
}

export const useContext = () => {

}
