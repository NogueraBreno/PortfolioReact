import styled from 'styled-components';


export const PresentationContent = styled.div`
    padding: 15px;
    place-items: center;
    justify-content: space-around;
    text-align: center;
`;

export const PresentationText = styled.p`
    font-size: 1.5em;
    text-size-adjust: auto;
    margin : 5px;
    text-align: center;
    font-family: Impact;
    color: rgb(0, 0, 0);
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: rgb(255, 255, 255,0.7);
`

export const SkillCarousel = styled.div`
`

export const CarouselItem = styled.div`
`

//Conteúdo de Experiencia Profissional

export const TitleExperience = styled.h3`
    font-family: Impact ;
    -webkit-text-stroke-width: 0.1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
    text-align-last: center;
`

export const CardExpContent = styled.div`
    max-width: 100%;
    padding: 0% 1%;
    display: flex !important;
    flex-direction: row !important;
    margin-top: 0 !important;
`

export const InnerCardExp = styled.div`
    border-radius: 5px;
    margin: 5px;
    background-color: rgb(255,255,255);
`

export const LogoExp = styled.div`
    align-self: center;
    padding: 5%;
`

export const DadosExp = styled.div`

`

export const ProgressBarExp = styled.div`
    width: ${variant => variant.percentage}%;
`