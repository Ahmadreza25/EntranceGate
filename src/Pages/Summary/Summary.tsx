import SectionSpacer from "./Styled/SectionSpacer";
import Title from "./Styled/Title";
import StatusBar from "../../components/StatusBar/StatusBar";
import Explanation from "./Styled/Explanation";
import Container from "./Styled/Container";
import Form from "./Styled/Form";
import Factors from "./Styled/Factors";
import Factor from "./Styled/Factor";
import Price from "./Styled/Price";
import Plural from "./Styled/Plural";
import Total from "./Styled/Total";
import Bill from "./Styled/Bill";
import Change from "./Styled/Change";
import Arrival from "./Styled/Arrival";
import Row from "./Styled/Row";
import ListPurchases from "./Styled/ListPurchases";
import Service from "./Styled/Service";
import LargerStorage from "./Styled/LargerStorage";
import Purchases from "./Styled/Purchases";
import GameOption from "./Styled/GameOption";
import Option from "./Styled/Option";

const Summary = () => {
  return (
    <div>
      <Container>
        <Form>
          <StatusBar />
          <Factors>
            <Factor>
              <SectionSpacer>
                <Title>Finishing up</Title>
                <Explanation>
                  Double-check everything looks OK defroe confirming.
                </Explanation>
              </SectionSpacer>
              <Row>
                <ListPurchases>
                  <GameOption>
                    <Option>
                      <Arrival>Arcade(Monthly)</Arrival>
                      <Change>Change</Change>
                    </Option>
                    <Price font="700">$9/om</Price>
                  </GameOption>
                  <Purchases>
                    <Service>
                      <Bill>Online service</Bill>
                      <Price font="500">+$1/om</Price>
                    </Service>
                    <LargerStorage>
                      <Bill>Larger storage</Bill>
                      <Price font="500">+2$om/</Price>
                    </LargerStorage>
                  </Purchases>
                </ListPurchases>
                <Plural>
                  <Total>Total(per month)</Total>
                  <Price font="500">+$12/om</Price>
                </Plural>
              </Row>
            </Factor>
          </Factors>
        </Form>
      </Container>
    </div>
  );
};

export default Summary;
