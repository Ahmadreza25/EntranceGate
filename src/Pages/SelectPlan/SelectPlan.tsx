import StatusBar from "../../components/StatusBar/StatusBar";
import Plans from "./Styled/Plans";
import Slidebutton from "../../assets/icons/Slidebutton.png";
import Container from "./Styled/Container";
import PlanBox from "./Styled/PlanBox";
import Explanation from "./Styled/Explanation";
import Price from "./Styled/Price";
import Title from "./Styled/Title";
import Circle from "./Styled/Circle";
import Bill from "./Styled/Bill";
import Spacer from "./Styled/Spacer";
import SectionSpacer from "./Styled/SectionSpacer";
import Tariffs from "./Styled/Tariffs";
import Icon from "./Styled/Icon";
import SlideButton from "./Styled/SlideButton";
import BoxTariffs from "./Styled/BoxTariffs";
import Form from "./Styled/Form";
import TariffForm from "./Styled/TariffForm";
import SelectPlans from "./Styled/SelectPlans";

const SelectPlan = () => {
  return (
    <div>
      <Container>
        <Form>
          <StatusBar />
          <TariffForm>
            <SelectPlans>
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
                  <SlideButton>
                    <Icon src={Slidebutton} alt="" />
                  </SlideButton>
                  <Bill>Yearly</Bill>
                </BoxTariffs>
              </Tariffs>
            </SelectPlans>
          </TariffForm>
        </Form>
      </Container>
    </div>
  );
};

export default SelectPlan;
