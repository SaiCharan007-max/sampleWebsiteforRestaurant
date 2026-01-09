import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const html = document.documentElement;
    if (dark) html.setAttribute("data-theme", "dark");
    else html.removeAttribute("data-theme");
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <div className="brand-wrap">
          <div className="logo-box">
            <svg
              viewBox="0 0 64 64"
              className="logo-svg"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />

              <circle
                cx="32"
                cy="32"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />

              <line
                x1="26"
                y1="18"
                x2="26"
                y2="34"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="24"
                y1="18"
                x2="24"
                y2="24"
                stroke="currentColor"
                strokeWidth="2"
              />
              <line
                x1="28"
                y1="18"
                x2="28"
                y2="24"
                stroke="currentColor"
                strokeWidth="2"
              />

              <path
                d="M38 18
         a4 4 0 1 1 0 8
         a4 4 0 1 1 0 -8
         M38 26 L38 36"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>

          <span className="brand">Spice Garden</span>
        </div>

        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#photos">Photos</a>
          <a href="#reviews">Reviews</a>
          <a href="#visit">Visit</a>
        </nav>

        <button className="theme-btn" onClick={() => setDark(!dark)}>
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
