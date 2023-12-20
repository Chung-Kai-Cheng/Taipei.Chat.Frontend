import React from 'react';
import axios from 'axios';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import '../../styles/name-setting.scss'
import BirthSetting from './BirthSetting'
import GenderSetting from './GenderSetting'

const baseUrl = 'http://localhost:8080';

export default function NameSetting() {

// const response = axios.get(`${baseUrl}/chatgpt/getNames`);
axios.get(`http://localhost:8080/chatgpt/getNames`)
  .then(function (response){
    console.log(response.data)
  })
  .catch(function (error) {
    console.log(error)
  })

axios.get(`https://randomuser.me/api/?results=3&gender=female`)
  .then(function (response){
    console.log(response.data.results[0])
  })
  .catch(function (error) {
    console.log(error)
  })


  // const [generatedName, setGenerateName] = useState('wait...');



  // useEffect(() => {
  //   const fetchNames = async () => {
  //     try {
  //       const response = await axios.get(`${baseUrl}/chatgpt/getNames`);
        
  //       console.log(JSON.stringify(response.data));
  //       const name = response.data
  //       setGenerateName(name)
  //       return response
  //     }
  //     catch(error){
  //       console.error('API call failed', error)
  //     }
  //   }

  //   fetchNames();
  // }, [])

  // const [selectedGender, setSelectedGender] = useState('')
  // const [selectedDate, setSelectedDate] = useState('')
  
  // const handleGenderChange = (gender) => {
  //   setSelectedGender(gender)
  // }
  // const handleDateChange = (date) => {
  //   setSelectedDate(date)
  // }

  // const sendDataToBackend = async () => {
  //   try {
  //     const response = await axios.post(`${baseUrl}/sendData`, {
  //       data : selectedDate,
  //     })
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error('API call failed', error)
  //   }
  // }


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