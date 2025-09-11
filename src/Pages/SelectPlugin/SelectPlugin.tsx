import StatusBar from "../../components/StatusBar/StatusBar";
import Container from "./Styled/Container";
import Form from "./Styled/Form";
import PluginForm from "./Styled/PluginForm";
import Plugin from "./Styled/Plugin";
import Options from "./Styled/Options";
import Title from "./Styled/Title";
import Explanation from "./Styled/Explanation";
import SectionSpacer from "./Styled/SectionSpacer";
import Price from "./Styled/Price";
import PluginTitle from "./Styled/PluginTitle";
import Checkbox from "./Styled/Checkbox";
import Bill from "./Styled/Bill";
import Description from "./Styled/Description";
import ItemBox from "./Styled/ItemBox";

const SelectPlugin = () => {
  return (
    <div>
      <Container>
        <Form>
          <StatusBar />
          <PluginForm>
            <Options>
              <SectionSpacer>
                <Title>Pick add-ons</Title>
                <Explanation>
                  Add-ons help enhance your gaming experience.
                </Explanation>
              </SectionSpacer>
              <SectionSpacer>
                <Plugin>
                  <ItemBox>
                    <Checkbox type="checkbox" />
                    <Description>
                      <PluginTitle>Online service</PluginTitle>
                      <Bill>Access to multiplayer games</Bill>
                    </Description>
                  </ItemBox>
                  <Price>+$1/mo</Price>
                </Plugin>
                <Plugin>
                  <ItemBox>
                    <Checkbox type="checkbox" />
                    <Description>
                      <PluginTitle>Larger storage</PluginTitle>
                      <Bill>Extra 1TB of cloud save</Bill>
                    </Description>
                  </ItemBox>
                  <Price>+$2/mo</Price>
                </Plugin>
                <Plugin>
                  <ItemBox>
                    <Checkbox type="checkbox" />
                    <Description>
                      <PluginTitle>Customizable ProFile</PluginTitle>
                      <Bill>Custom theme on your profile</Bill>
                    </Description>
                  </ItemBox>
                  <Price>+$2/mo</Price>
                </Plugin>
              </SectionSpacer>
            </Options>
          </PluginForm>
        </Form>
      </Container>
    </div>
  );
};

export default SelectPlugin;
