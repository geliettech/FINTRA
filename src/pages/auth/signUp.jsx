
// import { useState, useEffect } from "react";
// import { auth, googleProvider } from "../../config/firebase";
// import { Navigate, useNavigate } from "react-router";
// import { useGetUserInfo } from "../../hooks/useGetUserInfo";
// import {
//     createUserWithEmailAndPassword,
//     onAuthStateChanged,
//     signInWithPopup
// } from "firebase/auth";



// const SignUp = () => {

//     const navigate = useNavigate();
//     const { isAuth } = useGetUserInfo()

//     const [registerEmail, setRegisterEmail] = useState("");
//     const [registerPassword, setRegisterPassword] = useState("");
//     const [user, setUser] = useState(null);




//     // Run once on component mount
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//         });

//         // Cleanup listener when component unmounts
//         return () => unsubscribe();
//     }, []);



//     // Sign In with Google
//     const signInWithGoogle = async () => {
//         const results = await signInWithPopup(auth, googleProvider)
//         const authInfo = {
//             userID: results.user.uid,
//             name: results.user.displayName,
//             profilePic: results.user.photoURL,
//             isAuth: true
//         }
//         localStorage.setItem("auth", JSON.stringify(authInfo));
//         navigate("/dashboard")
//     };

//       // Sign Up
//     const register = async () => {
//         try {
//             const result = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
//             const authInfo = {
//                 userID: result.user.uid,
//                 email: result.user.email,
//                 password: result.user.password,
//                 isAuth: true
//             }
//             localStorage.setItem("auth", JSON.stringify(authInfo));
//             navigate("/sign-in");
//         } catch (err) {
//             console.error(err);
//         }
//     };


//     if (isAuth) {
//         return <Navigate to="/sign-in" />
//     }

//     return (
//         <div className="auth-card">
//             <p>Sign Up</p>
//                 <input
//                     placeholder="Email..."
//                     type="email"
//                     value={registerEmail}
//                     onChange={(e) => setRegisterEmail(e.target.value)}
//                 />
//                 <input
//                     placeholder="Password..."
//                     type="password"
//                     value={registerPassword}
//                     onChange={(e) => setRegisterPassword(e.target.value)}
//                 />
//                 <button className="primary-btn" onClick={register}>
//                     Sign Up
//                 </button>
//                 <button className="google-btn" onClick={signInWithGoogle}>
//                     Sign Up with Google
//                 </button>
//             </div>
//     );
// };

// export default SignUp;


import { useState } from "react";
import { auth, googleProvider } from "../../config/firebase";
import { Link, Navigate, useNavigate } from "react-router";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useAuth } from "../../Layout/AuthProvider";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();
  const authContext = useAuth();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] =
    useState("");

  const register = async () => {
    try {
      const result =
        await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );

      const authInfo = {
        userID: result.user.uid,
        email: result.user.email,
        name: result.user.displayName || "",
        profilePic: result.user.photoURL || "",
        isAuth: true,
      };

      localStorage.setItem("auth", JSON.stringify(authInfo));

      authContext.login(authInfo);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(
        auth,
        googleProvider
      );

      const authInfo = {
        userID: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
        profilePic: result.user.photoURL,
        isAuth: true,
      };

      localStorage.setItem("auth", JSON.stringify(authInfo));

      authContext.login(authInfo);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="auth-card">
      <h2>Sign Up</h2>

      <input
        type="email"
        placeholder="Email"
        value={registerEmail}
        onChange={(e) =>
          setRegisterEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={registerPassword}
        onChange={(e) =>
          setRegisterPassword(e.target.value)
        }
      />

      <button onClick={register}>
        Sign Up
      </button>

      <button onClick={signInWithGoogle}>
        Sign Up With Google
      </button>
      <div className="">
        Already have an account? 
        <Link to="/sign-in">Sign In</Link>
      </div>
      
    </div>
  );
};

export default SignUp;


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