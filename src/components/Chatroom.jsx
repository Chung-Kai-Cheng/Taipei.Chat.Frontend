import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Header from "./Header/Header";
import "../styles/chatroom.scss";

export default function Chatroom() {
  const [inputText, setInputText] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [generatedToken, setGeneratedToken] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    console.log("token is ", token);
    setGeneratedToken(token);
  }, []);

  useEffect(() => {
    // 建立WebSocket連接
    const ws = new WebSocket(
      `ws://localhost:8080/ws?Sec-WebSocket-Token=${generatedToken}`
    );

    // 事件處理器 - 連接建立
    ws.onopen = (event) => {
      console.log("WebSocket connected.");
    };

    // 事件處理器 - 接收訊息
    ws.onmessage = (event) => {
      console.log("Received message:", event.data);
    };

    // 事件處理器 - 連接關閉
    ws.onclose = (event) => {
      console.log("WebSocket closed.");
    };

    // 事件處理器 - 連接錯誤
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // 在 component 卸載時關閉 WebSocket 連接
    return () => {
      ws.close();
    };
  }, [generatedToken]);

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
