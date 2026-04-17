import { useState } from "react";
import { createContext } from "react";


const AuthContext = createContext()

function AuthContextProvider({ children }) {
    const [user, setUser] = useState({})
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )

};

export {
    AuthContext,
    AuthContextProvider
}