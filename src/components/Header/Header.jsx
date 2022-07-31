import { SiteHeader ,NavlinkStyled} from "./Header.styled"
export default function Header() {
        return (
          <SiteHeader>
          <NavlinkStyled to="/">home</NavlinkStyled>
          <NavlinkStyled to="/movies">movies</NavlinkStyled>
     
     
      </SiteHeader>)
}