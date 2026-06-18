"use client";
import { useState } from "react";

export default function MatchingTest() {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function runMatching() {
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const res = await fetch(`/api/matching/run`, {
        method: "POST",
        headers: { "content-type": "application/json" },
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

  const matches: [string, string][] = response?.matches ?? [];
  const waitlisted: string[] = response?.waitlisted ?? [];

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <span style={styles.tag}>TEST HARNESS</span>
        <h1 style={styles.title}>Matching Run</h1>
        <p style={styles.sub}>
          Fetches all mentors + mentees from the DB, runs the Gale-Shapley algorithm via{" "}
          <code style={styles.code}>POST /matching/run</code>
        </p>

        <div style={styles.infoBox}>
          This triggers a full match run. It will fetch all eligible mentors and mentees from the database and pass them to the Python matching service. Only run this with real seeded data.
        </div>

        <button
          style={loading ? { ...styles.button, opacity: 0.5 } : styles.button}
          onClick={runMatching}
          disabled={loading}
        >
          {loading ? "Running match..." : "Run Matching"}
        </button>

        {error && (
          <div style={styles.error}>
            <span style={styles.errorTag}>ERROR</span> {error}
          </div>
        )}

        {response && (
          <div style={styles.result}>
            <div style={styles.statsRow}>
              <div style={styles.stat}>
                <span style={styles.statValue}>{matches.length}</span>
                <span style={styles.statLabel}>Matches</span>
              </div>
              <div style={styles.statDivider} />
              <div style={styles.stat}>
                <span style={{ ...styles.statValue, color: "#ffcc80" }}>{waitlisted.length}</span>
                <span style={styles.statLabel}>Waitlisted</span>
              </div>
            </div>

            {matches.length > 0 && (
              <>
                <p style={styles.sectionLabel}>MATCHES</p>
                <div style={styles.matchList}>
                  {matches.map(([menteeId, mentorId], i) => (
                    <div key={i} style={styles.matchRow}>
                      <div style={styles.matchCell}>
                        <span style={styles.roleTag}>MENTEE</span>
                        <span style={styles.userId}>{menteeId}</span>
                      </div>
                      <span style={styles.arrow}>→</span>
                      <div style={styles.matchCell}>
                        <span style={{ ...styles.roleTag, background: "#1a3a5a", color: "#7eb8f7" }}>MENTOR</span>
                        <span style={styles.userId}>{mentorId}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {waitlisted.length > 0 && (
              <>
                <p style={{ ...styles.sectionLabel, color: "#ffcc80", marginTop: "24px" }}>WAITLISTED</p>
                <div style={styles.matchList}>
                  {waitlisted.map((menteeId, i) => (
                    <div key={i} style={{ ...styles.matchRow, borderColor: "#2a1a00" }}>
                      <span style={{ ...styles.roleTag, background: "#2a1a00", color: "#ffcc80" }}>MENTEE</span>
                      <span style={styles.userId}>{menteeId}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

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
  sub: { fontSize: "13px", color: "#666", marginBottom: "24px" },
  infoBox: { background: "#111", border: "1px solid #2a2a2a", borderRadius: "6px", padding: "12px 16px", fontSize: "12px", color: "#666", marginBottom: "24px", lineHeight: 1.6 },
  button: { width: "100%", padding: "12px", background: "#1D9E75", border: "none", borderRadius: "6px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer" },
  error: { marginTop: "16px", background: "#1a0a0a", border: "1px solid #3a1a1a", borderRadius: "6px", padding: "12px", color: "#ff6b6b", fontSize: "13px" },
  errorTag: { background: "#ff6b6b", color: "#000", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "3px", marginRight: "8px" },
  result: { marginTop: "16px", background: "#0d0d0d", border: "1px solid #2a2a2a", borderRadius: "6px", padding: "20px" },
  statsRow: { display: "flex", alignItems: "center", gap: "24px", marginBottom: "28px", paddingBottom: "20px", borderBottom: "1px solid #1a1a1a" },
  stat: { display: "flex", flexDirection: "column", gap: "4px" },
  statValue: { fontSize: "36px", fontWeight: 700, color: "#1D9E75", lineHeight: 1 },
  statLabel: { fontSize: "10px", letterSpacing: "0.1em", color: "#555", textTransform: "uppercase" },
  statDivider: { width: "1px", height: "40px", background: "#2a2a2a" },
  sectionLabel: { fontSize: "10px", letterSpacing: "0.15em", color: "#555", marginBottom: "12px", marginTop: "0" },
  matchList: { display: "flex", flexDirection: "column", gap: "8px" },
  matchRow: { display: "flex", alignItems: "center", gap: "12px", background: "#111", border: "1px solid #1a1a1a", borderRadius: "6px", padding: "10px 14px" },
  matchCell: { display: "flex", alignItems: "center", gap: "8px", flex: 1, minWidth: 0 },
  roleTag: { background: "#0a2a1a", color: "#1D9E75", fontSize: "9px", fontWeight: 700, padding: "2px 6px", borderRadius: "3px", letterSpacing: "0.1em", flexShrink: 0 },
  arrow: { color: "#333", fontSize: "16px", flexShrink: 0 },
  userId: { fontSize: "11px", color: "#888", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" },
  pre: { margin: "24px 0 0", color: "#555", fontSize: "11px", overflowX: "auto", whiteSpace: "pre-wrap", borderTop: "1px solid #1a1a1a", paddingTop: "16px" },
  code: { background: "#1a1a1a", padding: "1px 6px", borderRadius: "3px", fontSize: "12px", color: "#a8d8a8" },
};
