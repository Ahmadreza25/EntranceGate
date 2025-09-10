import StatusBar from "../../components/StatusBar/StatusBar";
import Container from "./Styled/Container";
import Form from "./Styled/Form";
import TitleInfo from "./Styled/TitleInfo";
import FormInfo from "./Styled/FormInfo";
import Explanation from "./Styled/Explanation";
import InfoBox from "./Styled/InfoBox";
import Title from "./Styled/Title";
import InputField from "./Styled/InputField";
import SectionSpacer from "./Styled/SectionSpacer";
import Spacer from "./Styled/Spacer";
const PersonalInfo = () => {
  return (
    <div>
      <Container>
        <Form>
          <StatusBar />
          <FormInfo>
            <InfoBox>
              <SectionSpacer>
                <Title>Personal info</Title>
                <Explanation>
                  Please provide your name , email address , and phone number.
                </Explanation>
              </SectionSpacer>
              <SectionSpacer>
                <Spacer>
                  <TitleInfo>Name</TitleInfo>
                  <InputField type="text" />
                </Spacer>
                <Spacer>
                  <TitleInfo>Email Address</TitleInfo>
                  <InputField type="text" />
                </Spacer>
                <Spacer>
                  <TitleInfo>Phone Numder</TitleInfo>
                  <InputField type="text" />{" "}
                </Spacer>
              </SectionSpacer>
            </InfoBox>
          </FormInfo>
        </Form>
      </Container>
    </div>
  );
};

export default PersonalInfo;
