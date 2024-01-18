import { BrowserRouter, Route, Routes } from "react-router-dom";
import NameSetting from "./components/NameSetting/NameSetting";
import Chatroom from "./components/Chatroom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NameSetting />} />
          <Route path="Chatroom" element={ <Chatroom/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
