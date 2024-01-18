import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import "../../styles/name-setting.scss";
import BirthSetting from "./BirthSetting";
import GenderSetting from "./GenderSetting";

const baseUrl = "http://localhost:8080";

export default function NameSetting() {
  const [generatedName, setGeneratedName] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  // 使用 useNavigate 來獲取 navigate 對象
  const navigate = useNavigate();

  useEffect(() => {
    setGeneratedName("生成中...");
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/gemini/getNames?birthdate=${birthdate}&gender=${gender}`
        );
        let result = res.data.Data.name;
        console.log(result);
        setGeneratedName(result);
      } catch (err) {
        if (err.response && err.response.data.Status == 400) {
          setGeneratedName(err.response.data.Message);
          console.log(err.response.status);
        } else if (err.response && err.response.data) {
          setGeneratedName(err.response.data);
        } else {
          console.log("An error occurred.");
          setGeneratedName("An error occurred.");
        }
      }
    };

    fetchData();
  }, [gender, birthdate]);

  // 點擊後導向/Chatroom
  const handleStartChatting = () => {
    navigate("/Chatroom");
  };

  return (
    <div className="container">
      <Header title="Name setting" />

      <main>
        <div className="name-setting"></div>
        <div className="name-setting-container h100 d-flex flex-column justify-content-evenly align-items-center">
          <div className="title">Tell me something about you !</div>
          <GenderSetting setGender={setGender} />
          <BirthSetting setBirthdate={setBirthdate} />
          <section className="generate">
            <div className="generate-container d-flex flex-column justify-content-center align-items-center">
              <div className="generate-text">Your name is:</div>
              <div className="generate-result">{generatedName}</div>
            </div>
          </section>
        </div>
      </main>

      <div
        className="start-chatting-btn cursor-pointer"
        onClick={handleStartChatting}
      >
        <h1>Start chatting!</h1>
      </div>
    </div>
  );
}
