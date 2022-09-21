import styled from "styled-components";
import { FOOTER } from "../../consts";

function Footer() {
  return <Wrap>{FOOTER}</Wrap>
}

export default Footer;

const Wrap = styled.footer`
  border: 1px solid blue;
  
  display: flex;
  justify-content: center;
  align-items: center;
`