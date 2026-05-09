import  { useEffect, useState } from "react";

export default function App() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
  
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

  
    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.trim() === "") return;

    console.log("Searching for:", debouncedQuery);
  }, [debouncedQuery]);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Debounce Search</h1>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          fontSize: "16px",
        }}
      />

      <h3>Typing: {query}</h3>
      <h3>Debounced: {debouncedQuery}</h3>
    </div>
  );
}
