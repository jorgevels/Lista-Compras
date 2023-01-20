import styled from "styled-components";
import { above, colors } from "@styles/GlobalStyle";

const Select = styled.select`
  width: 100%;
  height: 28px;
  ${"" /*  margin-bottom: 15px; */}
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  text-align: center;
  ${"" /* z-index: 100000; */}
  z-index:100;
  ${above.small`
  font-size:10px;
  
  `}
  ${above.mediu`
  font-size:10px;
  
  `}
  ${above.mediumL`
  font-size:13px;
  
  `}
`;

const Input = styled.input`
  width: 100%;
  height: 28px;
  ${"" /*  margin-bottom: 15px; */}
  padding-left: 10px;
  border: 1px solid #ebebeb;
  border-radius: 4px;
  ${"" /* z-index: 100000; */}
  z-index:100;

  ${above.small`
  font-size:13px;
  
  `}
  ${above.mediu`
  font-size:13px;
  
  `}
  ${above.mediumL`
  font-size:13px;
  color:#FF2D55;
  `}
`;

const Container = styled.form`
  display: grid;
  grid-template-columns:
    1fr minmax(160px, 1fr) minmax(40px, 1fr)
    minmax(10px, 1fr) minmax(10px, 1fr);
  font-weight: 700;
  align-content: center;
  padding: 0;
  width: 100%;
  height: 20px;
  margin-top: 55px;
  line-height: 27px;
  position: fixed;
  ${"" /* z-index: 100000; */}
  z-index:100;
  ${above.small`
  font-size:10px;
  
  `}
  ${above.mediu`
  font-size:13px;
  
  `}
  ${above.mediumL`
  font-size:18px;
  
  `}
`;

const Button_list = styled.div`
  &:active {
    transform: scale(0.9);
  }
`;

const Containers = styled.div`
  display: grid;
  grid-template-columns:
    1fr minmax(160px, 1fr) minmax(40px, 1fr)
    minmax(10px, 1fr) minmax(10px, 1fr);
  font-weight: 700;
  color: black;
  align-content: center;
  padding: 0;
  width: 100%;
  height: 20px;
  margin-top: 86px;
  position: fixed;
  ${"" /* z-index: 100000; */}
  z-index:100;
`;

const Button = styled.button`
  height: 25px;
  background: transparent;
  color: white;
  cursor: pointer;
  border: none;
  margin-top: -2px;
  justify-content: center;
  text-align: center;
  &:active {
    transform: scale(0.9);
  }
`;

/* form .table-artiulos {
  top: 20px;
  
} */

export { Select, Input, Container, Containers, Button, Button_list };
