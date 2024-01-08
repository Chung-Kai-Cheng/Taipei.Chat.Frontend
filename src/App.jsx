import { BrowserRouter, Route, Routes } from "react-router-dom";
import NameSetting from "./components/NameSetting/NameSetting";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NameSetting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
