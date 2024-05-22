import { auth } from '../Firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';


const Home = () => {
    const navigate = useNavigate();
    const { user } = useAuthContext();
    const handleLogout = () => {
        signOut(auth);
        navigate('/login');
    };

    return (
        <div>
            <h1>ホームページ</h1>
            <button onClick={handleLogout}>ログアウト</button>
        </div>
    );
};

export default Home;