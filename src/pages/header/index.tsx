import { AbaTopo, HeaderButton, NavHeader, PortifolioHeader } from "./style";

export const Header = () =>{

    return(
        <> 
            <AbaTopo>
                <PortifolioHeader>PORTFÓLIO</PortifolioHeader>
                <NavHeader role="navigation">
                    <HeaderButton className="btn btn-outline-light btn-md"> INICIO </HeaderButton>
                    <HeaderButton className="btn btn-outline-light btn-md"> SOBRE </HeaderButton>
                    <HeaderButton className="btn btn-outline-light btn-md"> PROJETOS </HeaderButton>
                    <HeaderButton className="btn btn-outline-light btn-md"> CONTATOS </HeaderButton>
                </NavHeader>  
            </AbaTopo>
        </>
    )
}

export default Header;