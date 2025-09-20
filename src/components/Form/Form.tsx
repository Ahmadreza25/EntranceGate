import Container from "./Styled/Container";
import Forms from "./Styled/Forms";
import StatusBar from "../StatusBar/StatusBar";
import FormInfo from "./Styled/FormInfo";
import InfoBox from "./Styled/InfoBox";
import PersonalInfo from "../../Pages/PersonalInfo/PersonalInfo";
import SelectPlan from "../../Pages/SelectPlan/SelectPlan";
import SelectPlugin from "../../Pages/SelectPlugin/SelectPlugin";
import Summary from "../../Pages/Summary/Summary";
import usePerconalInfo from "../../store";
import { useState } from "react";

const Form = () => {
  const [counter, setCounter] = useState(0);
  const [warning, setWarning] = useState(false);

  const { name, email, userName } = usePerconalInfo();

  const isPersonalInfoValid = () => {
    return name.trim() !== "" && email.trim() !== "" && userName.trim() !== "";
  };
  const pages = [
    <PersonalInfo warning = {warning}/>,
    <SelectPlan />,
    <SelectPlugin />,
    <Summary />,
  ];

  const nextStep = () => {
    if (counter === 0 && !isPersonalInfoValid()) {
      setWarning(true);
      return;
    }
    setWarning(false);
    setCounter(counter + 1);
  };
  const goBack = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <Container>
        <Forms>
          <StatusBar />
          <FormInfo>
            <InfoBox>{pages[counter]}</InfoBox>
            <div className=" w-[100%] h-[70px] flex items-center justify-around">
              <button
                disabled={
                  (counter === 0 && !isPersonalInfoValid()) || counter === 3
                }
                onClick={nextStep}
                className="w-[130px] h-[40px] text-slate-50 bg-violet-500 rounded-[5px]"
              >
                Next Step
              </button>
              <button
                disabled={counter === 0}
                onClick={goBack}
                className="w-[130px] h-[40px] text-slate-50 bg-blue-500 rounded-[5px]"
              >
                Go Back
              </button>
            </div>
          </FormInfo>
        </Forms>
      </Container>
    </div>
  );
};

export default Form;
