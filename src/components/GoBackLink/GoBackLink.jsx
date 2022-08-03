import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
export default function GoBackLink() {
      const location = useLocation();
    return <>
        <LinkBack to={location.state?.from ?? '/'}>GO BACK LINK</LinkBack>
    </>
    
}
const LinkBack = styled(Link)`
  position: absolute;
  color: blue;
  text-decoration: none;
  &:hover {
    transform: scale(1.3);
    font-weight: bold;
  }
`;