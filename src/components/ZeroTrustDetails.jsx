import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const ZeroTrustDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      style={{
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
      }}
    >
      <style>
        {`
          @keyframes glowPulse {
            0%, 100% { box-shadow: 0 0 25px rgba(124, 58, 237, 0.6); }
            50% { box-shadow: 0 0 45px rgba(124, 58, 237, 0.9); }
          }
        `}
      </style>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "2rem 1.5rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#1e293b",
          borderRadius: 16,
          boxShadow: "0 0 20px rgba(124, 58, 237, 0.7)",
          color: "#e0e7ff",
          lineHeight: 1.6,
          position: "relative",
          zIndex: 1,
          animation: "glowPulse 4s infinite ease-in-out",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 24,
            color: "#22c55e",
            textAlign: "center",
            letterSpacing: "-0.02em",
          }}
        >
          Zero Trust Network – Detailed Explanation
        </h1>

        {/* What is Zero Trust */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            What is Zero Trust?
          </h2>
          <p style={{ fontSize: 16 }}>
            Zero Trust is a cybersecurity framework that assumes no user, device, or network is inherently trustworthy. It requires continuous authentication, authorization, and validation of security posture before granting access to resources, regardless of location. Unlike traditional models that rely on a secure perimeter, Zero Trust operates on the principle of "never trust, always verify," making it ideal for distributed, cloud-based environments.
            <br />
            <br />
            This model addresses modern threats like insider attacks, credential theft, and advanced persistent threats (APTs) by enforcing strict access controls and monitoring.
          </p>
        </section>

        {/* Key Principles */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Key Principles
          </h2>
          <ul style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>Verify Explicitly:</strong> Authenticate and authorize every access request using multiple data points, such as user identity, device health, and context.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Use Least Privilege Access:</strong> Grant only the minimum access necessary for a task, reducing the attack surface.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Assume Breach:</strong> Design systems assuming a breach has occurred, using micro-segmentation, encryption, and strict controls to limit damage.
            </li>
          </ul>
        </section>

        {/* Benefits */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Benefits
          </h2>
          <ul style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Reduced Risk:</strong> Eliminates implicit trust, minimizing vulnerabilities from compromised credentials or devices.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Enhanced Visibility:</strong> Provides real-time monitoring and analytics for better threat detection.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Regulatory Compliance:</strong> Supports compliance with standards like GDPR, HIPAA, and PCI-DSS through granular policies.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Improved User Experience:</strong> Enables secure, seamless access without reliance on cumbersome VPNs.
            </li>
          </ul>
        </section>

        {/* Why Use Zero Trust? */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Why Use Zero Trust?
          </h2>
          <p style={{ fontSize: 16 }}>
            In today’s threat landscape, traditional security models are insufficient. The rise of remote work, cloud computing, and sophisticated cyberattacks has exposed the limitations of perimeter-based defenses. Zero Trust is essential because:
          </p>
          <ul style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Adapts to Modern Workflows:</strong> Supports distributed teams and cloud-based applications, ensuring secure access from anywhere.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Mitigates Insider Threats:</strong> Continuous verification prevents unauthorized access, even from trusted users.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Scales with Growth:</strong> Flexible architecture adapts to evolving business needs and technologies.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Proactive Defense:</strong> Assumes compromise, enabling faster detection and response to threats.
            </li>
          </ul>
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                backgroundColor: "#22c55e",
                color: "#e0e7ff",
                border: "1px solid #22c55e",
                padding: "10px 10px",
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                boxShadow: "0 6px 24px rgba(34, 197, 94, 0.8)",
                transition: "transform 0.2s ease-in-out",
                transform: "scale(1)",
              }}
              onClick={openModal}
            >
              Why Zero Trust Matters
            </motion.button>
          </div>
        </section>

        {/* Implementation Steps */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Implementation Steps
          </h2>
          <ol style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}>
              <strong>Identify Assets:</strong> Map all resources (data, applications, devices) to understand what needs protection.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Define Policies:</strong> Create granular access policies based on user roles, device health, and behavioral context.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Deploy Technologies:</strong> Implement tools like multi-factor authentication (MFA), encryption, and micro-segmentation.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Monitor and Adapt:</strong> Use real-time analytics to monitor activity and refine policies as threats evolve.
            </li>
            <li style={{ marginBottom: 12 }}>
              <strong>Train Users:</strong> Educate employees on Zero Trust principles to ensure compliance and reduce friction.
            </li>
          </ol>
        </section>

        {/* Challenges */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Challenges
          </h2>
          <ul style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Complexity:</strong> Requires integrating multiple technologies and reconfiguring existing systems.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Cost:</strong> High initial investment in tools, training, and infrastructure upgrades.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>User Resistance:</strong> Strict controls may disrupt workflows, necessitating change management.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Legacy Systems:</strong> Older systems may lack compatibility with Zero Trust frameworks.
            </li>
          </ul>
        </section>

        {/* Real-World Use Cases */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Real-World Use Cases
          </h2>
          <ul style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Remote Work Security:</strong> Ensures secure access for distributed teams accessing cloud applications.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Healthcare Compliance:</strong> Protects sensitive patient data while meeting HIPAA requirements.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Financial Services:</strong> Secures transactions and customer data against advanced threats.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>IoT Environments:</strong> Manages access for thousands of connected devices in smart cities or industries.
            </li>
          </ul>
        </section>

        {/* Key Technologies */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Key Technologies
          </h2>
          <ul style={{ fontSize: 16, paddingLeft: 20 }}>
            <li style={{ marginBottom: 10 }}>
              <strong>Identity and Access Management (IAM):</strong> Centralized systems for user authentication and authorization.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Multi-Factor Authentication (MFA):</strong> Adds layers of verification beyond passwords.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Network Segmentation:</strong> Divides networks into smaller zones to limit lateral movement.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Endpoint Security:</strong> Ensures devices meet security standards before accessing resources.
            </li>
            <li style={{ marginBottom: 10 }}>
              <strong>Security Information and Event Management (SIEM):</strong> Provides real-time threat detection and response.
            </li>
          </ul>
        </section>

        {/* Comparison Table */}
        <section style={{ marginBottom: 32 }}>
          <h2
            style={{
              fontSize: 22,
              fontWeight: 600,
              marginBottom: 12,
              color: "#22c55e",
              borderBottom: "3px solid #a78bfa",
              display: "inline-block",
              paddingBottom: 4,
            }}
          >
            Comparison with Other Security Models
          </h2>
          <table
            style={{
              width: "100%",
              marginTop: 16,
              borderCollapse: "collapse",
              fontSize: 15,
              color: "#e0e7ff",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#312e81" }}>
                <th style={{ border: "1px solid #7c3aed", padding: 8 }}>Aspect</th>
                <th style={{ border: "1px solid #7c3aed", padding: 8 }}>Zero Trust</th>
                <th style={{ border: "1px solid #7c3aed", padding: 8 }}>Traditional Perimeter</th>
                <th style={{ border: "1px solid #7c3aed", padding: 8 }}>VPN-Based</th>
                <th style={{ border: "1px solid #7c3aed", padding: 8 }}>SASE</th>
                <th style={{ border: "1px solid #7c3aed", padding: 8 }}>SD-WAN</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ backgroundColor: "#1e293b" }}>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Trust Model</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Never Trust, Always Verify</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Trust Inside, Block Outside</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Trust Once Connected</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Cloud-Based Trust</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Network-Centric Trust</td>
              </tr>
              <tr style={{ backgroundColor: "#0f172a" }}>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Access Control</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Continuous Verification</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Static Rules</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Device-Based</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Policy-Based, Cloud-Delivered</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Traffic-Based</td>
              </tr>
              <tr style={{ backgroundColor: "#1e293b" }}>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Flexibility</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Highly Adaptive</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Rigid Architecture</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Limited Remote Access</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Scalable, Cloud-Native</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Network-Optimized</td>
              </tr>
              <tr style={{ backgroundColor: "#0f172a" }}>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Deployment</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Hybrid, Device-Centric</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>On-Premises</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>On-Premises or Cloud</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Fully Cloud-Based</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Hybrid, Network-Focused</td>
              </tr>
              <tr style={{ backgroundColor: "#1e293b" }}>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Security Focus</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Identity and Data</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Network Perimeter</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Secure Tunneling</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Integrated Security and Networking</td>
                <td style={{ border: "1px solid #7c3aed", padding: 8 }}>Network Performance</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ textAlign: "center" }}>
          <Link
            to="/"
            style={{
              color: "#22c55e",
              textDecoration: "underline",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            ← Back to Home
          </Link>
        </section>

        {/* Animated Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 10,
              }}
            >
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  backgroundColor: "#1e293b",
                  borderRadius: 12,
                  padding: "2rem",
                  maxWidth: 500,
                  width: "90%",
                  color: "#e0e7ff",
                  boxShadow: "0 0 15px rgba(124, 58, 237, 0.7)",
                }}
              >
                <h2
                  style={{
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#22c55e",
                    marginBottom: 16,
                    textAlign: "center",
                  }}
                >
                  Why Zero Trust Matters
                </h2>
                <p style={{ fontSize: 16, marginBottom: 16 }}>
                  Zero Trust is critical in today’s dynamic threat landscape. It protects against modern cyberattacks by:
                </p>
                <ul style={{ fontSize: 16, paddingLeft: 20 }}>
                  <li style={{ marginBottom: 10 }}>
                    Preventing unauthorized access with continuous verification.
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    Reducing the attack surface through least privilege access.
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    Enabling secure remote work and cloud adoption.
                  </li>
                  <li style={{ marginBottom: 10 }}>
                    Ensuring compliance with strict regulatory standards.
                  </li>
                </ul>
                <div style={{ textAlign: "center" }}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor: "#22c55e",
                      color: "#e0e7ff",
                      padding: "10px 20px",
                      borderRadius: 8,
                      border: "none",
                      fontSize: 16,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    onClick={closeModal}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ZeroTrustDetails;