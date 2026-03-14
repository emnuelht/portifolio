import github from '/images/github.svg'
import linkedin from '/images/linkedin.svg'
import download from '/images/download.svg'

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
                    <img className='image--me' src="images/me.jpeg" alt="Foto de Wellington Torres" />
                </div>
                <h1 className="home--title">Wellington Torres</h1>
                <p className="home--subtitle">Desenvolvedor Back-End Java (Perfil Full Stack)</p>
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
                    <a className='link download' href="/portifolio/Wellington_Emanuel_Backend_Java.pdf" download>
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
                    Atuar como Desenvolvedor Java Back-End aplicando boas práticas de engenharia de
                    software, arquitetura de sistemas e desenvolvimento de APIs robustas, seguras e escaláveis.
                    Busco evolução contínua em performance, segurança e arquitetura, com foco em
                    crescimento profissional até o nível de Desenvolvedor Java Sênior.
                </p>
            </section>
        );
    }

    function ResumeProfessional() {
        return (
            <section className='main--resume-professional part'>
                <IconTitle title="Resumo Profissional" icon="briefcase" />
                <p className="resume-professional--text text">
                    Desenvolvedor de software com mais de 2 anos de experiência no desenvolvimento de
                    sistemas web e mobile, com foco em Java e ecossistema Spring para construção de APIs
                    robustas. Experiência no desenvolvimento de sistemas completos, incluindo
                    plataformas de gestão, marketplaces e aplicativos mobile com sincronização offline.
                    Atuação em todo o ciclo de desenvolvimento: modelagem de sistemas, desenvolvimento
                    de APIs REST, integração de serviços, gerenciamento de banco de dados e deploy em
                    ambientes Linux. Experiência complementar em Front-End moderno (React / TypeScript),
                    permitindo melhor integração entre camadas da aplicação.
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
                        <p className="item--title">Dev Back-End Java</p>
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
                            <span>Go</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Front-End</p>
                        <div className="item--items">
                            <span>React</span>
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Frameworks</p>
                        <div className="item--items">
                            <span>Spring Boot</span>
                            <span>Spring Security</span>
                            <span>Hibernate / JPA</span>
                            <span>React</span>
                            <span>React Native</span>
                            <span>Angular</span>
                            <span>Vue.js</span>
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
                        <p className="item--title">Infraestrutura / DevOps</p>
                        <div className="item--items">
                            <span>Linux</span>
                            <span>VPS</span>
                            <span>Apache</span>
                            <span>SSH</span>
                            <span>Deploy de aplicações</span>
                            <span>Certificados SSL</span>
                            <span>Backup automatizado</span>
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
                            <span>IntelliJ IDEA</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <p className="item--title">Metodologias</p>
                        <div className="item--items">
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
                                <p className="texts--title">Assistente de TI | Desenvolvedor Back-End</p>
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
                                <p>Desenvolvimento e manutenção de sistemas web/mobile.</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Desenvolvimento de novas funcionalidades e melhorias evolutivas em sistemas existentes</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Administração de servidores Linux em VPS</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Deploy de aplicações e configuração de Apache e SSL</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Monitoramento de banco de dados e rotinas de backup</p>
                            </div>
                            <div className="body--item">
                                <i className="fa-solid fa-caret-right"></i>
                                <p>Investigação e correção de bugs em produção</p>
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
                        <p className="item--date">2021 - 2025</p>
                    </div>
                </div>
            </section>
        );
    }

    function Projects() {
        return (
            <section className='main--projects part'>
                <IconTitle title="Projetos" icon="folder-open" />

                <div className="projects--list">
                    <div className="list--item">
                        <i className="fa-solid fa-mobile-screen-button item--icon"></i>
                        <p className="item--title">Sistema de Coleta e Gestão de Dados de Campo</p>
                        <p className="item--description">
                            Aplicativo mobile offline-first para coleta de dados em campo, com sincronização inteligente entre dispositivo e servidor.
                            O sistema conta com formulários dinâmicos gerados por JSON, gestão de famílias e moradores, controle de acesso baseado em papéis (RBAC),
                            dashboard com estatísticas e visualização de dados, autenticação com dois fatores (2FA) e sistema de auditoria com soft delete.
                        </p>
                        <div className="item--techs">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>Android</span>
                            <span>APIs REST</span>
                            <span>Linux</span>
                            <span>VPS</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-solid fa-lock"></i>
                            <span className='link--text'>Código privado</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-store item--icon"></i>
                        <p className="item--title">Plataforma de Marketplace para Restaurantes</p>
                        <p className="item--description">
                            Plataforma que permite restaurantes criarem suas próprias lojas online. Inclui sistema de autenticação com confirmação de email,
                            dashboard com métricas de vendas e pedidos, gestão de produtos, categorias e preços, sistema de pedidos com status e histórico,
                            carrinho de compras, checkout e registro de eventos e logs do sistema.
                        </p>
                        <div className="item--techs">
                            <span>Java</span>
                            <span>Spring Boot</span>
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>APIs REST</span>
                            <span>PostgreSQL</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-solid fa-lock"></i>
                            <span className='link--text'>Código privado</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-cash-register item--icon"></i>
                        <p className="item--title">Sistema de Gestão de Caixa para Restaurante (PDV)</p>
                        <p className="item--description">
                            Sistema completo de ponto de venda com gestão de mesas, pedidos e delivery. Controle de status de pedidos (aberto/fechado),
                            fechamento de caixa diário com relatórios financeiros, gestão de produtos com controle de estoque, custo e preço,
                            controle de despesas operacionais e sistema de backup para recuperação de dados.
                        </p>
                        <div className="item--techs">
                            <span>PHP</span>
                            <span>React</span>
                            <span>APIs REST</span>
                            <span>MySQL</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-solid fa-lock"></i>
                            <span className='link--text'>Código privado</span>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-brands fa-laravel item--icon"></i>
                        <p className="item--title">Sistema de Gestão Hierárquica (Laravel)</p>
                        <p className="item--description">
                            Sistema web para gerenciamento hierárquico de entidades organizacionais (Grupos → Bandeiras → Unidades → Colaboradores).
                            Possui autenticação segura, CRUD completo com componentes Livewire para interatividade em tempo real,
                            sistema de auditoria que registra todas as ações dos usuários, filtragem avançada de dados e exportação para Excel.
                        </p>
                        <div className="item--techs">
                            <span>PHP</span>
                            <span>Laravel</span>
                            <span>Livewire</span>
                            <span>MySQL</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/sistema-gestao">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-mobile-alt item--icon"></i>
                        <p className="item--title">ServicesHere - App React Native</p>
                        <p className="item--description">
                            Aplicativo de serviços que conecta pessoas que precisam de serviços com profissionais disponíveis na região.
                            O app inclui cadastro de usuários, publicação de serviços, área para profissionais, sistema de busca e muito mais.
                        </p>
                        <div className="item--techs">
                            <span>React Native</span>
                            <span>Expo</span>
                            <span>APIs REST</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/ServicesHere">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-code item--icon"></i>
                        <p className="item--title">CompareJson - Biblioteca Java</p>
                        <p className="item--description">
                            Biblioteca Java para comparação estrutural de JSON. Identifica automaticamente adições, modificações e remoções
                            em estruturas JSON com algoritmo recursivo. Publicada via JitPack.
                        </p>
                        <div className="item--techs">
                            <span>Java</span>
                            <span>Jackson</span>
                            <span>Gradle</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/compareJson">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-code item--icon"></i>
                        <p className="item--title">JsonToSQL - Gerador de SQL a partir de JSON</p>
                        <p className="item--description">
                            Ferramenta que converte estruturas JSON em comandos CREATE TABLE, com mapeamento automático de tipos JSON para SQL.
                        </p>
                        <div className="item--techs">
                            <span>Java</span>
                            <span>SQL</span>
                            <span>Gradle</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/json-to-sql">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-code item--icon"></i>
                        <p className="item--title">Gerador de Entities Java</p>
                        <p className="item--description">
                            Projeto experimental que identifica mudanças em estruturas JSON e gera automaticamente classes Java Entity
                            e scripts SQL de migração para banco de dados.
                        </p>
                        <div className="item--techs">
                            <span>Java</span>
                            <span>JSON</span>
                            <span>SQL</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/java-api-rest">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-folder-open item--icon"></i>
                        <p className="item--title">Site Estação Inova</p>
                        <p className="item--description">
                            Site completo desenvolvido como projeto final de um curso de programação, com informações sobre o projeto,
                            galeria de cursos e área de projetos dos alunos. Esse projeto me rendeu minha primeira oportunidade profissional.
                        </p>
                        <div className="item--techs">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/estacao-inova">Acessar</a>
                        </div>
                        <div className="item--link">
                            <i className="fa-solid fa-link"></i>
                            <span className='link--text'>Link do Site:</span>
                            <a className='link--url' href="https://emnuelht.github.io/estacao-inova/">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-graduation-cap item--icon"></i>
                        <p className="item--title">Site de Aula - Material Didático</p>
                        <p className="item--description">
                            Site interativo criado para ensinar programação web (HTML, CSS e JavaScript) para crianças de 11 a 14 anos,
                            com exemplos práticos e quiz interativo.
                        </p>
                        <div className="item--techs">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/aula-programacao-web">Acessar</a>
                        </div>
                        <div className="item--link">
                            <i className="fa-solid fa-link"></i>
                            <span className='link--text'>Link do Site:</span>
                            <a className='link--url' href="https://emnuelht.github.io/aula-programacao-web/">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-lock item--icon"></i>
                        <p className="item--title">Formulário de Login Responsivo</p>
                        <p className="item--description">
                            Projeto para praticar design responsivo com CSS, gradientes e media queries.
                        </p>
                        <div className="item--techs">
                            <span>HTML</span>
                            <span>CSS</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/form-login">Acessar</a>
                        </div>
                        <div className="item--link">
                            <i className="fa-solid fa-link"></i>
                            <span className='link--text'>Link do Site:</span>
                            <a className='link--url' href="https://emnuelht.github.io/form-login/">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-brands fa-react item--icon"></i>
                        <p className="item--title">Portfólio React TypeScript</p>
                        <p className="item--description">
                            Este próprio portfólio! Criado com React TypeScript e Vite, focando em design responsivo e performance.
                        </p>
                        <div className="item--techs">
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>Vite</span>
                        </div>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/portifolio">Acessar</a>
                        </div>
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
                        <p className="item--level">Leitura técnica</p>
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
                <p className='footer--title'>&copy; 2026 - Meu Portfólio</p>
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
            <Projects />
            <Languages />
            <PersonalHighlights />
            <Footer />
        </main>
    )
}

export default App
