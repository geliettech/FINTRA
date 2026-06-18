import { useNavigate } from "react-router";

const LandingPage = () => {

    const navigate = useNavigate();


    // Sign In with Google
    const handleGetStarted = () => {
        navigate("/sign-in")
    };

    return (
        <div className="auth-card">
            * Hero Section
            * Features Overview
            * Pricing Plans
            *  faq
            * CTA
            * Footer
            <p>Sign In With Google to Continue</p>
            <button className="google-btn" onClick={handleGetStarted}>
                Get Started
            </button>
        </div>
    );
};

export default LandingPage;