import { createContext, useState, useContext, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from '../Firebase';

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const value = {
        user,
        loading,
    };
//useEffectを利用して、マウント時にonAuthStateChangedメソッドを実行してユーザーの認証状態を取得する
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
}
//[]はuseEffectの中の処理をAuthContext.jsのマウント時に一度だけ実行するために指定している
//アンマウント時はリスナーとして監視が必要なくなるため、unsubscribe()を実行している


//下記のコードはHomeコンポーネント以外にもアクセス制限をかけるときには分岐の処理を毎回記述する必要があり、非効率である
//そのため、PrivateRoute.jsを作成して、アクセス制限をかけるコンポーネントをラップすることで、コードの重複を防ぐ
//     if (loading) {
//         return <p> loading...</p>;
//     } else {
//     return ( <AuthContext.Provider value={value}>
//                 {children}
//             </AuthContext.Provider> );
//     }