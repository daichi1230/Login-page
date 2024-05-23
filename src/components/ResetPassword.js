import { FirebaseError } from "firebase/app"
import { useState } from "react"

const submitPasswordResetEmail = async () => {
    const actionCodeSettings = {
        //パスワード再設定後のりダイレクト先
        url: 'http://localhost:3000/LogIn',
        handleCodeInApp: false,
    }

    await auth.sendPasswordResetEmail(email, actionCodeSettings)
    .then((resp) => {
        //メール送信成功時の処理
        alert("パスワードリセットメールを送信しました")
    }).catch((error)=> {
        //メール送信失敗時の処理
        alert("パスワードリセットメールの送信に失敗しました")
        console.error(error);
    });
};

const NewPassword =() => {
    const [actionCode, setActionCode] = useState('')
    const [password, setPassword] = useState('')

    //初回のレンダリングのみ実行
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const oobCode = queryParams.get('oobCode') || ''
        setMode(mode)
        setActionCode(oobCode)
    }, [])

    const handleSubmit = (e) => { e.preventDefault()
        if(oobCode === '') return //取得できない場合は処理終了

        FirebaseError.auth().verifyPasswordResetCode(actionCode).then(()=> {
            FirebaseError.auth().confirmPasswordReset(actionCode, password).then(async (resp)=> {
                console.log("Success")
                //成功。ログイン画面などを表示するコードを足す場所
        }).catch((error) => {
            console.log(error)
        })
        })
    }

return (
    <div>
        {/* Add JSX code here */}
    </div>
);
}
