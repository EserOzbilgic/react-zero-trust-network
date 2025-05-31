// src/components/ZeroTrustStatsAdvanced.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  PieChart, Pie, Cell,
  LineChart, Line,
  AreaChart, Area
} from "recharts";

const barData = [
  { approach: "Perimeter-Based", breachRisk: 75, visibility: 40, compliance: 50, complexity: 60, costEfficiency: 30 },
  { approach: "Role-Based Access", breachRisk: 50, visibility: 60, compliance: 65, complexity: 50, costEfficiency: 55 },
  { approach: "Zero Trust", breachRisk: 15, visibility: 90, compliance: 95, complexity: 70, costEfficiency: 80 },
];

const radarData = [
  { metric: "Breach Risk", "Perimeter-Based": 25, "Role-Based": 50, "Zero Trust": 85 },
  { metric: "Visibility", "Perimeter-Based": 40, "Role-Based": 60, "Zero Trust": 90 },
  { metric: "Compliance", "Perimeter-Based": 50, "Role-Based": 65, "Zero Trust": 95 },
  { metric: "Complexity (inverse)", "Perimeter-Based": 40, "Role-Based": 50, "Zero Trust": 30 },
  { metric: "Cost Efficiency", "Perimeter-Based": 30, "Role-Based": 55, "Zero Trust": 80 },
];

const attackVectorData = [
  { name: "Phishing", value: 35 },
  { name: "Ransomware", value: 25 },
  { name: "Insider Threats", value: 15 },
  { name: "Malware", value: 15 },
  { name: "Other", value: 10 },
];

const COLORS = ["#EF4444", "#3B82F6", "#10B981", "#FBBF24", "#A78BFA"];

const adoptionData = [
  { year: 2018, zeroTrust: 10, perimeter: 70 },
  { year: 2019, zeroTrust: 20, perimeter: 60 },
  { year: 2020, zeroTrust: 40, perimeter: 45 },
  { year: 2021, zeroTrust: 60, perimeter: 30 },
  { year: 2022, zeroTrust: 75, perimeter: 15 },
  { year: 2023, zeroTrust: 85, perimeter: 10 },
  { year: 2024, zeroTrust: 90, perimeter: 5 },
  { year: 2025, zeroTrust: 95, perimeter: 2 },
];

const riskReductionData = [
  { year: 2018, zeroTrust: 100, perimeter: 100 },
  { year: 2019, zeroTrust: 80, perimeter: 95 },
  { year: 2020, zeroTrust: 60, perimeter: 85 },
  { year: 2021, zeroTrust: 40, perimeter: 75 },
  { year: 2022, zeroTrust: 25, perimeter: 60 },
  { year: 2023, zeroTrust: 10, perimeter: 55 },
  { year: 2024, zeroTrust: 5, perimeter: 50 },
  { year: 2025, zeroTrust: 2, perimeter: 45 },
];

// Glow pulse animasyon
const glowAnimation = `
@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 25px rgba(124, 58, 237, 0.6); }
  50% { box-shadow: 0 0 45px rgba(124, 58, 237, 0.9); }
}
`;


const fullScreenBackground = {
  position: "fixed",
  top: 0, left: 0, bottom: 0, right: 0,
  zIndex: -1,
  backgroundColor: "#0f172a",
  backgroundImage: `
    radial-gradient(circle at center, rgba(124,58,237,0.15) 0%, transparent 70%),
    repeating-radial-gradient(circle at center, transparent 0 8px, rgba(124,58,237,0.07) 8px 16px)
  `,
  animation: "pulseBackground 8s infinite alternate",
  pointerEvents: "none",
};

// Animasyon arka plan için keyframes
const pulseBackgroundAnimation = `
@keyframes pulseBackground {
  0% {
    background-position: center center;
  }
  100% {
    background-position: 10% 10%;
  }
}
`;

