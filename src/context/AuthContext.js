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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            console.log(user);
            setUser(user);
        });
        return () => unsubscribe();
    }, []);


    if (loading) {
        return <p> loading...</p>;
    } else {
    return ( <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider> );
    }
}