import { IS_LOGIN, UPDATE_NAME } from "./constants";

export const toggleLogin = () =>({
    type:IS_LOGIN
}) 

export const updateName = (name) =>({
    type:UPDATE_NAME,
    payload:name
})