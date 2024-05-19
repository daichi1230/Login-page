import { useState } from 'react';
const SignUp =() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        event.preventDefault();
        console.log(email, password);
    };
    const handleChangeEmail = (e) => {
        setEmail(event.currentTarget.value);
    };
    const handleChangePassword = (e) => {
        setPassword(event.currentTarget.value);
    };

    return (
        <div>
            <h1>ユーザー登録</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">メールアドレス</label>
                    <input  type="email"
                            name='email'
                            placeholder='email'
                            onChange={(event) => handleChangeEmail(event)} 
                    />
                </div>
                <div>
                    <label htmlFor="">パスワード</label>
                    <input  type="password"
                            name='password'
                            placeholder='password'
                            onChange={(event) => handleChangePassword(event)}
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