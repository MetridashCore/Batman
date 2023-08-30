import React from "react";

const Schedule: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  };

  const bigTextStyle: React.CSSProperties = {
    fontSize: "5rem",
  };

  const emailContainerStyle: React.CSSProperties = {
    marginTop: "1rem",
    display: "flex", // Use flex to align items in a row
    flexDirection: "row", // Align items in a row
    alignItems: "center",
  };

  const inputStyle: React.CSSProperties = {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "0.5rem 1rem",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginLeft: "0.5rem", // Add spacing between input and button
  };

  return (
    <div style={containerStyle}>
      <h1 style={bigTextStyle}>Coming Soon</h1>
      <p>
        In the meantime, sign up for our monthly newsletter to stay up to date.
      </p>
      <div style={emailContainerStyle}>
        <input type="email" style={inputStyle} placeholder="Enter your email" />
        <button style={buttonStyle}>Sign Up</button>
      </div>
    </div>
  );
};

export default Schedule;
