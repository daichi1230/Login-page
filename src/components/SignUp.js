import { useState } from 'react';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const SignUp =() => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useAuthContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error.code);
            switch (error.code) {
                case 'auth/invalid-email':
                    setError('正しいメールアドレスの形式で入力してください');
                    break;
                case 'auth/weak-password':
                    setError('パスワードは6文字以上で入力してください');
                    break;
                case 'auth/email-already-in-use':
                    setError('このメールアドレスは既に登録されています。');
                    break;
                default:
                    setError('メールアドレスかパスワードに誤りがあります。');
                    break;
            }
        });
    };

    return (
        <div>
            <h1>ユーザー登録{user.email}</h1>
            <form onSubmit={handleSubmit}>
                {error && <p style={{color:'red'}}>{error}</p>}
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input  type="email"
                            name='email'
                            placeholder='email'
                            id='email' 
                    />
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input  type="password"
                            name='password'
                            placeholder='password'
                            id='password'
                    />
                </div>
                <div>
                    <button>登録</button>
                </div>
                <div>
                    すでにアカウントをお持ちの場合は<Link to={'/login'} style={{color: '#0ff'}}>こちら</Link>から
                </div>
            </form>
        </div>
    );
};

export default SignUp;