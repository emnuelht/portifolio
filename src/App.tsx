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
                        <i className="fa-solid fa-lock item--icon"></i>
                        <p className="item--title">Formulário de Login Responsivo</p>
                        <p className="item--description">
                            Um dos meus primeiros projetos para testar minhas habilidades com design e responsividade. Nada muito complexo, mas foi uma boa forma de praticar CSS, gradientes e media queries. Na época estava aprendendo a fazer layouts que funcionassem bem em diferentes telas.
                        </p>
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
                        <i className="fa-solid fa-mobile-alt item--icon"></i>
                        <p className="item--title">ServicesHere - App React Native</p>
                        <p className="item--description">
                            Este foi um projeto que fiz durante a faculdade para uma atividade. Eu mesmo escolhi o tema, observei uma necessidade na minha cidade e criei um aplicativo de serviços. A ideia era conectar pessoas que precisam de serviços com profissionais disponíveis na região. O app tinha cadastro de usuários, publicação de serviços, área para profissionais, sistema de busca e muito mais. Mesmo sendo um conceito comum hoje. Infelizmente não funciona mais porque o servidor expirou e acabei não dando continuidade, mas o projeto me rendeu nota máxima e muito aprendizado em React Native, Expo, APIs e backend.
                        </p>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/ServicesHere">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-code item--icon"></i>
                        <p className="item--title">Gerador de Entities Java</p>
                        <p className="item--description">
                            Este foi um projeto experimental onde tentei criar um sistema que identificasse mudanças em estruturas JSON e gerasse automaticamente arquivos Java (entities) para tabelas de banco de dados. Na época eu não sabia que já existiam ferramentas que faziam isso, mas foi uma experiência valiosa! O sistema comparava JSONs, identificava diferenças e gerava tanto as classes Entity quanto scripts SQL de migração. Aprendi muito sobre manipulação de JSON, geração de código dinâmico e estruturas de dados. Mesmo não tendo finalizado completamente, me deu uma base sólida que usei em outros projetos.
                        </p>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/java-api-rest">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-folder-open item--icon"></i>
                        <p className="item--title">Site Estação Inova - O Projeto que Mudou Minha Vida</p>
                        <p className="item--description">
                            Este é um dos projetos mais especiais da minha trajetória, porque foi através dele que consegui minha primeira oportunidade profissional. Em 2020/2021, quando ainda estava aprendendo programação de forma autodidata através do YouTube e cursos gratuitos (muito obrigado, Gustavo Guanabara!), apareceu uma oportunidade única: um curso gratuito de programação na minha cidade chamado Estação Inova.
                            <br />
                            Como eu via o curso como algo nunca visto, pois era algo grande e gratuito, eu nem imaginava que seria selecionado. Mas consegui! Durante 6 meses, tive acesso à plataforma Alura e pude estudar JavaScript, design, e muito mais. Vi muitos colegas desistirem no meio do caminho, mas eu me mantive firme porque sabia que era uma oportunidade única.
                            <br />
                            No final do curso, o desafio foi criar um site para o próprio Estação Inova. Mesmo sem saber por onde começar, fui pesquisando, testando e montando. Fui o único aluno a desenvolver completamente o código do site (com ajuda apenas nos textos, porque realmente não sou muito bom escrevendo kkk). O resultado foi um site completo com informações sobre o projeto, galeria de cursos, área de projetos dos alunos.
                            <br />
                            Quando apresentei o site no final do curso, acabei ganhando uma bolsa de trabalho - onde trabalho até hoje! O link do projeto está logo abaixo, fique a vontade para ver meu projeto.
                        </p>
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
                        <i className="fa-solid fa-code item--icon"></i>
                        <p className="item--title">CompareJson - Minha Primeira Biblioteca Java</p>
                        <p className="item--description">
                            Este projeto foi especial porque foi através dele que aprendi a criar e publicar uma biblioteca Java própria! A ideia surgiu da necessidade de comparar mudanças estruturais entre arquivos JSON que representavam tabelas de banco de dados.
                            <br />
                            O CompareJson identifica automaticamente três tipos de alterações: adições (✅), modificações (🔄) e remoções (❌) em estruturas JSON. Ele funciona com um formato específico onde tabelas usam `__tbXX` e colunas usam `__cnXX` como identificadores únicos. O resultado é um Map com chaves descritivas que mostram exatamente onde cada mudança aconteceu.
                            <br />
                            Foi bem legal implementar a lógica de comparação recursiva e entender como publicar no JitPack, mas o resultado foi uma ferramenta que outras pessoas podem usar adicionando apenas uma linha no Gradle! Aprendi muito sobre Jackson para parsing de JSON, recursão e como estruturar uma biblioteca profissional.
                        </p>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/compareJson">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-code item--icon"></i>
                        <p className="item--title">JsonToSQL - Expandindo a Ideia</p>
                        <p className="item--description">
                            Depois de criar o CompareJson, quis complementar o projeto criando algo que gerasse tabelas SQL dinamicamente a partir de JSON. Reutilizei o mesmo formato de estrutura do CompareJson (tabelas com `__tbXX` e colunas com `__cnXX`) para criar uma ferramenta que converte JSON em comandos CREATE TABLE.
                            <br />
                            O usuário fornece um JSON seguindo o padrão e o programa retorna SQL pronto para execução. Foi interessante trabalhar com geração dinâmica de código e pensar em como mapear tipos JSON para tipos SQL de forma inteligente.
                        </p>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/json-to-sql">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-solid fa-graduation-cap item--icon"></i>
                        <p className="item--title">Site de Aula - Minha Experiência Como Professor</p>
                        <p className="item--description">
                            Uma das experiências marcantes da minha jornada foi quando tive a oportunidade de ensinar programação para crianças de 11 a 14 anos. Para tornar o aprendizado mais interessante e interativo, criei um site completo que funcionava como uma apresentação e material didático.
                            <br />
                            O site cobriu os fundamentos do desenvolvimento web: HTML5 (estrutura e tags), CSS3 (estilos e seletores) e JavaScript (interatividade e DOM). Não usei frameworks propositalmente para que os alunos entendessem a base pura da programação web. Inclui exemplos práticos como um sistema dia/noite do Minecraft que mudava com comandos JavaScript, quiz interativo com validação automática.
                            <br />
                            Os alunos conseguiam navegar pelo conteúdo, praticar os exercícios e ver o resultado imediato do código.
                        </p>
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
                        <i className="fa-brands fa-laravel item--icon"></i>
                        <p className="item--title">Sistema de Gestão Laravel</p>
                        <p className="item--description">
                            Este foi meu primeiro contato com Laravel e PHP, e posso dizer que foi uma experiência muito legal. Criei um sistema completo de gerenciamento hierárquico (Grupos → Bandeiras → Unidades → Colaboradores) que me permitiu explorar profundamente o ecosistema Laravel.
                            <br />
                            O sistema possui autenticação segura, CRUD completo com componentes Livewire para interatividade em tempo real, sistema de auditoria que registra todas as ações dos usuários (criação, edição, exclusão), filtragem avançada de dados e exportação para Excel. Vi como o padrão MVC torna o código organizado e escalável.
                            <br />
                            Aprendi muito sobre migrations, middleware, validações, blade templates e principalmente sobre Livewire - que me impressionou por permitir criar interfaces dinâmicas usando apenas PHP. O README do projeto é bem detalhado, com prints de todas as telas e explicações do fluxo completo do sistema.
                        </p>
                        <div className="item--link">
                            <i className="fa-brands fa-github"></i>
                            <span className='link--text'>Link do Projeto:</span>
                            <a className='link--url' href="https://github.com/emnuelht/sistema-gestao">Acessar</a>
                        </div>
                    </div>
                    <div className="list--item">
                        <i className="fa-brands fa-react item--icon"></i>
                        <p className="item--title">Portfólio React TypeScript</p>
                        <p className="item--description">
                            E por fim, este próprio portfólio que você está vendo! Foi criado com React TypeScript e Vite, focando em design responsivo e performance. Contém todas as informações dos meus projetos, habilidades e trajetória profissional.
                        </p>
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
            <Projects />
            <Languages />
            <PersonalHighlights />
            <Footer />
        </main>
    )
}

export default App
