import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import '../styles/name-setting.scss'

export default function NameSetting() {
  return (
    <div className="container">
      <Header title="Name setting"/>

      <main>
        <div className="name-setting"></div>
        <div className="name-setting-container h100 d-flex flex-column justify-content-evenly align-items-center">
          <div className="title">Tell me something about you !</div>
          <section className="gender">
            <div className="gender-container">
              <div className="gender-text text-center">Gender</div>
              <div className="checkbox-container d-flex justify-content-between">
                <div className="checkbox-male-container d-flex flex-column justify-content-center align-items-center">
                  <label htmlFor="checkbox-male">
                    <input type="checkbox" name="checkboxMale" className="cursor-pointer"/>
                  </label>
                  <div className="checkbox-male-text">male</div>
                </div>
                <div className="checkbox-female-container d-flex flex-column justify-content-center align-items-center">
                  <label htmlFor="checkbox-female">
                    <input type="checkbox" name="checkboxFemale" className="cursor-pointer"/>
                  </label>
                  <div className="checkbox-female-text">female</div>
                </div>
              </div>
            </div>
          </section>
          <section className="birth">
            <div className="date-container">
              <label htmlFor="yearMonth">
                <div className="yearMonth-text text-center">Date of birth</div>
                <input type="month" name="yearMonth" className="cursor-pointer"/>
              </label>
            </div>
          </section>
          <section className="generate">
            <div className="generate-container d-flex flex-column justify-content-center align-items-center">
              <div className="generate-text">Your name is:</div>
              <div className="generate-result">Wait for generate</div>
              <button className="generate-btn cursor-pointer">
                <div>Generate</div>
                <img className="gpt-img" src="/image/chatgpt.png" width="40px" alt="ChatGPT.logo" />
                <div className="chatgpt-text">by ChatGPT</div>
              </button>
            </div>
          </section>
        </div>  
      </main>

      <Footer>
        Start chatting!
      </Footer>
    </div>
  )
}