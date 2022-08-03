import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Item = styled.li`
      width:calc((100% - 45px) / 4);
    background-color: #f1f1f1;
`
export const ItemImg = styled.img`
  width:100%;
   display:block;
`
export const StyledLink=styled(NavLink)`
    text-decoration:none;
    color:black;
    
`