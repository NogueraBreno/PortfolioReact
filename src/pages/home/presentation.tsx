import { CarouselItem, PresentationContent, PresentationText, SkillCarousel } from "./style";

export const Presentation = () => {
    return(
        <>
            <section className="hidden-objects content-box content-div" >
                <PresentationContent className="row">
                    <div className="col-5">
                        <PresentationText className="lh-1">
                        Neste Portfólio apresento mais sobre mim,<br/>Breno da Silva Nogueira.<br/><br/>
                        Busco mostrar com transparencia minhas habilidades atuais em desenvolvimento seja back ou front-end,
                        também demonstrar capacidade de organização e clareza com um template simples, moderno e com fácil leitura.<br/>
                        Tento através desse portfólio mostrar brevemente sobre minha história profissional e um pouco sobre minha vida estudantil.
                        </PresentationText>
                    </div>
                    <div className="col-3">
                        <h3>
                            SKILLS
                        </h3>
                        <SkillCarousel id="skillsCarousel" className="carousel slide slides-shadow slide-shadow-p" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <CarouselItem className="carousel-item active">
                                <img src={process.env.PUBLIC_URL + '/js.png'} className="d-block w-50 p-3" alt="JavaScript" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/html5.png'} className="d-block w-50 p-3" alt="HTML5" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/css3.png'} className="d-block w-50 p-3" alt="CSS3" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/sql.png'} className="d-block w-50 p-3" alt="SQL" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/plsql.png'} className="d-block w-50 p-3" alt="PL/SQL" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/csharp.png'} className="d-block w-50 p-3" alt="C#" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/python.png'} className="d-block w-50 p-3" alt="Python" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/ruby.png'} className="d-block w-50 p-3" alt="Ruby" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/ruby.png'} className="d-block w-50 p-3" alt="Ruby on Rails" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/js.png'} className="d-block w-50 p-3" alt="React" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                                <CarouselItem className="carousel-item">
                                <img src={process.env.PUBLIC_URL + '/js.png'} className="d-block w-50 p-3" alt="TypeScript" />
				                <img src="#" className="d-block w-50" alt="Proeficiencia"/>
                                </CarouselItem>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#skillsCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#skillsCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Próximo</span>
                            </button>
                        </SkillCarousel>
                    </div>
                </PresentationContent>
            </section>
        </>
    )
};

export default Presentation;