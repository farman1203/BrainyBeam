import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // LOGIN
    const login = async (formData) => {
        await axios.post("http://localhost:3000/api/auth/login", formData,
            {
                withCredentials: true,
            }
        );
        const res = await axios.get("http://localhost:3000/api/auth/profile",
            {
                withCredentials: true,
            }
        );
        setUser(res.data.user);
        return res.data.user;
    };

    // GET USER
    const getUser = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/auth/profile",
                {
                    withCredentials: true,
                }
            );
            setUser(res.data.user);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };
    // LOGOUT
    const logout = async () => {
        try {
            await axios.post("http://localhost:3000/api/auth/logout",
                {},
                {
                    withCredentials: true,
                }
            );
        } catch (error) { }
        setUser(null);
    };
    useEffect(() => {
        getUser();
    }, []);

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, getUser, }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);