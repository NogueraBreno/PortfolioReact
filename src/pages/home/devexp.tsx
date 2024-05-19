import { CardExpContent, DadosExp, InnerCardExp, TitleExperience, ProgressBarExp } from "./style";

export const DevExp = () => {
    return(
        <>
            <section className="hidden-objects content-box content-div">
                <TitleExperience>
                    Expêriencias com Desenvolvimento
                </TitleExperience>
                <div>
                    <CardExpContent className="card row mb-3 ">
                        <InnerCardExp className="col inner">
                            <div className="row g-0">
                                <img src="https://yt3.googleusercontent.com/JQcIOvArrpTjzEwoylq6gHJoD0VKbnKoBAUioIjcDR0Hrzv_CvSvTYCJgGkBDJa5ONXLoIA1=s900-c-k-c0x00ffffff-no-rj" 
                                className="img-fluid rounded-start" alt="Estado de Mato Grosso"/>
                            </div>
                            <DadosExp className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">SEPLAG - SECRETARIA DE ESTADO DE PLANEJAMENTO E GESTÃO</h5>
                                    <p className="card-text">CARGO : DESENVOLVEDOR WEB E BANCO DE DADOS </p>
                                    <p className="card-text">PERÍODO : 17/02/2021 - 16/02/2023 </p>
                                    <p className="card-text">TECNOLOGIAS UTILIZADAS : <br/> SQL - PL/SQL - JS - HTML - CSS </p>
                                    <div className="progress">
                                        <ProgressBarExp className="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</ProgressBarExp>
                                    </div>
                                </div>
                            </DadosExp>
                        </InnerCardExp>
                        <InnerCardExp className="col inner">
                            <div className="row g-0">
                                <img src="#" 
                                className="img-fluid rounded-start" alt="Estado de Mato Grosso"/>
                            </div>
                            <DadosExp className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">WEBTECH  - SERVIÇOS E TECNOLOGIA DA INFORMAÇÃO</h5>
                                    <p className="card-text">CARGO : DESENVOLVEDOR FULLSTACK </p>
                                    <p className="card-text">PERÍODO : 06/03/2023 - 05/01/2024 </p>
                                    <p className="card-text">TECNOLOGIAS UTILIZADAS :  <br/> RUBY - RUBY ON RAILS - SQL - JS - JQUERY - HTML - CSS - GIT </p>
                                    <div className="progress">
                                        <ProgressBarExp className="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" percentage="100"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</ProgressBarExp>
                                    </div>
                                </div>
                            </DadosExp>
                        </InnerCardExp>
                        <InnerCardExp className="col inner">
                            <div className="row g-0">
                                <img src="#" 
                                className="img-fluid rounded-start" alt="Estado de Mato Grosso"/>
                            </div>
                            <DadosExp className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">SEPLAG - SECRETARIA DE ESTADO DE PLANEJAMENTO E GESTÃO</h5>
                                    <p className="card-text">CARGO : ANALISTA DE TI </p>
                                    <p className="card-text">PERÍODO : 08/01/2024 - ? </p>
                                    <p className="card-text">TECNOLOGIAS UTILIZADAS :  <br/>  </p>
                                    <div className="progress">
                                        <ProgressBarExp className="progress-bar progress-bar-striped" role="progressbar" aria-label="Default striped example" percentage="01" aria-valuenow="01" aria-valuemin="0" aria-valuemax="100">01%</ProgressBarExp>
                                    </div>
                                </div>
                            </DadosExp>
                        </InnerCardExp>
                    </CardExpContent>
                </div>
            </section>
        </>
    )
}

export default DevExp;