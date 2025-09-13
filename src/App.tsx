import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import SelectPlugin from "./Pages/SelectPlugin/SelectPlugin";
import Summary from "./Pages/Summary/Summary";
import SliderButton from "./components/SliderButton/SliderButton";
import { lightTheme, darkTheme } from "../src/Style/Theme";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <BrowserRouter>
          <SliderButton onClick={() => setIsDarkMode(prev => !prev)} isDarkMode={isDarkMode} />
          <Routes>
            <Route path="/" element={<PersonalInfo />} />
            <Route path="/2" element={<SelectPlan />} />
            <Route path="/3" element={<SelectPlugin />} />
            <Route path="/4" element={<Summary />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
