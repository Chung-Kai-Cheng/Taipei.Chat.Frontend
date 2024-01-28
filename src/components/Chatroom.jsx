import React, { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Cookies from "js-cookie";
import Header from "./Header/Header";
import "../styles/chatroom.scss";

export default function Chatroom() {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [generatedToken, setGeneratedToken] = useState("");
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://localhost:8080/ws"
  );

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("token is ", token);
    setGeneratedToken(token);
  }, []);

  console.log(generatedToken);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  console.log(connectionStatus);

  const handleInputText = (event) => {
    setInputText(event.target.value);
  };

  const handleEnterPress = (event) => {
    if (event.key === "Enter" && inputText.trim() !== "") {
      // 將輸入的文字加入聊天歷史
      setChatHistory([...chatHistory, inputText]);
      // 清空輸入欄位
      setInputText("");
    }
  };

  return (
    <div className="container">
      <Header title="Chatroom" />
      <main>
        <div className="chat-space d-flex flex-column align-items-end">
          {chatHistory.map((message, index) => (
            <div className="chat-box" key={index}>
              {message}
            </div>
          ))}
        </div>
      </main>
      <footer className="type-place d-flex justify-content-between">
        <input
          type="text"
          placeholder="say something"
          className="chat-input"
          value={inputText}
          onChange={handleInputText}
          onKeyDown={handleEnterPress}
        />
      </footer>
    </div>
  );
}
