import { useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useAuthContext } from './context/AuthContext';

const SignUp =() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useAuthContext();
    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password);
    };
    const handleChangeEmail = (e) => {
        setEmail(e.currentTarget.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.currentTarget.value);
    };

    return (
        <div>
            <h1>ユーザー登録{user.email}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">メールアドレス</label>
                    <input  type="email"
                            name='email'
                            placeholder='email'
                            onChange={(e) => handleChangeEmail(e)} 
                    />
                </div>
                <div>
                    <label htmlFor="password">パスワード</label>
                    <input  type="password"
                            name='password'
                            placeholder='password'
                            onChange={(e) => handleChangePassword(e)}
                    />
                </div>
                <div>
                    <button>登録</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;