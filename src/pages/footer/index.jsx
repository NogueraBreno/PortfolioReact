import { FooterDiv, ContactLink } from "./style";

export const Footer = () =>{

    return(
        <> 
            <footer className="content-box content-div">
                <FooterDiv>
                    <div>
                        <p>INFORMAÇÕES GERAIS DE CONTATO</p>
                    </div>
                </FooterDiv>
                <div>
                    <ContactLink class="links-contact" href="https://wa.me/556592702156" target="_blank">
                        <input type="image" src="https://cdn-icons-png.flaticon.com/512/739/739247.png" id="bt-social" alt="whatsapp-contact"/>	
                    </ContactLink>
                    <ContactLink class="links-contact" href="https://www.linkedin.com/in/breno-da-silva-nogueira-383063176/" target="_blank">
                        <input type="image" src="https://cdn-icons-png.flaticon.com/512/1384/1384088.png" id="bt-social" alt="linkedin-contact"/>	
                    </ContactLink>
                </div>
            </footer>
        </>
    )
}

export default Footer;