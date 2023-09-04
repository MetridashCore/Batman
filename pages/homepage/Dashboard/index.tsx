import React from "react";
import dasboard from "../../../../public/Images/dasboard.png";

const Dashboard: React.FC = () => {
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
    </div>
  );
};

export default Dashboard;
