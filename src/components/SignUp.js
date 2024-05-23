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
    //input要素に入力した値を取得してFirebaseに送信する
    //React HookのuseStateを利用して、input要素に入力した値を変数に保存してhandleSubmit実行時に保存した値を取得する
    const handleSubmit = (e) => {
        e.preventDefault();
        //firebaseにユーザを登録する処理
        //メソッドの引数には、authオブジェクトとemail、passwordを渡す
        createUserWithEmailAndPassword(auth, email, password).then(() => {
    //登録が成功したらホームページに遷移する
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