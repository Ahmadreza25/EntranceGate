import TitleInfo from "./Styled/TitleInfo";
import Explanation from "./Styled/Explanation";
import Title from "./Styled/Title";
import InputField from "./Styled/InputField";
import SectionSpacer from "./Styled/SectionSpacer";
import Spacer from "./Styled/Spacer";
import usePersonalInfo from "../../store";

const PersonalInfo = ({ warning }: { warning: boolean }) => {
  const { name, email, userName, setName, setEmail, setUserName } = usePersonalInfo()

  const nameError = warning && name === "";
  const emailError = warning && email === "";
  const userNameError = warning && userName === "";
  
  
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
          <TitleInfo colorError={nameError}>Name</TitleInfo>
          <InputField
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            hasError={nameError}
          />
        </Spacer>
        <Spacer>
          <TitleInfo colorError={emailError}>Email Address</TitleInfo>
          <InputField
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            hasError={emailError}
          />
        </Spacer>
        <Spacer>
          <TitleInfo colorError = {userNameError}>Phone Number</TitleInfo>
          <InputField
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            hasError = {userNameError}
          />
        </Spacer>
      </SectionSpacer>
    </>
  );
};

export default PersonalInfo;
