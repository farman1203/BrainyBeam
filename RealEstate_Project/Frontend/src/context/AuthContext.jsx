import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkAuth();
    }, []);

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

    //check user
    const checkAuth = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/auth/profile", {
                withCredentials: true,
            });

            setUser(res.data.user);
        } catch (err) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);