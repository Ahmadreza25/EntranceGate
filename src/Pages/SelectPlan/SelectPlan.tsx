import Plans from "./Styled/Plans";
import PlanBox from "./Styled/PlanBox";
import Explanation from "./Styled/Explanation";
import Price from "./Styled/Price";
import Title from "./Styled/Title";
import Circle from "./Styled/Circle";
import Bill from "./Styled/Bill";
import Spacer from "./Styled/Spacer";
import SectionSpacer from "./Styled/SectionSpacer";
import Tariffs from "./Styled/Tariffs";
import BoxTariffs from "./Styled/BoxTariffs";

const SelectPlan = () => {
  return (
    <div>
      <SectionSpacer>
        <Title>Select your plan</Title>
        <Explanation>
          You have the option of monthly or yearly billing.
        </Explanation>
      </SectionSpacer>
      <Plans>
        <PlanBox>
          <Circle bg="#fbbf24"></Circle>
          <Spacer>
            <Bill>Arcade</Bill>
            <Price>$9/mo</Price>
          </Spacer>
        </PlanBox>
        <PlanBox>
          <Circle bg="#f87171"></Circle>
          <Spacer>
            <Bill>Advanced</Bill>
            <Price>$12/mo</Price>
          </Spacer>
        </PlanBox>
        <PlanBox>
          <Circle bg="#c084fc"></Circle>
          <Spacer>
            <Bill>Pro</Bill>
            <Price>$15/mo</Price>
          </Spacer>
        </PlanBox>
      </Plans>
      <Tariffs>
        <BoxTariffs>
          <Bill>Monthly</Bill>
          <Bill>Yearly</Bill>
        </BoxTariffs>
      </Tariffs>
    </div>
  );
};

export default SelectPlan;
