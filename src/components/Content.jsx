import styled from "styled-components";
import { flexMixin, FontMixin } from "../styled/styled";

const StyleContent = styled.div`
  ${flexMixin("column", undefined, "flex-start", "5px")}
  img {
    width: 300px;
    border-radius: 10px;
    margin-bottom: 3px;
    min-height: 225px;
  }
  span {
    ${FontMixin("12px", undefined)}
    color: ${tag - color};
    border: 1px solid ${tag - color};
    padding: 4px 5px;
    border-radius: 3px;
  }
  div {
    ${FontMixin("18px", 600)}
  }
  p {
    ${FontMixin("12px")}
    color: ${gray};
  }
`;

export default function Content({ content }) {
  return (
    <StyleContent className="content-container">
      <img src={content.img} alt={content.title} />
      <span>모집중</span>
      <div>{content.title}</div>
      <p>{content.subtitle}</p>
    </StyleContent>
  );
}
