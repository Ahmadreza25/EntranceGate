import TitleInfo from "./Styled/TitleInfo";
import Explanation from "./Styled/Explanation";
import Title from "./Styled/Title";
import InputField from "./Styled/InputField";
import SectionSpacer from "./Styled/SectionSpacer";
import Spacer from "./Styled/Spacer";
import usePerconalInfo from "../../store";

const PersonalInfo = () => {
  const { name, email, userName, setName, setEmail, setUserName } =
    usePerconalInfo();
  return (
    <>
      <SectionSpacer>
        <Title>Personal info</Title>
        <Explanation>
          Please provide your name , email address , and phone number.
        </Explanation>
      </SectionSpacer>
      <SectionSpacer>
        <Spacer>
          <TitleInfo>Name</TitleInfo>
          <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Spacer>
        <Spacer>
          <TitleInfo>Email Address</TitleInfo>
          <InputField
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Spacer>
        <Spacer>
          <TitleInfo>Phone Numder</TitleInfo>
          <InputField
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Spacer>
      </SectionSpacer>
    </>
  );
};

export default PersonalInfo;
