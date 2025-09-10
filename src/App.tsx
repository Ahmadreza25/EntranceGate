import { BrowserRouter, Routes, Route } from "react-router";

import PersonalInfo from "./Pages/PersonalInfo/PersonalInfo";
import SelectPlan from "./Pages/SelectPlan/SelectPlan";
import SelectPlugin from "./Pages/SelectPlugin/SelectPlugin";
import Summary from "./Pages/Summary/Summary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/2" element={<SelectPlan />}/>
          <Route path="/3" element={<SelectPlugin />} />
          <Route path="/4" element={<Summary />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
