import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

//ユーザー登録(/signup)、ログインページ(/login)にアクセス制限をかける。/(ルート)に対してはPrivateRouteでアクセス制限をかけている

const PublicRoute = ({ children }) => {
    const { user } = useAuthContext();
    if (user) {
        return <Navigate to="/" />;
    }
    return <Outlet />;
};

export default PublicRoute;