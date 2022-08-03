import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import styled from 'styled-components';

export default function GoBackLink() {
  let location = useLocation();
  const page = useRef(location.state?.from);
  const backPage = page.current || '/';
  const backLinkHref = location.state ? location.state?.from : backPage;
  return (
    <>
      <LinkBack to={backLinkHref}>GO BACK LINK</LinkBack>
    </>
  );
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
