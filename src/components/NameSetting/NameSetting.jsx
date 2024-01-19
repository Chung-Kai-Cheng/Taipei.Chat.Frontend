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
  const [step, setStep] = useState(1); // 當前步驟
  const navigate = useNavigate();

  useEffect(() => {
    setGeneratedName("Generating...");
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/gemini/getNames?birthdate=${birthdate}&gender=${gender}`
        );
        let result = res.data.Data.name;
        console.log(result);
        setGeneratedName(result);
      } catch (err) {
        // 錯誤處理...
      }
    };

    fetchData();
  }, [gender, birthdate]);

  const handleStartChatting = () => {
    if (step === 1) {
      // 若是第一步，直接切換到下一步
      setStep(step + 1);
    } else if (step === 2 && gender !== "") {
      // 若是第二步，且性別已填寫，切換到下一步
      setStep(step + 1);
    } else if (step === 3 && birthdate !== "") {
      // 若是第三步，且生日已填寫，切換到下一步
      setStep(step + 1);
    } else if (step === 4) {
      // 若是第四步，直接導向到 Chatroom
      navigate("/Chatroom");
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
              </div>
            </section>
          )}
        </div>
      </main>

      <div
        className="start-chatting-btn cursor-pointer"
        onClick={handleStartChatting}
      >
        <h1>{step < 3 ? "Next" : "Start chatting!"}</h1>
      </div>
    </div>
  );
}
