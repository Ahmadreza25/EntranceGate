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
import Button from "./Styled/Button";
import Box from "./Styled/Box";
import { useState } from "react";

const Form = () => {
  const [counter, setCounter] = useState(0);

  const [warning, setWarning] = useState(false);

  const { name, email, userName } = usePerconalInfo();

  const isPersonalInfoValid = () => {
    return name.trim() !== "" && email.trim() !== "" && userName.trim() !== "";
  };

  const renderPage = () => {
    switch (counter) {
      case 0:
        return <PersonalInfo warning={warning} />;
      case 1:
        return <SelectPlan />;
      case 2:
        return <SelectPlugin />;
      case 3:
        return <Summary />;
      default:
        return null;
    }
  };

  const nextStep = () => {
    if (counter === 0 && !isPersonalInfoValid()) {
      setWarning(true);
      return;
    }
    setCounter(counter + 1);
  };
  const goBack = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <Container>
        <Forms>
          <StatusBar counter={counter}/>
          <FormInfo>
            <InfoBox>{renderPage()}</InfoBox>
            <Box>
              <Button bg="#8b5cf6" disabled={counter === 3} onClick={nextStep}>
                Next Step
              </Button>
              <Button bg="#3b82f6" disabled={counter === 0} onClick={goBack}>
                Go Back
              </Button>
            </Box>
          </FormInfo>
        </Forms>
      </Container>
    </div>
  );
};

export default Form;
