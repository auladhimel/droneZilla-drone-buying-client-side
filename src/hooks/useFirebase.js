import { useState, useEffect } from "react";
import initializeFirebase from "../Components/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [IsLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }

    // observer user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;

    }
        , [])

    return {
        user,
        IsLoading,
        authError,
        registerUser,
        logout,
        loginUser,
    }

}
export default useFirebase;