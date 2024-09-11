import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { flexMixin } from "./styled/styled";

const StyleSection = styled.section`
  ${flexMixin(undefined, "center", "center", "20px", "wrap")}
  padding: 20px 40px;
`;

function App() {
  return (
    <>
      <Header />
      <StyleSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyleSection>
    </>
  );
}

export default App;
