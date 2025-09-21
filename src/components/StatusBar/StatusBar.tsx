import Bar from "./Styled/Bar";
import Situations from "./Styled/Situations";
import Status from "./Styled/Status";
import Circle from "./Styled/Circle";
import Number from "./Styled/Number";
import Step from "./Styled/Step";
import StatusTitle from "./Styled/StatusTitle";
import Titles from "./Styled/Titles";

const StatusBar = ({ counter }: { counter: number }) => {
  const titles = [
    {
      numder:"1",
      title: "YOUR INFO",
      Step: "STEP1",
    },
    {
      numder: "2",
      title: "SELECT PLAN",
      Step: "STEP2",
    },
    {
      numder: "3",
      title: "ADD-ONS",
      Step: "STEP3",
    },
    {
      numder: "4",
      title: "SUMMARY",
      Step: "STEP4",
    },
  ];
  return (
    <div>
      <Bar>
        <Situations>
          {titles.map((items ,index) => (
            <Status margintop="25px">
              <Circle counter={index === counter} completed={index < counter}>
                <Number>{items.numder}</Number>
              </Circle>
              <Titles>
                <Step>{items.Step}</Step>
                <StatusTitle>{items.title}</StatusTitle>
              </Titles>
            </Status>
          ))}
        </Situations>
      </Bar>
    </div>
  );
};

export default StatusBar;
