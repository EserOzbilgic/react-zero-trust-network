import React, { useState, useEffect } from "react";

const UserIcon = ({ x, y, highlighted, status }) => (
  <g transform={`translate(${x}, ${y})`}>
    <circle
      r={26}
      fill={highlighted ? "#22c55e" : "#94a3b8"}
      opacity={highlighted ? 1 : 0.4}
      stroke={highlighted ? "#a78bfa" : "none"}
      strokeWidth={3}
      style={{ transition: "fill 0.3s, opacity 0.3s" }}
    />
    <circle cx={0} cy={-6} r={12} fill="#e0e7ff" />
    <rect x={-10} y={6} width={20} height={12} rx={4} fill="#c7d2fe" />
    {status === "approved" && (
      <path
        d="M-8 6 L-2 12 L8 2"
        stroke="#22c55e"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
    )}
    {status === "denied" && (
      <path
        d="M-8 2 L8 14 M8 2 L-8 14"
        stroke="#ef4444"
        strokeWidth={3}
        fill="none"
        strokeLinecap="round"
      />
    )}
  </g>
);

const PolicyIcon = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect
      x={-40}
      y={-35}
      width={80}
      height={70}
      rx={18}
      ry={18}
      fill="url(#policyGradient)"
      stroke="#a78bfa"
      strokeWidth={2.5}
      filter="drop-shadow(0 4px 6px rgba(124, 58, 237, 0.4))"
    />
    <path
      d="M-20 -15 L-20 15 L20 15 L20 -15 Z"
      fill="#ede9fe"
      stroke="#7c3aed"
      strokeWidth={1.5}
    />
    <path
      d="M-15 -5 H15 M-15 0 H15 M-15 5 H15"
      stroke="#7c3aed"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <text
      x={0}
      y={50}
      fill="#5b21b6"
      fontWeight="700"
      fontSize={14}
      textAnchor="middle"
      style={{ userSelect: "none", fontFamily: "'Segoe UI', Tahoma, Geneva" }}
    >
      Policy Engine
    </text>
    <defs>
      <linearGradient id="policyGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#7c3aed" />
        <stop offset="100%" stopColor="#5b21b6" />
      </linearGradient>
    </defs>
  </g>
);

const ServerIcon = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect
      x={-35}
      y={-35}
      width={70}
      height={70}
      rx={20}
      ry={20}
      fill="url(#serverGradient)"
      stroke="#22c55e"
      strokeWidth={2.5}
      filter="drop-shadow(0 5px 8px rgba(34, 197, 94, 0.4))"
    />
    <rect
      x={-25}
      y={-20}
      width={50}
      height={40}
      rx={10}
      ry={10}
      fill="#dcfce7"
      stroke="#22c55e"
      strokeWidth={1.5}
    />
    <path
      d="M-15 -10 H15 M-15 0 H15 M-15 10 H0"
      stroke="#15803d"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <text
      x={0}
      y={50}
      fill="#166534"
      fontWeight="700"
      fontSize={14}
      textAnchor="middle"
      style={{ userSelect: "none", fontFamily: "'Segoe UI', Tahoma, Geneva" }}
    >
      Protected Resource
    </text>
    <defs>
      <linearGradient id="serverGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#15803d" />
      </linearGradient>
    </defs>
  </g>
);

const riskColors = {
  low: "#22c55e",
  medium: "#f59e0b",
  high: "#ef4444",
};

const steps = [
  {
    title: "Step 1: Identity Verification",
    description: `
      Every user and device must be verified using multi-factor authentication (MFA) and device health checks before accessing the policy engine.
      Unverified users are denied access, ensuring only trusted entities proceed.
      For example, User 1 fails verification due to an outdated device, while Users 2 and 3 pass.
    `,
    highlightUsers: [1, 2, 3],
    userStatuses: { 1: "denied", 2: "approved", 3: "approved" },
    highlightConnections: [],
  },
  {
    title: "Step 2: Policy Enforcement",
    description: `
      The policy engine evaluates access requests based on roles, context, and risk. Only users with appropriate permissions are granted access to the resource.
      User 2 has full access, while User 3 has limited access due to their role.
      This enforces the principle of least privilege.
    `,
    highlightUsers: [2, 3],
    userStatuses: { 2: "approved", 3: "approved" },
    highlightConnections: [1, 2],
  },
  {
    title: "Step 3: Continuous Monitoring",
    description: `
      All connections are encrypted and monitored in real-time. Suspicious activities, such as unusual access patterns, trigger immediate alerts or access revocation.
      This ensures that even approved users are continuously validated to prevent threats.
    `,
    highlightUsers: [2, 3],
    userStatuses: { 2: "approved", 3: "approved" },
    highlightConnections: [1, 2, 3],
  },
];

