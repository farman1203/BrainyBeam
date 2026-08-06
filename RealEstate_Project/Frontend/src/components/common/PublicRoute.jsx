import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function PublicRoute({ children }) {
    const { user, loading } = useAuth();

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (user) {
        if (user.role === "admin") {
            return <Navigate to="/admin/dashboard" replace />;
        }
        if (user.role === "agent") {
            return <Navigate to="/agent/dashboard" replace />;
        }
        return <Navigate to="/buyer/dashboard" replace />;
    }

    return children;
}