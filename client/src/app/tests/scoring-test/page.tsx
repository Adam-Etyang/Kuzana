"use client";
import { useState } from "react";

export default function ScoringTest() {
  const [targetUserId, setTargetUserId] = useState("");
  const [viewerUserId, setViewerUserId] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function runScoring() {
    if (!targetUserId.trim() || !viewerUserId.trim()) return setError("Both user IDs are required");
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await fetch(`/api/matching/score`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ targetUserId, viewerUserId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message ?? "Request failed");
      setResponse(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  const scoreFields = response
    ? [
        { label: "Skill Score", value: response.skillScore, color: "#7eb8f7" },
        { label: "Interest Score", value: response.interestScore, color: "#b39ddb" },
        { label: "Goal Score", value: response.goalScore, color: "#f48fb1" },
        { label: "Field Score", value: response.fieldScore, color: "#80cbc4" },
        { label: "Availability Score", value: response.availabilityScore, color: "#ffcc80" },
        { label: "Year Gap Score", value: response.yearGapScore, color: "#a5d6a7" },
      ]
    : [];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <span style={styles.tag}>TEST HARNESS</span>
        <h1 style={styles.title}>Compatibility Scoring</h1>
        <p style={styles.sub}>Calls <code style={styles.code}>POST /scoring/compatibility</code> on the Python service</p>

        <label style={styles.label}>Target User ID</label>
        <input
          style={styles.input}
          placeholder="Mentee user ID"
          value={targetUserId}
          onChange={(e) => setTargetUserId(e.target.value)}
        />

        <label style={styles.label}>Viewer User ID</label>
        <input
          style={styles.input}
          placeholder="Mentor user ID"
          value={viewerUserId}
          onChange={(e) => setViewerUserId(e.target.value)}
        />

        <button
          style={loading ? { ...styles.button, opacity: 0.5 } : styles.button}
          onClick={runScoring}
          disabled={loading}
        >
          {loading ? "Scoring..." : "Run Scoring"}
        </button>

        {error && (
          <div style={styles.error}>
            <span style={styles.errorTag}>ERROR</span> {error}
          </div>
        )}

        {response && (
          <div style={styles.result}>
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>TOTAL SCORE</span>
              <span style={styles.totalValue}>{(response.totalScore * 100).toFixed(1)}%</span>
            </div>

            <div style={styles.barGrid}>
              {scoreFields.map(({ label, value, color }) => (
                <div key={label} style={styles.barRow}>
                  <span style={styles.barLabel}>{label}</span>
                  <div style={styles.barTrack}>
                    <div style={{ ...styles.barFill, width: `${(value ?? 0) * 100}%`, background: color }} />
                  </div>
                  <span style={{ ...styles.barValue, color }}>{((value ?? 0) * 100).toFixed(1)}%</span>
                </div>
              ))}
            </div>

            <pre style={styles.pre}>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#0f0f0f", display: "flex", justifyContent: "center", padding: "48px 16px", fontFamily: "monospace" },
  card: { width: "100%", maxWidth: "680px" },
  tag: { fontSize: "10px", letterSpacing: "0.15em", color: "#555", textTransform: "uppercase" },
  title: { fontSize: "24px", fontWeight: 600, color: "#f0f0f0", margin: "8px 0 4px" },
  sub: { fontSize: "13px", color: "#666", marginBottom: "32px" },
  label: { display: "block", fontSize: "11px", letterSpacing: "0.1em", color: "#888", textTransform: "uppercase", marginBottom: "6px", marginTop: "20px" },
  input: { width: "100%", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "6px", padding: "10px 12px", color: "#f0f0f0", fontSize: "13px", boxSizing: "border-box" },
  button: { marginTop: "24px", width: "100%", padding: "12px", background: "#1D9E75", border: "none", borderRadius: "6px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer" },
  error: { marginTop: "16px", background: "#1a0a0a", border: "1px solid #3a1a1a", borderRadius: "6px", padding: "12px", color: "#ff6b6b", fontSize: "13px" },
  errorTag: { background: "#ff6b6b", color: "#000", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "3px", marginRight: "8px" },
  result: { marginTop: "16px", background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: "6px", padding: "20px" },
  totalRow: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", paddingBottom: "16px", borderBottom: "1px solid #2a2a2a" },
  totalLabel: { fontSize: "11px", letterSpacing: "0.15em", color: "#555" },
  totalValue: { fontSize: "32px", fontWeight: 700, color: "#1D9E75" },
  barGrid: { display: "flex", flexDirection: "column", gap: "12px", marginBottom: "24px" },
  barRow: { display: "grid", gridTemplateColumns: "130px 1fr 48px", alignItems: "center", gap: "12px" },
  barLabel: { fontSize: "11px", color: "#888" },
  barTrack: { height: "4px", background: "#1a1a1a", borderRadius: "2px", overflow: "hidden" },
  barFill: { height: "100%", borderRadius: "2px", transition: "width 0.3s ease" },
  barValue: { fontSize: "11px", textAlign: "right" },
  pre: { margin: "16px 0 0", color: "#555", fontSize: "11px", overflowX: "auto", whiteSpace: "pre-wrap", borderTop: "1px solid #1a1a1a", paddingTop: "16px" },
  code: { background: "#1a1a1a", padding: "1px 6px", borderRadius: "3px", fontSize: "12px", color: "#a8d8a8" },
};