const users = [
  { id: 1, x: 50, y: 180, label: "User 1" },
  { id: 2, x: 50, y: 260, label: "User 2" },
  { id: 3, x: 50, y: 340, label: "User 3" },
];

const connections = [
  { from: 1, to: "policy", secure: false, risk: "high" },
  { from: 2, to: "policy", secure: true, risk: "low" },
  { from: 3, to: "policy", secure: true, risk: "medium" },
  { from: "policy", to: "server", secure: true, risk: "low" },
];

function getCoord(id) {
  if (id === "policy") return { x: 175, y: 270 };
  if (id === "server") return { x: 300, y: 270 };
  const u = users.find((u) => u.id === id);
  return u ? { x: u.x, y: u.y } : { x: 0, y: 0 };
}

function generatePath(from, to) {
  const dx = to.x - from.x;
  const dy = to.y - from.y;
  const curveX1 = from.x + dx * 0.4;
  const curveY1 = from.y;
  const curveX2 = from.x + dx * 0.6;
  const curveY2 = to.y;
  return `M${from.x},${from.y} C${curveX1},${curveY1} ${curveX2},${curveY2} ${to.x},${to.y}`;
}

export default function ModernZeroTrust() {
  const [step, setStep] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [packets, setPackets] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const validConns = connections.filter((_, i) =>
        steps[step].highlightConnections.includes(i)
      );
      if (!validConns.length) return;

      const conn = validConns[Math.floor(Math.random() * validConns.length)];
      setPackets((p) => [
        ...p,
        {
          id: Date.now(),
          from: conn.from,
          to: conn.to,
          secure: conn.secure,
          risk: conn.risk,
          progress: 0,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, [step]);

  useEffect(() => {
    const anim = setInterval(() => {
      setPackets((p) =>
        p
          .map((pkt) => ({ ...pkt, progress: pkt.progress + 0.015 }))
          .filter((pkt) => pkt.progress < 1)
      );
    }, 25);
    return () => clearInterval(anim);
  }, []);

  const calcBezierPoint = (t, p0, p1, p2, p3) => {
    const cX = 3 * (p1.x - p0.x);
    const bX = 3 * (p2.x - p1.x) - cX;
    const aX = p3.x - p0.x - cX - bX;

    const cY = 3 * (p1.y - p0.y);
    const bY = 3 * (p2.y - p1.y) - cY;
    const aY = p3.y - p0.y - cY - bY;

    const x = aX * t * t * t + bX * t * t + cX * t + p0.x;
    const y = aY * t * t * t + bY * t * t + cY * t + p0.y;

    return { x, y };
  };

  const packetPos = (pkt) => {
    const start = getCoord(pkt.from);
    const end = getCoord(pkt.to);
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const p0 = { x: start.x, y: start.y };
    const p1 = { x: start.x + dx * 0.4, y: start.y };
    const p2 = { x: start.x + dx * 0.6, y: end.y };
    const p3 = { x: end.x, y: end.y };
    return calcBezierPoint(pkt.progress, p0, p1, p2, p3);
  };

  const renderTooltip = () => {
    if (hovered === null) return null;
    const c = connections[hovered];
    const start = getCoord(c.from);
    const end = getCoord(c.to);
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;

    const tooltipText =
      hovered === 0
        ? "Access Denied: Unverified device or credentials."
        : hovered === 1
        ? "Access Granted: Verified user with full permissions."
        : hovered === 2
        ? "Limited Access: Verified user with restricted permissions."
        : "Secure Connection: Policy-enforced access to resource.";

    return (
      <div
        style={{
          position: "absolute",
          top: midY - 70,
          left: midX + 20,
          backgroundColor: "#1e293b",
          padding: "10px 14px",
          borderRadius: 8,
          color: "#e0e7ff",
          fontSize: 14,
          fontWeight: "600",
          pointerEvents: "none",
          boxShadow: "0 2px 12px rgba(124, 58, 237, 0.4)",
          whiteSpace: "normal",
          maxWidth: 200,
          zIndex: 10,
        }}
      >
        <div style={{ marginBottom: 6 }}>
          <b>{c.secure ? "Secure" : "Unsecure"} Connection</b>
        </div>
        <div>Risk: {c.risk.charAt(0).toUpperCase() + c.risk.slice(1)}</div>
        <div>{tooltipText}</div>
      </div>
    );
  };

  const nextStep = () => setStep((s) => (s + 1) % steps.length);

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 30,
        minHeight: "100vh",
        color: "#e0e7ff",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0f172a",
        backgroundImage: `
          radial-gradient(circle at center, rgba(124, 58, 237, 0.15), transparent 70%),
          repeating-radial-gradient(circle at center, transparent 0 5px, rgba(124, 58, 237, 0.05) 5px 10px)
        `,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          fontSize: 36,
          fontWeight: 700,
          marginBottom: 30,
          color: "#22c55e",
          textShadow: "0 0 6px rgba(34, 197, 94, 0.6)",
          letterSpacing: 1,
          textAlign: "center",
        }}
      >
        Zero Trust Security Flow
      </h1>

      <div style={{ position: "relative", margin: "auto", maxWidth: 360 }}>
        <svg
          viewBox="0 0 360 450"
          style={{
            width: "100%",
            height: 400,
            backgroundColor: "#1e293b",
            borderRadius: 20,
            boxShadow: "0 0 20px rgba(124, 58, 237, 0.7)",
          }}
        >
          {users.map(({ id, x, y, label }) => {
            const highlight = steps[step].highlightUsers.includes(id);
            const status = steps[step].userStatuses ? steps[step].userStatuses[id] : null;
            return (
              <g key={id} cursor="default">
                <UserIcon x={x} y={y} highlighted={highlight} status={status} />
                <text
                  x={x}
                  y={y + 50}
                  textAnchor="middle"
                  fill={highlight ? "#22c55e" : "#64748b"}
                  fontSize={14}
                  fontWeight="700"
                  style={{ userSelect: "none", filter: highlight ? "drop-shadow(0 0 4px #22c55e)" : "none" }}
                >
                  {label}
                </text>
              </g>
            );
          })}

          <PolicyIcon x={175} y={270} />
          <ServerIcon x={300} y={270} />

          {connections.map((conn, i) => {
            const start = getCoord(conn.from);
            const end = getCoord(conn.to);
            const path = generatePath(start, end);
            const highlighted = steps[step].highlightConnections.includes(i);
            const isDenied = i === 0 && step === 0;

            return (
              <g
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                <path
                  d={path}
                  fill="none"
                  stroke={isDenied ? "#ef4444" : highlighted ? riskColors[conn.risk] : "#64748b"}
                  strokeWidth={highlighted || isDenied ? 4 : 2}
                  strokeDasharray={conn.secure && !isDenied ? "0" : "8,8"}
                  opacity={highlighted || isDenied ? 1 : 0.6}
                  style={{
                    transition: "stroke 0.3s ease, opacity 0.3s",
                    filter: highlighted || isDenied ? `drop-shadow(0 0 6px ${isDenied ? "#ef4444" : riskColors[conn.risk]})` : "none",
                  }}
                />
              </g>
            );
          })}

          {packets.map((pkt) => {
            const pos = packetPos(pkt);
            const isDenied = pkt.from === 1 && step === 0;
            return (
              <circle
                key={pkt.id}
                cx={pos.x}
                cy={pos.y}
                r={6}
                fill={isDenied ? "#ef4444" : riskColors[pkt.risk]}
                opacity={0.9}
                style={{
                  filter: `drop-shadow(0 0 6px ${isDenied ? "#ef4444" : riskColors[pkt.risk]})`,
                }}
              />
            );
          })}
        </svg>

        {renderTooltip()}
      </div>

      <div style={{ marginTop: 40, maxWidth: 360, marginLeft: "auto", marginRight: "auto" }}>
        <h2
          style={{
            fontSize: 24,
            marginBottom: 10,
            color: "#22c55e",
            textShadow: "0 0 6px rgba(34, 197, 94, 0.6)",
          }}
        >
          {steps[step].title}
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#e0e7ff",
            lineHeight: 1.5,
            fontWeight: "500",
          }}
        >
          {steps[step].description}
        </p>

        <button
          onClick={nextStep}
          style={{
            marginTop: 20,
            padding: "12px 28px",
            fontSize: 16,
            fontWeight: "700",
            backgroundColor: "#22c55e",
            border: "none",
            borderRadius: 8,
            color: "#e0e7ff",
            cursor: "pointer",
            boxShadow: "0 4px 20px rgba(34, 197, 94, 0.6)",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#a78bfa";
            e.currentTarget.style.boxShadow = "0 6px 24px rgba(124, 58, 237, 0.7)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#22c55e";
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(34, 197, 94, 0.6)";
          }}
          aria-label="Proceed to next security phase"
        >
          Next Security Phase
        </button>
      </div>
    </div>
  );
}