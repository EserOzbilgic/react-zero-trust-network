import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const outerWrapperStyle = {
  minHeight: "100vh",
  width: "100%",
  backgroundColor: "#0f172a",
  backgroundImage: `
    radial-gradient(circle at center, rgba(124, 58, 237, 0.15), transparent 70%),
    repeating-radial-gradient(circle at center, transparent 0 5px, rgba(124, 58, 237, 0.05) 5px 10px)
  `,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: "2rem 1rem",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "2rem",
  background: "rgba(30, 41, 59, 0.9)",
  borderRadius: "16px",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  color: "#e0e7ff",
  position: "relative",
  zIndex: 10,
  boxShadow: "0 0 20px rgba(124, 58, 237, 0.7)",
  animation: "glowPulse 4s infinite ease-in-out",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "3fr 1fr",
  gap: "2rem",
  "@media (max-width: 768px)": {
    gridTemplateColumns: "1fr",
  },
};

const cardStyle = {
  background: "#1e293b",
  padding: "1.5rem",
  borderRadius: "1rem",
  boxShadow: "0 12px 20px rgba(0,0,0,0.4)",
  marginBottom: "1.5rem",
};

const cardHover = {
  transform: "translateY(-8px) rotate(2deg)",
  boxShadow: "0 18px 30px rgba(168, 85, 247, 0.4)",
};

const headingStyle = {
  fontSize: "1.5rem",
  fontWeight: "700",
  marginBottom: "1rem",
  color: "#22c55e",
  letterSpacing: "0.04em",
  borderBottom: "3px solid #a78bfa",
  display: "inline-block",
  paddingBottom: 4,
};

const listStyle = {
  listStyle: "none",
  paddingLeft: 0,
  marginBottom: "1rem",
};

const listItemStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "0.5rem",
  fontSize: "1rem",
  color: "#e0e7ff",
  cursor: "pointer",
  position: "relative",
};

const bulletIcon = {
  display: "inline-block",
  width: "12px",
  height: "12px",
  backgroundColor: "#a855f7",
  borderRadius: "50%",
  marginRight: "0.8rem",
};

const analysisStyle = {
  fontStyle: "italic",
  color: "#94a3b8",
  fontSize: "0.9rem",
  lineHeight: 1.4,
  marginTop: "1rem",
};

const introStyle = {
  fontSize: "1.1rem",
  color: "#e0e7ff",
  lineHeight: 1.6,
  marginBottom: "2rem",
};

const sidebarStyle = {
  background: "#1e293b",
  padding: "1.5rem",
  borderRadius: "1rem",
  position: "sticky",
  top: "100px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
};

const backToTopBtnStyle = {
  position: "fixed",
  bottom: "2.5rem",
  right: "2.5rem",
  backgroundColor: "#a855f7",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  fontSize: "1.5rem",
  cursor: "pointer",
  boxShadow: "0 6px 15px rgba(168, 85, 247, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 9999,
};

const tooltipStyle = {
  position: "absolute",
  background: "#1e293b",
  color: "#e0e7ff",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  fontSize: "0.85rem",
  top: "-2.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
  zIndex: 20,
  whiteSpace: "nowrap",
  border: "1px solid #a78bfa",
};

