// import { useState } from "react";
// import { Link, useNavigate } from "react-router";
// import { Link as LinkScroll } from "react-scroll";
// import clsx from "clsx";
// import { useTheme } from "../layout/context/themeProvider";


// const NAV_ITEMS = ["Features", "Pricing", "FAQ", "Download"];

// export default function Header() {
//   const [open, setOpen] = useState(false);
//   const { theme } = useTheme();
//   const navigate = useNavigate();

//   return (
//     <header className="fixed w-full top-0 z-50 bg-background border-b border-border lg:border-0">
//       {/* <div className="container relative flex h-20 items-center"> */}
//       <div className="container flex flex-row lg:items-center lg:h-20">
//         {/* Logo */}
//         <Link to="/" className="shrink-0">
//           <img
//             src={
//               theme === "light"
//                 ? "/images/fina-light.png"
//                 : "/images/fina-dark.png"
//             }
//             alt="Fina Logo"
//             width={115} height={55}
//           />
//         </Link>

//         {/* Navigation */}
//         <nav
//           className={clsx(
//             "w-full lg:w-auto lg:ml-10 transition-all duration-300",
//             open ? "block" : "hidden lg:block"
//           )}
//         >
//           <ul className="flex flex-col items-center gap-6 py-6 lg:flex-row lg:gap-8 lg:py-0">
//             {NAV_ITEMS.map((item) => (
//               <li key={item}>
//                 <LinkScroll
//                   className="text-foreground transition-colors duration-500 cursor-pointer hover:text-s1"
//                 >
//                   {item}
//                 </LinkScroll>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Right Side */}
//         <div className={clsx(open ? "flex" : "hidden lg:flex", "ml-auto items-center gap-4")}>
//           <button onClick={() => navigate("/sign-in")} className="btn-secondary">
//             Sign In
//           </button>

//           <button onClick={() => navigate("/sign-up")} className="btn-primary">
//             Start for Free
//           </button>
//         </div>

//         {/* Hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="ml-auto lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-border"
//           aria-label="Toggle navigation"
//         >
//           <img
//             src={`/images/${open ? "close" : "magic"}.svg`}
//             alt=""
//             className="w-5 h-5"
//           />
//         </button>
//       </div>
//     </header>
//   );
// }
import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavLink = ({ title }) => (
    <LinkScroll
      onClick={() => setIsOpen(false)}
      to={title}
      offset={-100}
      spy
      smooth
      activeClass="nav-active"
      className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5"
    >
      {title}
    </LinkScroll>
  );

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-sm",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>

            <div className="lg:hidden block absolute top-1/2 left-0 w-960 h-95 -translate-x-72.5 -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
