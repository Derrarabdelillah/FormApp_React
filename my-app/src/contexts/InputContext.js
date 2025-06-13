import { createContext } from "react";

export let InputContext = createContext({
    value: "",
    title: "",
    handlChange: null,
    type: "",
})