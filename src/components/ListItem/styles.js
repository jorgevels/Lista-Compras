import styled from "styled-components";
import { above, colors } from "@styles/GlobalStyle";

const List = styled.select`
  width: 100%;
  height: 28px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;
const Input = styled.input`
  padding: 2px;
  text-align: left;
  align-content: center;
  line-height: 2.3;
  background: #8e3ae0;
  color: white;
  ${"" /* border: 0px solid transparent; */}
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;

const InputCheckBox = styled.input`
  width: 100%;
  height: 28px;
  margin-top: 10px;
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
`;

const Button = styled.button`
  display: flex;
  height: 25px;
  background: transparent;
  color: white;
  cursor: pointer;
  border: none;

  margin-top: 7px;

  justify-content: center;
  text-align: center;
`;

export { List, InputCheckBox, Input, Button };
