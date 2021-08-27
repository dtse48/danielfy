import { createContext } from "react";

export const Context = createContext({
    token:"",
    setToken: ((token) => {})
})