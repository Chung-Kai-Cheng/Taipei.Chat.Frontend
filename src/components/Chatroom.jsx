import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Header from "./Header/Header";
import "../styles/chatroom.scss";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

export default function Chatroom() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [webSocket, setWebSocket] = useState(null);

  useEffect(() => {
    const token = Cookies.get("chat-token");

    // 建立WebSocket連接
    const ws = new WebSocket(`ws://localhost:8080/ws?chat-token=${token}`);

    setWebSocket(ws);

    //每1分鐘定期檢查Cookies中的token是否存在
    const intervalId = setInterval(() => {
      if (!Cookies.get("chat-token")) {
        //若不存在則導向初始頁面
        navigate("/");
      }
    }, 60 * 1000);

    // 事件處理器 - 連接建立
    ws.onopen = (event) => {
      console.log("WebSocket connected.", event);
    };

    // 事件處理器 - 接收訊息
    ws.onmessage = (event) => {
      //標註為接收的訊息
      const receivedMessage = { content: event.data, type: "received" };
      // 更新聊天訊息
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    };

    // 事件處理器 - 連接關閉
    ws.onclose = (event) => {
      console.log("WebSocket closed.", event);
    };

    // 事件處理器 - 連接錯誤
    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // 在 component 卸載時關閉 WebSocket 連接
    return () => {
      // 僅在ws連線已建立才會關閉
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }

      // 清除定時器
      clearInterval(intervalId);
    };
  }, []);

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() !== "" && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(inputValue);

      //標註為傳送的訊息
      const sentMessage = { content: inputValue, type: "sent" };
      // 更新聊天消息
      setMessages((prevMessages) => [...prevMessages, sentMessage]);
      // 清空输入框
      setInputValue("");
    }
  };

  return (
    <div className="container">
      <Header title="Chatroom" />
      <main>
        <div className="chat-space d-flex flex-column">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`chat-box ${message.type}`}
              //傳送的訊息顯示於右邊，接收的訊息顯示於左邊
              style={{
                alignSelf: `flex-${message.type === "sent" ? "end" : "start"}`,
              }}
            >
              {message.content}
            </div>
          ))}
        </div>
      </main>
      <footer className="type-place">
        <div className="input-container">
          <input
            type="text"
            placeholder=""
            className="chat-input"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleEnterPress}
          />
          <span className="icon-container">
            <button
              className="send-message-btn cursor-pointer"
              onClick={sendMessage}
            >
              <SendRoundedIcon
                sx={{
                  fontSize: 22,
                  color: "white",
                }}
              />
            </button>
          </span>
        </div>
      </footer>
    </div>
  );
}
