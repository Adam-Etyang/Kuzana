"use client";
import { useState } from "react";

const DAYS = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];

const defaultPayload = {
  firstName: "Alice",
  lastName: "Mwangi",
  yearOfStudy: 2,
  faculty: "Engineering",
  department: "Computer Science",
  goalStatement: "I want to improve my software engineering skills and learn about system design.",
  skills: [],
  interests: [],
  availability: [{ dayOfWeek: "MONDAY", startTime: "09:00", endTime: "11:00" }],
  role: "MENTEE",
  bio: "",
  maxMentees: 2,
};

export default function ProfileTest() {
  const [userId, setUserId] = useState("");
  const [payload, setPayload] = useState(JSON.stringify(defaultPayload, null, 2));
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submitProfile() {
    if (!userId.trim()) return setError("User ID is required");
    setLoading(true);
    setError(null);
    setResponse(null);
    try {
      const parsed = JSON.parse(payload);
      const res = await fetch(`/api/profile/submit`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId, ...parsed }),
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

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <span style={styles.tag}>TEST HARNESS</span>
        <h1 style={styles.title}>Profile Creation</h1>
        <p style={styles.sub}>Submits a profile to <code style={styles.code}>POST /profile/submit</code></p>

        <label style={styles.label}>User ID</label>
        <input
          style={styles.input}
          placeholder="Paste authenticated user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <label style={styles.label}>Payload</label>
        <textarea
          style={styles.textarea}
          value={payload}
          onChange={(e) => setPayload(e.target.value)}
          rows={20}
          spellCheck={false}
        />

        <button style={loading ? { ...styles.button, opacity: 0.5 } : styles.button} onClick={submitProfile} disabled={loading}>
          {loading ? "Submitting..." : "Submit Profile"}
        </button>

        {error && (
          <div style={styles.error}>
            <span style={styles.errorTag}>ERROR</span> {error}
          </div>
        )}

        {response && (
          <div style={styles.result}>
            <span style={styles.successTag}>SUCCESS</span>
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
  textarea: { width: "100%", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "6px", padding: "12px", color: "#a8d8a8", fontSize: "12px", fontFamily: "monospace", resize: "vertical", boxSizing: "border-box" },
  button: { marginTop: "24px", width: "100%", padding: "12px", background: "#1D9E75", border: "none", borderRadius: "6px", color: "#fff", fontSize: "14px", fontWeight: 600, cursor: "pointer" },
  error: { marginTop: "16px", background: "#1a0a0a", border: "1px solid #3a1a1a", borderRadius: "6px", padding: "12px", color: "#ff6b6b", fontSize: "13px" },
  errorTag: { background: "#ff6b6b", color: "#000", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "3px", marginRight: "8px" },
  result: { marginTop: "16px", background: "#0a1a0a", border: "1px solid #1a3a1a", borderRadius: "6px", padding: "12px" },
  successTag: { background: "#1D9E75", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "1px 6px", borderRadius: "3px", marginRight: "8px" },
  pre: { margin: "12px 0 0", color: "#a8d8a8", fontSize: "12px", overflowX: "auto", whiteSpace: "pre-wrap" },
  code: { background: "#1a1a1a", padding: "1px 6px", borderRadius: "3px", fontSize: "12px", color: "#a8d8a8" },
};
