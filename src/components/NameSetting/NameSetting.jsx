import React from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../styles/name-setting.scss'
import BirthSetting from './BirthSetting'
import GenderSetting from './GenderSetting'

const baseUrl = 'http://localhost:8888';

export default function NameSetting() {

axios.get(`${baseUrl}/gemini/getNames`)
  .then( response =>
    console.log(response.data.Data.name)
  )
  .catch( err =>
    console.log(err)
  )

  return (
    <div className="container">
      <Header title="Name setting"/>

      <main>
        <div className="name-setting"></div>
        <div className="name-setting-container h100 d-flex flex-column justify-content-evenly align-items-center">
          <div className="title">Tell me something about you !</div>
          <GenderSetting/>
          <BirthSetting/>
          <section className="generate">
            <div className="generate-container d-flex flex-column justify-content-center align-items-center">
              <div className="generate-text">Your name is:</div>
              <div className="generate-result"></div>
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