const ReferencesPage = () => {
  const [showBtn, setShowBtn] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [hoveredSource, setHoveredSource] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      setShowBtn(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const references = [
    {
      id: "ref-1",
      title: "Zero Trust Adoption Over Time",
      sources: [
        {
          name: "Gartner Report on ZTNA Adoption Trends (2023)",
          link: "https://www.gartner.com",
          date: "2023-06",
          description: "Analyzes global adoption rates of Zero Trust Network Access solutions.",
          type: "industry",
        },
        {
          name: "Statista: Zero Trust Implementation in Enterprises",
          link: "https://www.statista.com",
          date: "2023-09",
          description: "Provides statistical data on enterprise Zero Trust deployments.",
          type: "industry",
        },
        {
          name: "Okta: State of Zero Trust Report (2023)",
          link: "https://www.okta.com",
          date: "2023-04",
          description: "Survey-based insights from over 1,000 organizations worldwide.",
          type: "survey",
        },
      ],
      analysis:
        "Gartner and Statista are industry standards for market trends, while Okta’s survey data offers real-world enterprise perspectives. Together, they provide a comprehensive view of Zero Trust adoption dynamics.",
    },
    {
      id: "ref-2",
      title: "Breach Risk Reduction over Time",
      sources: [
        {
          name: "IBM Cost of a Data Breach Report (2018–2023)",
          link: "https://www.ibm.com",
          date: "2023-07",
          description: "Annual analysis of data breach costs and mitigation strategies.",
          type: "survey",
        },
        {
          name: "Ponemon Institute - Zero Trust Security Benchmarking",
          link: "https://www.ponemon.org",
          date: "2023-05",
          description: "Benchmarks Zero Trust effectiveness in reducing security risks.",
          type: "survey",
        },
      ],
      analysis:
        "IBM’s longitudinal data is widely cited for breach cost metrics, and Ponemon’s research provides rigorous benchmarking. These sources quantify Zero Trust’s impact on financial and security outcomes.",
    },
    {
      id: "ref-3",
      title: "Security Model Comparisons (Bar & Radar Chart)",
      sources: [
        {
          name: "NIST Zero Trust Architecture (SP 800-207)",
          link: "https://www.nist.gov",
          date: "2020-08",
          description: "Defines the foundational principles and architecture of Zero Trust.",
          type: "government",
        },
        {
          name: "Forrester Wave™: Zero Trust eXtended Ecosystem Providers",
          link: "https://www.forrester.com",
          date: "2023-03",
          description: "Evaluates leading Zero Trust vendors and their ecosystems.",
          type: "industry",
        },
        {
          name: "Cisco Zero Trust Whitepaper",
          link: "https://www.cisco.com",
          date: "2023-01",
          description: "Offers practical insights into implementing Zero Trust frameworks.",
          type: "industry",
        },
      ],
      analysis:
        "NIST provides a robust theoretical framework, while Forrester and Cisco offer practical implementation insights. This combination ensures both academic rigor and real-world applicability.",
    },
    {
      id: "ref-4",
      title: "Attack Vector Distribution (Pie Chart)",
      sources: [
        {
          name: "Verizon Data Breach Investigations Report (DBIR) 2023",
          link: "https://www.verizon.com",
          date: "2023-05",
          description: "Evaluates over 16,000 security incidents and 5,390 breaches.",
          type: "industry",
        },
        {
          name: "ENISA",
          link: "https://www.enisa.europa.eu",
          date: "2023-10",
          description: "Official EU cybersecurity threat analysis.",
          type: "government",
        },
      ],
      analysis:
        "Verizon’s DBIR provides empirical data from thousands of incidents, and ENISA offers a European perspective. Combined, they accurately map attack vector distributions.",
    },
    {
      id: "ref-5",
      title: "Summary of Source Reliability",
      sources: [
        { name: "NIST", link: "https://www.nist.gov", date: "N/A", description: "U.S. government standards body for cybersecurity.", type: "government" },
        { name: "IBM", link: "https://www.ibm.com", date: "N/A", description: "Global leader in technology and security research.", type: "survey" },
        { name: "Verizon", link: "https://www.verizon.com", date: "N/A", description: "Telecom provider with extensive security incident analysis.", type: "industry" },
        { name: "ENISA", link: "https://www.enisa.europa.eu", date: "N/A", description: "EU’s official cybersecurity agency.", type: "government" },
        { name: "Gartner", link: "https://www.gartner.com", date: "N/A", description: "Leading IT research and advisory firm.", type: "industry" },
        { name: "Statista", link: "https://www.statista.com", date: "N/A", description: "Trusted provider of statistical data.", type: "industry" },
        { name: "Forrester", link: "https://www.forrester.com", date: "N/A", description: "Market research and advisory for technology trends.", type: "industry" },
        { name: "Okta", link: "https://www.okta.com", date: "N/A", description: "Leader in identity and access management solutions.", type: "survey" },
        { name: "Cisco", link: "https://www.cisco.com", date: "N/A", description: "Provider of networking and security solutions.", type: "industry" },
      ],
      analysis:
        "These sources, from leading industry firms, government bodies, and trusted authorities, ensure high credibility and practical relevance for the data presented.",
    },
  ];

  return (
    <div style={outerWrapperStyle}>
      <style>
        {`
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 25px rgba(124, 58, 237, 0.6); }
            50% { box-shadow: 0 0 45px rgba(124, 58, 237, 0.9); }
          }
        `}
      </style>
      <div style={containerStyle}>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            fontWeight: "800",
            fontSize: "2.5rem",
            color: "#22c55e",
            textShadow: "0 2px 4px rgba(34, 197, 94, 0.3)",
          }}
        >
          References & Source Credibility
        </motion.h1>

        <motion.p
          style={introStyle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          This page compiles authoritative sources underpinning our Zero Trust security analysis, including industry reports, government standards, and enterprise surveys. Each reference is vetted for credibility and relevance to ensure robust data for our visualizations and insights.
        </motion.p>

        <div style={gridStyle}>
          <div>
            {references.map((ref, idx) => (
              <motion.article
                id={ref.id}
                key={idx}
                style={{
                  ...cardStyle,
                  ...(hoveredCardIndex === idx ? cardHover : {}),
                }}
                onMouseEnter={() => setHoveredCardIndex(idx)}
                onMouseLeave={() => setHoveredCardIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <h2 style={headingStyle}>{ref.title}</h2>
                <ul style={listStyle}>
                  {ref.sources.map((source, i) => (
                    <li
                      key={i}
                      style={listItemStyle}
                      onMouseEnter={() => setHoveredSource(`${idx}-${i}`)}
                      onMouseLeave={() => setHoveredSource(null)}
                    >
                      <span style={bulletIcon} />
                      <a
                        href={source.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#e0e7ff", textDecoration: "none" }}
                      >
                        {source.name}
                      </a>
                      {hoveredSource === `${idx}-${i}` && (
                        <motion.div
                          style={tooltipStyle}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {source.description} ({source.date})
                        </motion.div>
                      )}
                    </li>
                  ))}
                </ul>
                <p style={analysisStyle}>{ref.analysis}</p>
              </motion.article>
            ))}
          </div>

          <aside style={sidebarStyle}>
            <h3
              style={{
                color: "#22c55e",
                fontSize: "1.25rem",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ ...listStyle, fontSize: "0.95rem" }}>
              {references.map((ref) => (
                <li
                  key={ref.id}
                  style={{
                    marginBottom: "0.5rem",
                    color: "#e0e7ff",
                    cursor: "pointer",
                  }}
                  onClick={() => scrollToSection(ref.id)}
                >
                  <motion.div
                    whileHover={{ color: "#a78bfa", x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {ref.title}
                  </motion.div>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>

      {showBtn && (
        <motion.button
          aria-label="Back to top"
          style={backToTopBtnStyle}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1, backgroundColor: "#7e22ce" }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          ↑
        </motion.button>
      )}
    </div>
  );
};

export default ReferencesPage;