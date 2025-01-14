import { createContext } from "react";

const UserContext = createContext({
    user : {
        name : "Dummy Name",
        email :"Dummy Email"
    }
});

// this is only for de-bugging purpose
UserContext.displayName = "UserContext"

export default UserContext;