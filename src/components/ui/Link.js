import styled from "@emotion/styled";

const Link = styled.a`
  font-weight: 700;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  color: #f1f1f1;
  &::after {
    content: "";
    background-color: #db9af6;
    position: absolute;
    left: 12px;
    bottom: -6px;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    z-index: -1;
    transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
  }
  &:hover:after {
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 100%;
  }
`;

export default Link;