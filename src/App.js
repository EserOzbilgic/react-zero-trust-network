import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import ZeroTrustAnimation from "./components/ZeroTrustAnimation";
import ZeroTrustDetails from "./components/ZeroTrustDetails";
import ZeroTrustStats from "./components/ZeroTrustStats";
import ReferencesPage from "./components/ReferencesPage";
import { AnimatePresence, motion } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ZeroTrustAnimation />
            </motion.div>
          }
        />
        <Route
          path="/details"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ZeroTrustDetails />
            </motion.div>
          }
        />
        <Route
          path="/stats"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ZeroTrustStats />
            </motion.div>
          }
        />
        <Route
          path="/references"
          element={
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <ReferencesPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <Router>
      <nav
        style={{
          backgroundColor: "#0f172a",
          backgroundImage: `
            radial-gradient(circle at center, rgba(124, 58, 237, 0.15), transparent 70%),
            linear-gradient(to right, rgba(34, 197, 94, 0.1), rgba(124, 58, 237, 0.1))
          `,
          padding: "1rem 2rem",
          boxShadow: "0 2px 10px rgba(124, 58, 237, 0.5)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 40,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#22c55e",
              textShadow: "0 0 6px rgba(34, 197, 94, 0.6)",
            }}
          >
            Zero Trust Network
          </motion.div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              flexDirection: "row",
            }}
            className="desktop-nav"
          >
            {[
              { to: "/", label: "Home" },
              { to: "/details", label: "Details" },
              { to: "/stats", label: "Stats" },
              { to: "/references", label: "References" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={({ isActive }) => ({
                  color: isActive ? "#a78bfa" : "#e0e7ff",
                  textDecoration: "none",
                  fontSize: 18,
                  fontWeight: 600,
                  position: "relative",
                  padding: "0.5rem",
                })}
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{ scale: 1.1, color: "#a78bfa" }}
                    whileTap={{ scale: 0.95 }}
                    style={{ display: "inline-block" }}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="underline"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: 3,
                          background: "linear-gradient(to right, #22c55e, #a78bfa)",
                          borderRadius: 2,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                )}
              </NavLink>
            ))}
          </div>

          <motion.div
            className="mobile-menu-toggle"
            style={{
              display: "none",
              flexDirection: "column",
              gap: 5,
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              style={{
                width: 24,
                height: 3,
                backgroundColor: "#e0e7ff",
                borderRadius: 2,
              }}
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            />
            <motion.div
              style={{
                width: 24,
                height: 3,
                backgroundColor: "#e0e7ff",
                borderRadius: 2,
              }}
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            />
            <motion.div
              style={{
                width: 24,
                height: 3,
                backgroundColor: "#e0e7ff",
                borderRadius: 2,
              }}
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                display: "none",
                flexDirection: "column",
                backgroundColor: "#1e293b",
                padding: "1rem",
                borderRadius: "0 0 8px 8px",
                boxShadow: "0 4px 10px rgba(124, 58, 237, 0.5)",
                marginTop: "1rem",
              }}
              className="mobile-nav"
            >
              {[
                { to: "/", label: "Home" },
                { to: "/details", label: "Details" },
                { to: "/stats", label: "Stats" },
                { to: "/references", label: "References" },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  style={({ isActive }) => ({
                    color: isActive ? "#a78bfa" : "#e0e7ff",
                    textDecoration: "none",
                    fontSize: 18,
                    fontWeight: 600,
                    padding: "0.5rem",
                    margin: "0.5rem 0",
                  })}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {({ isActive }) => (
                    <motion.div
                      whileHover={{ scale: 1.05, color: "#a78bfa" }}
                      whileTap={{ scale: 0.95 }}
                      style={{ display: "block", position: "relative" }}
                    >
                      {label}
                      {isActive && (
                        <motion.div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            background: "linear-gradient(to right, #22c55e, #a78bfa)",
                            borderRadius: 2,
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </motion.div>
                  )}
                </NavLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatedRoutes />
      <style>
        {`
          @media (max-width: 768px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-menu-toggle {
              display: flex !important;
            }
            .mobile-nav {
              display: flex !important;
            }
          }
        `}
      </style>
    </Router>
  );
}

export default App;