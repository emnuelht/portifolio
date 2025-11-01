import github from '/public/images/github.svg'
import linkedin from '/public/images/linkedin.svg'
import download from '/public/images/download.svg'

function App() {

    function IconTitle({ title, icon }: { title: string, icon: string }) {
        return (
            <div className="part--title">
                <i className={`fa-solid fa-${icon} title--icon`}></i>
                <h2 className="title--text">{title}</h2>
                <div className="title--underline"></div>
            </div>
        );
    }

    function Home() {
        return (
            <section className="main--home part">
                <div className="home--image">
                    {/* <img src="" alt="" /> */}
                </div>
                <h1 className="home--title">Wellington Torres</h1>
                <p className="home--subtitle">Desenvolvedor Full Stack</p>
                <div className="home--contacts">
                    <a href="mailto:wellington@example.com">
                        <i className="fa-solid fa-envelope"></i>
                        <span>wellingtonemanuel510@gmail.com</span>
                    </a>
                    <a href="tel:+5598985972447">
                        <i className="fa-solid fa-phone"></i>
                        <span>(98) 98597-2447</span>
                    </a>
                    <p className="contacts--item">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Arari, MA - Brasil</span>
                    </p>
                </div>
                <div className="home--social">
                    <a className='link' href="https://github.com/emnuelht">
                        <img src={github} alt="" />
                        <span>GitHub</span>
                    </a>
                    <a className='link' href="https://www.linkedin.com/in/wellington-torres-1775b2367/">
                        <img src={linkedin} alt="" />
                        <span>LinkedIn</span>
                    </a>
                    <a className='link download' href="/portifolio/Curriculo.pdf" download>
                        <img src={download} alt="" />
                        <span>Baixar PDF</span>
                    </a>
                </div>
            </section>
        );
    }

    function Objective() {
        return (
            <section className='main--objective part'>
                <IconTitle title="Objetivo" icon="bullseye" />
                <p className="objective--text text">
                    Atuar como Desenvolvedor Full Stack, ampliando conhecimentos em Back-End e Front-End. Busco experiência sólida em múltiplas stacks e boas práticas de desenvolvimento, com objetivo de me tornar desenvolvedor sênior. Sou dedicado, autodidata, proativo e comprometido em entregar soluções completas e eficientes.
                </p>
            </section>
        );
    }

    function ResumeProfessional() {
        return (
            <section className='main--resume-professional part'>
                <IconTitle title="Resumo Profissional" icon="briefcase" />
                <p className="resume-professional--text text">
                    Profissional de TI com experiência em desenvolvimento, manutenção e suporte técnico. Atuação em projetos web e mobile, com práticas de versionamento de código, integração de APIs e administração de servidores Linux. Perfil versátil e colaborativo, com foco em aprendizado contínuo, resolução de problemas e evolução técnica em Back-End e Front-End.
                </p>
                <div className="resume-professional--details">
                    <div className="details--item">
                        <p className="item--title">2+</p>
                        <p className="item--subtitle">Anos de Experiência</p>
                    </div>
                    <div className="details--item">
                        <p className="item--title">15+</p>
                        <p className="item--subtitle">Tecnologias</p>
                    </div>
                    <div className="details--item">
                        <p className="item--title">FullStack</p>
                        <p className="item--subtitle">Perfil de Desenvolvimento</p>
                    </div>
                </div>
            </section>
        );
    }

    function HabilitatesTechnologies() {
        return (
            <section className='main--habilitates-technologies part'>
                <IconTitle title="Habilidades Técnicas" icon="cogs" />
                <div className="habilitates-technologies--list">
                    <div className="list--item">
                        <p className="item--title">Linguagens</p>
                        <div className="item--items">
                            <span>Java</span>
                            <span>JavaScript</span>
                            <span>TypeScript</span>
                            <span>PHP</span>
                            <span>Python</span>
                            <span>C</span>
                            <span>C#</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Frameworks</p>
                        <div className="item--items">
                            <span>Spring Boot</span>
                            <span>React.js</span>
                            <span>React Native</span>
                            <span>Angular</span>
                            <span>Vue.js</span>
                            <span>jQuery</span>
                            <span>Node.js</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Banco de Dados</p>
                        <div className="item--items">
                            <span>PostgreSQL</span>
                            <span>MySQL</span>
                            <span>MongoDB</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">DevOps & Infraestrutura</p>
                        <div className="item--items">
                            <span>Linux</span>
                            <span>Apache</span>
                            <span>SSH</span>
                            <span>Deploy Manual</span>
                            <span>VPS</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Ferramentas</p>
                        <div className="item--items">
                            <span>Git</span>
                            <span>GitHub</span>
                            <span>Postman</span>
                            <span>Insomnia</span>
                            <span>Figma</span>
                            <span>VS Code</span>
                            <span>IntelliJ</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Arquiteturas & Padrões</p>
                        <div className="item--items">
                            <span>MVC</span>
                            <span>APIs RESTful</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Metodologias</p>
                        <div className="item--items">
                            <span>Scrum</span>
                            <span>Kanban</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    function SoftSkills() {
        return (
            <section className='main--soft-skills part'>
                <IconTitle title="Habilidades Interpessoais" icon="handshake" />
                <div className="soft-skills--list">
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Proatividade e dedicação</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Adaptação rápida</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Organização e responsabilidade</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Comunicação clara</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Facilidade em aprender</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Resolução de problemas</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Curiosidade tecnológica</span>
                    </span>
                    <span className='list--item'>
                        <div className="item--bol"></div>
                        <span>Trabalho em equipe</span>
                    </span>
                </div>
            </section>
        );
    }

    function HabilitatesProfessional() {
        return (
            <section className='main--habilitates-professional part'>
                <IconTitle title="Habilidades Profissionais" icon="briefcase" />

                <div className="habilitates-professional--list">
                    <div className="list--item">
                        <header className="item--header">
                            <div className="header--icon">
                                <i className="fa-solid fa-briefcase"></i>
                            </div>

                            <div className="header--texts">
                                <p className="texts--title">Assistente de TI</p>
                                <p className="texts--subtitle">Estação Conhecimento de Arari</p>
                                <div className="texts--dates">
                                    <i className="fa-solid fa-calendar"></i>
                                    <span>Junho de 2023 - Atual</span>
                                </div>
                            </div>
                        </header>
                        <div className="item--body">
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Desenvolvimento e manutenção de sistemas web utilizando Java, React.js e PHP</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Administração de servidor VPS Linux, incluindo configuração do Apache, deploy de aplicações e gerenciamento de certificados SSL</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Monitoramento e envio de backups automáticos do banco de dados MySQL</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Integração e atualização de dados locais para o ambiente VPS, garantindo segurança e consistência</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Suporte técnico e manutenção de rotinas de infraestrutura interna</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    function Formation() {
        return (
            <section className='main--formation part'>
                <IconTitle title="Formação Acadêmica" icon="graduation-cap" />

                <div className="formation--list">
                    <div className="list--item">
                        <p className="item--title">Engenharia de Software</p>
                        <p className="item--subtitle">Estácio</p>
                        <p className="item--date">2020 - 2023</p>
                    </div>
                </div>
            </section>
        );
    }

    function Languages() {
        return (
            <section className='main--languages part'>
                <IconTitle title="Idiomas" icon="language" />

                <div className="languages--list">
                    <div className="list--item">
                        <p className="item--language">Português</p>
                        <p className="item--level">Nativo</p>
                        <div className="item--percent">
                            <div className="percent--part filled"></div>
                            <div className="percent--part filled"></div>
                            <div className="percent--part filled"></div>
                            <div className="percent--part filled"></div>
                            <div className="percent--part filled"></div>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--language">Inglês</p>
                        <p className="item--level">Básico</p>
                        <div className="item--percent">
                            <div className="percent--part filled"></div>
                            <div className="percent--part filled"></div>
                            <div className="percent--part"></div>
                            <div className="percent--part"></div>
                            <div className="percent--part"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    function PersonalHighlights() {
        return (
            <section className='main--personal-highlights part'>
                <IconTitle title="Destaques Pessoais" icon="star" />
                <div className="personal-highlights--list">
                    <div className="list--item">
                        <i className="fa-solid fa-bullseye"></i>
                        <p className="item--title">Autodidata</p>
                        <p className="item--description">Sempre buscando evoluir em novas tecnologias através de aprendizado contínuo</p>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-code"></i>
                        <p className="item--title">Full Stack Developer</p>
                        <p className="item--description">Experiência tanto em Back-End quanto em Front-End com múltiplas tecnologias</p>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-users"></i>
                        <p className="item--title">Colaborativo</p>
                        <p className="item--description">Boa comunicação, trabalho em equipe e foco em soluções colaborativas</p>
                    </div>
                </div>
            </section>
        );
    }

    function Footer() {
        return (
            <footer className="main--footer part">
                <p className='footer--title'>&copy; 2023 - Meu Portfólio</p>
                <p className='footer--text'>Desenvolvido com React e TypeScript</p>
            </footer>
        );
    }

    return (
        <main className="main">
            <Home />
            <Objective />
            <ResumeProfessional />
            <HabilitatesTechnologies />
            <SoftSkills />
            <HabilitatesProfessional />
            <Formation />
            <Languages />
            <PersonalHighlights />
            <Footer />
        </main>
    )
}

export default App
