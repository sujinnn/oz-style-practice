import styled from "styled-components";
import { flexMixin, FontMixin } from "../styled/styled";

const StyleHeader = styled.header`
  ${flexMixin({ justify: "space-between", align: "center" })}
  padding: 20px 20px;
  background-color: black;
  ul {
    ${flexMixin(undefined, "center", "center", "20px", undefined)}
    li {
      ${FontMixin("13px", "400")}
      list-style: none;
    }
  }
`;

export default function Header() {
  return (
    <StyleHeader className="header-container">
      <h1>OZ코딩스쿨</h1>
      <ul className="menu-container">
        <li>로그인</li>
        <li>회원가입</li>
        <li>내클래스</li>
      </ul>
    </StyleHeader>
  );
}
