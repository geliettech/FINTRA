import { useState, useEffect } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { Navigate, useNavigate } from "react-router";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";



const SignIn = () => {

    const navigate = useNavigate();
    const { isAuth } = useGetUserInfo()
 const [logInEmail, setLogInEmail] = useState("");
    const [logInPassword, setLogInPassword] = useState("");
    const [user, setUser] = useState(null);

    // Run once on component mount
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup listener when component unmounts
        return () => unsubscribe();
    }, []);



    // Sign In
    const signIn = async () => {
        try {
            const result = await signInWithEmailAndPassword(auth, logInEmail, logInPassword);
            const authInfo = {
                userID: result.user.uid,
                email: result.user.email,
                isAuth: true
            }
            localStorage.setItem("auth", JSON.stringify(authInfo));
            navigate("/dashboard");
        } catch (err) {
            console.error(err);
        }
    };

    // Sign In with Google
    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, googleProvider)
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePic: results.user.photoURL,
            isAuth: true
        }
        localStorage.setItem("auth", JSON.stringify(authInfo));
        navigate("/dashboard")
    };

    if (isAuth) {
        return <Navigate to="/dashboard" />
    }

    return (
        <div className="auth-card">
            <p>Sign In to Continue</p>
                <input
                    placeholder="Email..."
                    type="email"
                    value={logInEmail}
                    onChange={(e) => setLogInEmail(e.target.value)}
                />
                <input
                    placeholder="Password..."
                    type="password"
                    value={logInPassword}
                    onChange={(e) => setLogInPassword(e.target.value)}
                />
                <button className="primary-btn" onClick={signIn}>
                    Sign In
                </button>
                <button className="google-btn" onClick={signInWithGoogle}>
                    Sign In with Google
                </button>
        </div>
    );
};

export default SignIn;




// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router";
// import { useAuth } from "../../components/Layout/AuthProvider";

// const LoginPage = () => {
//   const [user, setUser] = useState("");

//   const auth = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const redirectPath = location.state?.path || "/";

//   const handleLogin = () => {
//     auth.login(user);
//     navigate(redirectPath, { replace: true });
//   };

//   return (
//     <div>
//       <label>
//         Username:
//         <input type="text" onChange={(e) => setUser(e.target.value)} />
//       </label>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default LoginPage;




// const Auth = () => {
   



//     return (
//         <div className="auth-container">

      

//             {/* Logged In User */}
//             <div className="Logged">
//                 <div className="">
//                     <h4>User Logged In: {user?.email}</h4>
//                     <img src={localStorage.getItem("profilePic")} alt="Profile" />
//                     <p>Name: {localStorage.getItem("name")}</p>
//                     <p>Email: {localStorage.getItem("email")}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Auth;