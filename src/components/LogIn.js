import { auth } from './Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password} = e.target.elements;

        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/');
        }).catch((error) => {
            switch (error.code) {
                case 'auth/invalid-email':
                    setError('正しいメールアドレスの形式で入力してください');
                    break;
                case 'auth/user-not-found':
                    setError('メールアドレスかパスワードに誤りがあります。');
                    break;
                case 'auth/user-not-found':
                    setError('メールアドレスかパスワードに誤りがあります。');
                    break;
                default:
                    setError('メールアドレスかパスワードに誤りがあります。');
                    break;
            }
            console.log(error.code);
            console.log(error.message);
        });
    }

    return (
        <div>
            <h1>ログイン</h1>
            <form onSubmit={handleSubmit}>
                {error && <p style={{color:'red'}}>{error}</p>}
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input type="email" name="email" placeholder="email" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input type="password" name="password" placeholder="password" id="password" />
                    <Link to={'/ChangePassword'} style={{ color: '#0ff' }}>パスワードをお忘れですか？</Link>
                </div>
                <div>
                    <button>ログイン</button>
                </div>
                <div>
                    <p>アカウントをお持ちではありませんか？</p>
                    <Link to={'/SignUp'} style={{ color: '#0ff'}}>アカウントを新規作成</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;