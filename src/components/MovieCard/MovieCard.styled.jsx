import styled from "styled-components";
import{Link} from 'react-router-dom'

export const LinkBack = styled(Link)`
    position:absolute;
    color:blue;
    text-decoration:none;
    &:hover{
        transform: scale(1.3);
        font-weight:bold;
    }
`
export const Card = styled.div`
    display:flex;
    width:100%;

`
export const WrapImg= styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    padding:25px;
    background-color: #f1f1f1;
    width:35%;

`
export const Poster= styled.img`
    width: 100%;
    height:auto;
    display:block;
    object-fit:cover;

`
export const WrapDescription = styled.div`
width:65%;
 text-align:start;
  padding: 0 50px;
  background-color:grey;
  color:white;

`
export const Title =styled.h2`
    margin-bottom:20px;
`
export const SubTitle =styled.h3`
    margin-bottom:5px;
`
export const Text=styled.p`
    margin-bottom:10px;
`