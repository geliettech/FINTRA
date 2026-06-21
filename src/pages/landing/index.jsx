import { useNavigate } from "react-router";
import { useTheme } from "../../layout/context/themeProvider";


const LandingPage = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();


    const handleGetStarted = () => {
        navigate("/sign-in")
    };


    return (
        <main className="overflow-hidden">
            <div>
                <button
                    onClick={toggleTheme}
                    className="rounded-lg border px-4 py-2 transition"
                >
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
                <div className="card mt-6">
                    <h1 className="text-2xl font-bold">
                        * Hero Section
                    </h1>
                    <p className="mt-2">
                        This card changes automatically when the theme is toggled.
                    </p>
                    <button className="text-3xl font-bold underline" onClick={handleGetStarted}>
                        Get Started
                    </button>
                </div>

            </div>
            <div>
                * Features Overview
            </div>
            <div>
                * Pricing Plans
            </div>
            <div>
                *  faq
            </div>
            <div>
                * CTA
            </div>
            <div>
                * Footer
            </div>
        </main>
    );
};

export default LandingPage;