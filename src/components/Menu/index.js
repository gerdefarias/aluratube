import styled from "styled-components";
import Search from "./components/Search"
import DarkModeSwitch from "./components/DarkModeSwitch"
import Image from "next/image";

import logo from "../../img/logo_.png"

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"};
    }
  }
`;

export default function Menu(props) {
  return (
    <StyledMenu>
      <div className="logo">
        <Image src={logo} alt="logo" quality={100} />
        <span><strong>GrdTube</strong></span>
      </div>
        <Search valorDoFiltro={props.valorDoFiltro} setvalorDoFiltro={props.setvalorDoFiltro}/>
        <DarkModeSwitch />
    </StyledMenu>
  );
}
