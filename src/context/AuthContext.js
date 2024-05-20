import { createContext, useState, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth as firebaseAuth } from './Firebase';

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//        // console.log('User is signed in');
//         const uid = user.uid;
//     } else {
//        // console.log('No user is signed in');
//     }
// });

const AuthContext = createContext();

export function useAuthContext() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            console.log(user);
            setUser(user);
        });
        return () => unsubscribe();
    }, []);

    const value = {
        user,
    };

    return  <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>;
}


