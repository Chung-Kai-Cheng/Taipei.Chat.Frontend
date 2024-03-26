# Taipei.Chat.Frontend
  
Select in your birthdate and gender, use AI to generate a customized name, and feel free to engage in conversation on any topic you'd like.

# Features
- Experiment with the AI-generated name crafted from your birthdate and gender!
- Your identity remains entirely confidential, express yourself openly.
- The chatroom will automatically close after 1 hour to safeguard your privacy.

# Demo
1. Provide your informtion ( gender, birthdate ) to generate your name.
   - <sub>If you forget to select, you won't be able to proceed, and a window alert will prompt you.</sub>
     
![image](https://github.com/njdhdl1223/Taipei.Chat.Frontend/assets/127296290/619782d0-d25e-4f1e-91e7-1bd10a3752bd)

2. Generating... and there you have it! (If you don't like your name, click regenerate button to generate again!)
   
![image](https://github.com/Chung-Kai-Cheng/Taipei.Chat.Frontend/assets/127296290/e8264486-76d0-41f1-8e9f-3927bc219f9a)

4. Enjoy your time in the chat!
   
![image](https://github.com/Chung-Kai-Cheng/Taipei.Chat.Frontend/assets/127296290/9f6fb772-21c5-4fb8-a3d2-f7cf408de6cb)

- **Error message**
  - <sub>When encountering this error message, please verify your network connection and attempt the operation again.</sub>
  
![image](https://github.com/Chung-Kai-Cheng/Taipei.Chat.Frontend/assets/127296290/6c24476a-a410-41c5-b115-9b3299f5c584)

# Tech Stack
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Vite](https://img.shields.io/badge/-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=white)

- Create React with Vite and Node.js
- React Hooks
   - useState
     - Track the current step, user-selected gender and birthdate, WebSocket status, input messages and chatroom messages.
   - useEffect
     - Generate a name based on birthdate and gender, storing the token and username in Cookies.
     - Utilizes async/await and try/catch to handle asynchronous operations.
     - Establishes and manages a WebSocket connection, processing incoming WebSocket messages.
    
![React Router](https://img.shields.io/badge/-React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

- BrowserRouter & useNavigate
  - Divide pages into NameSetting and Chatroom, and navigate between them based on conditions.
    
![WebSocket](https://img.shields.io/badge/-WebSocket-4E4E4E?style=for-the-badge&logo=websocket&logoColor=white)

- Utilize useEffect to handle chatroom connections, message reception, and transmission.
    
![SCSS](https://img.shields.io/badge/-SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

- Enhance code reusability, maintainability, and readability.

![Material-UI](https://img.shields.io/badge/-Material_UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)

- Optimize development efficiency and elevate the quality of the user interface.
