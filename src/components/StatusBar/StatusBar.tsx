import Bar from "./Styled/Bar";
import Situations from "./Styled/Situations";
import Status from "./Styled/Status";
import Circle from "./Styled/Circle";
import Number from "./Styled/Number";
import Step from "./Styled/Step";
import StatusTitle from "./Styled/StatusTitle";
import Titles from "./Styled/Titles";


const StatusBar = () => {
  return (
    <div>
      <Bar>
        <Situations>
          <Status>
            <Circle>
              <Number>1</Number>
            </Circle>
            <Titles>
              <Step>STEP1</Step>
              <StatusTitle>YOUR INFO</StatusTitle>
            </Titles>
          </Status>
          <Status margintop="25px">
            <Circle>
              <Number>2</Number>
            </Circle>
            <Titles>
              <Step>STEP2</Step>
              <StatusTitle>SELECT PLAN</StatusTitle>
            </Titles>
          </Status>
          <Status margintop="25px">
            <Circle>
              <Number>3</Number>
            </Circle>
            <Titles>
              <Step>STEP3</Step>
              <StatusTitle>ADD-ONS</StatusTitle>
            </Titles>
          </Status>
          <Status margintop="25px">
            <Circle>
              <Number>4</Number>
            </Circle>
            <Titles>
              <Step>STEP4</Step>
              <StatusTitle>SUMMARY</StatusTitle>
            </Titles>
          </Status>
        </Situations>
      </Bar>
    </div>
  );
};

export default StatusBar;
