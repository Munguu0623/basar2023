import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "./firebase";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const router = useRouter();

  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    signOut(auth).then((res) => {
      // clear up the cookies
      // maybe update the database
      console.log("Signed out");
      router.push("/");
    });
  };

  const authStateChangeHandler = (authState) => {
    if (!authState) {
      // console.log("user is not logged in");
      // redirect the user to index page
      setAuthUser(null);
      setLoading(false);
      // also clear out cookies if you want
      //   router.push("/");
    } else {
      // console.log("welcome back");
      // also set  cookies if you want
      console.log(authState);
      setAuthUser({
        uid: authState.uid,
        email: authState.email,
        username: authState.displayName,
        photoURL: authState.photoURL,
      });
      router.push("/");
      setLoading(false);
    }
  };

  // this will called once the component is mounted/initialized
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChangeHandler);

    return () => {
      unsubscribe();
    };
  }, []);

  return {
    user: authUser,
    loading: loading,
    logOut: handleLogout,
    setAuthUser: setAuthUser,
  };
}

export const AuthUserProvider = ({ children }) => {
  const author = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={author}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
