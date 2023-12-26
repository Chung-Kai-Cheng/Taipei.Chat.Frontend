import React from "react";

export default function Footer({ children }) {
  return (
    <button className="cursor-pointer">
      <h1>{children}</h1>
    </button>
  );
}
