import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

//userオブジェクトにアクセスを行い、userオブジェクトがnullの場合/loginにリダイレクトされ、ログインしている場合はchildrenが表示される
//Home以外にもページを増やした場合には同じようにPrivateRouteでラップすることでアクセス制限をかけることができる
const PrivateRoute = ({ children }) => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;