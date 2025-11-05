import React from "react";

/**
 * UserProfileLookup (Class Component)
 * Requirements covered:
 * 1) Fetch + display name/email/phone/website
 * 2) Show "User not found" if ID outside 1–10 or missing
 * 3) Show "Loading..." while fetching
 * 4) Gracefully handle network/HTTP errors
 * 5) Clear previous user's data when a new search begins
 *
 * State fields used (per hint):
 *   userId, user, loading, error, notFound
 */
export default class UserProfileLookup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      user: null,
      loading: false,
      error: null,
      notFound: false,
    };
  }

  handleChange = (e) => {
    // keep it as a string so empty value is allowed
    this.setState({ userId: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === "Enter") this.handleSearch();
  };

  handleSearch = async () => {
    const raw = String(this.state.userId).trim();

    // (5) Clear previous results & show loading immediately
    this.setState({ loading: true, error: null, notFound: false, user: null });

    // Validate ID 1..10 per assignment/screenshots
    const id = Number(raw);
    const isValid = Number.isInteger(id) && id >= 1 && id <= 10;
    if (!isValid) {
      this.setState({ loading: false, notFound: true });
      return;
    }

    try {
      const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

      const data = await resp.json();

      // (2) Treat missing/invalid payload as "not found"
      if (!data || !data.id) {
        this.setState({ loading: false, notFound: true });
        return;
      }

      // (1) Success — store the user object
      this.setState({ user: data, loading: false, notFound: false, error: null });
    } catch (err) {
      // (4) Network/other errors
      this.setState({
        loading: false,
        error: err?.message || "Network error",
        notFound: false,
      });
    }
  };

  render() {
    const { userId, user, loading, error, notFound } = this.state;

    return (
      <div>
        <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
          <input
            type="number"
            min={1}
            max={10}
            placeholder="Enter user id (1–10)"
            value={userId}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            style={{
              padding: "10px 12px",
              fontSize: 20,
              border: "1px solid #bbb",
              borderRadius: 6,
              width: 280,
            }}
          />
          <button
            onClick={this.handleSearch}
            style={{ padding: "8px 14px", fontSize: 18 }}
          >
            Search
          </button>
        </div>

        {/* (3) Loading */}
        {loading && <div style={{ fontSize: 20, color: "#555" }}>Loading...</div>}

        {/* (4) Errors */}
        {error && <div style={{ color: "#c62828", fontSize: 22 }}>Error: {error}</div>}

        {/* (2) Not found */}
        {notFound && (
          <div style={{ color: "#c62828", fontSize: 22 }}>Error: User not found</div>
        )}

        {/* (1) Render details when present */}
        {user && (
          <>
            <div style={{ fontSize: 40, fontWeight: 800, marginTop: 24 }}>
              {user.name}
            </div>
            <div style={{ fontSize: 24, marginTop: 16 }}>
              <strong>Email: </strong>
              {user.email}
            </div>
            <div style={{ fontSize: 24, marginTop: 16 }}>
              <strong>Phone: </strong>
              {user.phone}
            </div>
            <div style={{ fontSize: 24, marginTop: 16 }}>
              <strong>Website: </strong>
              {user.website}
            </div>
          </>
        )}
      </div>
    );
  }
}
