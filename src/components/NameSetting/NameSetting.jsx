import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/Header";
import "../../styles/name-setting.scss";
import BirthSetting from "./BirthSetting";
import GenderSetting from "./GenderSetting";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const baseUrl = "http://localhost:8080";

export default function NameSetting() {
  const [generatedName, setGeneratedName] = useState("Generating...");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [step, setStep] = useState(1); // 當前步驟
  const navigate = useNavigate();

  const postData = async () => {
    setGeneratedName("Generating...");
    try {
      const res = await axios.post(`${baseUrl}/gemini/getNames`, {
        birthdate: birthdate,
        gender: gender,
      });
      let result = res.data.Data;
      // 將產生的token存入sessionStorage
      sessionStorage.setItem("chat-token", result.token);
      sessionStorage.setItem("username", result.name);
      setGeneratedName(result.name);
    } catch (err) {
      if (err.response && err.response.data.Status === 400) {
        setGeneratedName(err.response.data.Message);
        console.log(err.response.status);
      } else if (err.response && err.response.data) {
        setGeneratedName(err.response.data);
      } else {
        console.log(err.message);
        setGeneratedName(err.message);
      }
    }
  };

  useEffect(() => {
    // 第四步才判斷是否產生錯誤
    if (step === 4) {
      postData();
    }
  }, [step]);

  const handleGenerate = () => {
    postData();
  };

  const handleStartChatting = () => {
    switch (step) {
      case 1:
        // 若是第一步，直接切換到下一步
        setStep(step + 1);
        break;

      case 2:
        // 若是第二步，且性別已填寫，切換到下一步
        if (gender !== "") {
          setStep(step + 1);
        } else {
          alert("Please select your gender!");
        }
        break;

      case 3:
        // 若是第三步，且生日已填寫，切換到下一步
        if (birthdate !== "") {
          setStep(step + 1);
        } else {
          alert("Please select your birthday!");
        }
        break;

      case 4:
        // 若是第四步，且已將token值存sessionStorage，則導向Chatroom
        if (sessionStorage.getItem("chat-token")) {
          navigate("/Chatroom");
        } else {
          alert("You need to generate the name first!");
        }
        break;
    }
  };

  return (
    <div className="container">
      <Header title="Name setting" />

      <main>
        <div className="name-setting"></div>
        <div className="name-setting-container h100 d-flex flex-column justify-content-evenly align-items-center">
          {step === 1 && (
            <div className="title">Tell me something about you!</div>
          )}
          {step === 2 && (
            <div className="title">
              <GenderSetting setGender={setGender} />
            </div>
          )}
          {step === 3 && (
            <div className="title">
              <BirthSetting setBirthdate={setBirthdate} />
            </div>
          )}
          {step === 4 && (
            <section className="generate">
              <div className="generate-container d-flex flex-column justify-content-center align-items-center">
                <div className="title">Your name is:</div>
                <div className="generate-result">{generatedName}</div>
                <div
                  className="regenerate-name-btn  cursor-pointer"
                  onClick={handleGenerate}
                >
                  <RestartAltIcon fontSize="small" />
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <div
        className="start-chatting-btn cursor-pointer"
        onClick={handleStartChatting}
      >
        <h1>{step < 4 ? "Next" : "Start chatting!"}</h1>
      </div>
    </div>
  );
}
