import React from "react";
import Header from "./Header/Header";
import "../styles/chatroom.scss";

export default function Chatroom() {
  return (
    <div className="container">
      <Header title="Chatroom" />
      <main>
        <div className="chat-space"></div>
      </main>
      <footer className="type-place d-flex justify-content-between">
        <input type="text" placeholder="say something" className="chat-input" />
      </footer>
    </div>
  );
}
