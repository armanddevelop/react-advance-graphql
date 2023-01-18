import styled from "styled-components";

export const Form = styled.form`
  padding: 16px;
`;

export const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 8px;
  padding: 8px 4px;
  display: block;
  width: 100%;
`;

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  text-align: center;
  &:disabled {
    background: #ddb9fa;
  }
`;
export const Header = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: 500px;
  padding: 8px 0px;
`;

export const DivAnchor = styled.div`
  text-align: center;
  margin: 10px;
  color: #8d00ff;
`;
export const DivError = styled.div`
  text-align: center;
`;