const ZeroTrustStatsAdvanced = () => {
  return (
    <>
      <style>{glowAnimation}</style>
      <style>{pulseBackgroundAnimation}</style>

      
      <div style={fullScreenBackground}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxWidth: 1100,
          margin: "3rem auto",
          padding: "2rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "rgba(15, 23, 42, 0.85)", 
          borderRadius: 20,
          animation: "glowPulse 4s infinite ease-in-out",
          color: "#f8fafc",
          lineHeight: 1.6,
          position: "relative",
          zIndex: 10,
          boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 36px)",
            color: "#22c55e",
            marginBottom: "1.8rem",
            textAlign: "center",
            fontWeight: "700",
           textShadow: "0 0 6px rgba(34, 197, 94, 0.6)", 
          }}
        >
          Zero Trust Security Model: Comprehensive Comparison
        </h1>

        {/* BAR CHART */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ color: "#22c55e", marginBottom: "0.3rem" }}>Key Metrics Comparison</h2>
          <p style={{ color: "#e0e7ff", fontSize: "14px", marginBottom: "12px" }}>
            Source: NIST SP 800-207, Gartner Zero Trust Maturity Model, IBM Security Reports.
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="approach" stroke="#e0e7ff" />
              <YAxis stroke="#e0e7ff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "none", color: "#f8fafc" }}
              />
              <Legend />
              <Bar dataKey="breachRisk" fill="#ef4444" />
              <Bar dataKey="visibility" fill="#3b82f6" />
              <Bar dataKey="compliance" fill="#10b981" />
              <Bar dataKey="complexity" fill="#f59e0b" />
              <Bar dataKey="costEfficiency" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </section>

        {/* RADAR CHART */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ color: "#22c55e", marginBottom: "0.3rem" }}>Overall Performance Radar</h2>
          <p style={{ color: "#e0e7ff", fontSize: "14px", marginBottom: "12px" }}>
            Source: Forrester Wave Report 2023 – "Zero Trust eXtended Ecosystem".
          </p>
          <ResponsiveContainer width="100%" height={350}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#334155" />
              <PolarAngleAxis dataKey="metric" stroke="#e0e7ff" />
              <PolarRadiusAxis stroke="#e0e7ff" />
              <Radar
                name="Perimeter-Based"
                dataKey="Perimeter-Based"
                stroke="#ef4444"
                fill="#ef4444"
                fillOpacity={0.3}
              />
              <Radar
                name="Role-Based"
                dataKey="Role-Based"
                stroke="#3b82f6"
                fill="#3b82f6"
                fillOpacity={0.3}
              />
              <Radar
                name="Zero Trust"
                dataKey="Zero Trust"
                stroke="#10b981"
                fill="#10b981"
                fillOpacity={0.6}
              />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "none", color: "#f8fafc" }}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </section>

        {/* PIE CHART */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ color: "#22c55e", marginBottom: "0.3rem" }}>Attack Vector Distribution</h2>
          <p style={{ color: "#e0e7ff", fontSize: "14px", marginBottom: "12px" }}>
            Source: Verizon 2023 Data Breach Investigations Report (DBIR)
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={attackVectorData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                labelLine={false}
                label={({ name, percent }) =>
                  `${name}: ${Math.round(percent * 100)}%`
                }
              >
                {attackVectorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: "#e0e7ff", border: "none", color: "#e0e7ff" }}
              />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </section>

        {/* LINE CHART */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ color: "#22c55e", marginBottom: "0.3rem" }}>
            Zero Trust Adoption Over Time
          </h2>
          <p style={{ color: "#e0e7ff", fontSize: "14px", marginBottom: "12px" }}>
            Source: Forrester State of Zero Trust 2024 Report
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={adoptionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#e0e7ff" />
              <YAxis stroke="#e0e7ff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "none", color: "#f8fafc" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="zeroTrust"
                stroke="#10b981"
                activeDot={{ r: 8 }}
                strokeWidth={3}
              />
              <Line type="monotone" dataKey="perimeter" stroke="#ef4444" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </section>

        {/* AREA CHART */}
        <section>
          <h2 style={{ color: "#22c55e", marginBottom: "0.3rem" }}>
            Risk Reduction Comparison
          </h2>
          <p style={{ color: "#e0e7ff", fontSize: "14px", marginBottom: "12px" }}>
            Source: IBM Security X-Force Threat Intelligence Index 2024
          </p>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={riskReductionData}>
              <defs>
                <linearGradient id="colorZeroTrust" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPerimeter" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="year" stroke="#e0e7ff" />
              <YAxis stroke="#e0e7ff" />
              <Tooltip
                contentStyle={{ backgroundColor: "#1e293b", border: "none", color: "#f8fafc" }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="zeroTrust"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorZeroTrust)"
              />
              <Area
                type="monotone"
                dataKey="perimeter"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorPerimeter)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </section>
      </motion.div>
    </>
  );
};

export default ZeroTrustStatsAdvanced;
