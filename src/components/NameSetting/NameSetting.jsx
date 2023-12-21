import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../styles/name-setting.scss'
import BirthSetting from './BirthSetting'
import GenderSetting from './GenderSetting'

const baseUrl = 'http://localhost:8888';
const birthdate = '19961223'

export default function NameSetting() {
  const [generatedName, setGeneratedName] = useState('')
  const [selectedGender, setSelectedGender] = useState('')

  const handleGenderSelected = (gender) => {
    setSelectedGender(gender)
  }

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(`${baseUrl}/gemini/getNames?birthdate=${birthdate}&gender=${selectedGender}`)
      let result = res.data.Data.name
      console.log(res.data)
      setGeneratedName(result)
    } catch (err) {
      console.log(err)
    }
  }

  fetchData()
}, [selectedGender])

  return (
    <div className="container">
      <Header title="Name setting"/>

      <main>
        <div className="name-setting"></div>
        <div className="name-setting-container h100 d-flex flex-column justify-content-evenly align-items-center">
          <div className="title">Tell me something about you !</div>
          <GenderSetting onGenderSelected={handleGenderSelected}/>
          <BirthSetting/>
          <section className="generate">
            <div className="generate-container d-flex flex-column justify-content-center align-items-center">
              <div className="generate-text">Your name is:</div>
              <div className="generate-result">{generatedName}</div>
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