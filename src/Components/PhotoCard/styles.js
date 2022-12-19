import styled from "styled-components";
import { fadeIn } from "../../styles/animations";

export const ImgWarpper = styled.div`
  border-radius: 10px;
  display: block;
  height: 0px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
  margin-top: 15px;
`;

export const Article = styled.article`
  min-height: 200px;
`;

export const Img = styled.img`
  ${fadeIn({ time: "2s" })}
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.5);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Button = styled.button`
  padding-top: 8px;
  display: flex;
  align-items: center;
  & svg {
    margin: 4px;
  }
`;
