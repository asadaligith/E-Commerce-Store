import { use, useContext, useState } from "react";
import { createContext } from "react";


const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    return (
        <AuthContext.Provider value={{ user, setUser }}  >
            {children}
        </AuthContext.Provider>
    )

};
const authcontext = () => useContext(AuthContext)

export {
    authcontext,
    AuthContextProvider
}