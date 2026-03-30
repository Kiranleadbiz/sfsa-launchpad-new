import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import sfsaLogo from "@/assets/sfsa main logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Courses", path: "/courses" },
  { label: "Workshops", path: "/workshops" },
  { label: "Placement Partners", path: "/placement-support" },
  { label: "Certificate Verification", path: "/certificate-verification" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled
    ? "glass-nav"
    : isHome
    ? "bg-transparent"
    : "bg-background/80 backdrop-blur-sm";

  const textColor = !scrolled && isHome ? "text-white" : "text-foreground";
  const mutedColor = !scrolled && isHome ? "text-white/70" : "text-muted-foreground";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${navBg}`}>
      <div className="container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center gap-2 relative z-10">
             <img src={sfsaLogo} alt="SFSA Logo" className="h-24 w-auto" style={{maxWidth: 320}} />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`relative text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === l.path
                  ? "text-accent font-semibold"
                  : `${mutedColor} hover:text-accent`
              }`}
            >
              {l.label}
              {location.pathname === l.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                  style={{ background: "hsl(45 100% 50%)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <a
            href="https://sfsa.in/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: "hsl(45 100% 50%)", color: "hsl(204 100% 10%)" }}
          >
            Student Login <ExternalLink size={14} />
          </a>
        </div>

        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${!scrolled && isHome ? "text-white hover:bg-white/10" : "text-foreground hover:bg-muted"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="py-3 px-4">
              {navLinks.map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === l.path ? "text-accent font-semibold" : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-3 pb-1 px-1">
                <a
                  href="https://sfsa.in/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-1.5 w-full text-sm font-semibold px-4 py-3 rounded-full shadow-md"
                  style={{ background: "hsl(45 100% 50%)", color: "hsl(204 100% 10%)" }}
                >
                  Student Login <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
