import { Monitor, Database, LayoutDashboard, Server, GitBranch, KanbanSquare } from 'lucide-react'


const Knowledges = [
    {
        conocimiento: 'Desarrollo Front-End',
        icono: Monitor,
        descripcion: 'Creación de interfaces web interactivas y responsivas utilizando React, HTML5, CSS3 y JavaScript.',
    },
    {
        conocimiento: 'Desarrollo Back-End',
        icono: Server,
        descripcion: 'Diseño y desarrollo de Rest API en SpringBoot.',
    },
    {
        conocimiento: 'Gestión de Bases de Datos',
        icono: Database,
        descripcion: 'Experiencia trabajando con MySQL y PostgreSQL. Diseño y consultas eficientes.',
    },
    {
        conocimiento: 'Git & GitHub',
        icono: GitBranch,
        descripcion: 'Control de versiones usando Git. Flujo de trabajo con ramas, pull requests y colaboración en GitHub.',
    },
    {
        conocimiento: 'Diseño UX/UI',
        icono: LayoutDashboard,
        descripcion: 'Diseño de interfaces de usuario enfocadas en la experiencia, con prototipos funcionales y mockups.',
    },
    {
        conocimiento: 'Metodologías de trabajo',
        icono: KanbanSquare,
        descripcion: 'Experiencia trabajando en equipo bajo metodologías ágiles como Scrum.',
    },
]

const Education = [
    {
        institucion: 'MisiónTIC 2022',
        cargo: 'Finalizado',
        anio: '2021',
        certificacion: 'Desarrollador Web',
        descripcion: ' Durante mis estudios, adquirí conocimientos en programación, bases de datos, y metodologías ágiles, lo que me permitió trabajar en proyectos individuales y colaborativos para resolver problemas complejos y crear soluciones eficientes.'
    },
    {
        institucion: 'No-Country',
        cargo: 'Finalizado',
        anio: '2023',
        certificacion: 'Simulación de entorno laboral',
        descripcion: 'Participé en una simulación laboral en No-Country, donde formé parte de un entorno dinámico y colaborativo que me permitió poner en práctica mis habilidades técnicas en proyectos reales.'
    },
    {
        institucion: 'Universidad de Antioquia',
        cargo: 'Finalizado',
        anio: 'Jul 2024- Dic 2024',
        certificacion: 'Monitor de desarrollo web',
        descripcion: 'Como monitor de desarrollo web, he guiado y apoyado a estudiantes en su proceso de aprendizaje de tecnologías clave como HTML, CSS, JavaScript y frameworks como React.'
    },
    {
        institucion: 'Universidad de Antioquia',
        cargo: 'En curso',
        anio: '2017-Presente',
        certificacion: 'Ingeniería de Sistemas',
        descripcion: 'He trabajado en proyectos relacionados con la optimización de procesos, diseño de software y administración de infraestructuras tecnológicas, lo que me ha permitido desarrollar una visión crítica y estratégica para resolver problemas complejos dentro del ámbito tecnológico."'
    },
]

const Languages = [
    {
        lenguaje: 'Español',
        nivel: '100%'
    },
    {
        lenguaje: 'Inglés',
        nivel: '60%'
    }
]

const Portafolio = [
    {
        urlDeploy: 'https://walkyshoes.vercel.app/',
        urlRepo: 'https://github.com/estebancastano/walky',
        imagen: '/logos/walky.png',
        titulo: 'Walky',
        descripcion: 'Landing page desarrollada con Astro.js y TailwindCSS'
    },
    {
        urlDeploy: 'https://appamigosecreto.vercel.app/',
        urlRepo: 'https://github.com/estebancastano/amigo-secreto',
        imagen: '/logos/amigo_secreto.png',
        titulo: 'Amigo Secreto',
        descripcion: 'Aplicación web para realizar sorteos de amigo secreto, desarrollada con HTML, CSS y JavaScript'
    },
    {
        urlDeploy: '',
        urlRepo: 'https://github.com/estebancastano/calendario-organizador-react',
        imagen: '/logos/calendario_organizador.png',
        titulo: 'Calendario Organizador (En desarrollo)',
        descripcion: 'Aplicación web para organizar eventos y tareas, desarrollada con React, TailwindCSS y Firebase'
    },
    {
        urlDeploy: '',
        urlRepo: 'https://github.com/estebancastano/calendario-organizador-react',
        imagen: '/logos/100_proyectos_javascript.png',
        titulo: '100 proyectos JavaScript (En desarrollo)',
        descripcion: 'Repositorio que contiene una colección de 100 proyectos desarrollados en JavaScript.'
    },
]

const ProgrammingLanguages = [
    {
        lenguaje: 'Java-SpringBoot',
        nivel: '40%'
    },
    {
        lenguaje: 'React',
        nivel: '50%'
    },
    {
        lenguaje: 'TailwindCSS',
        nivel: '60%'
    }

]
export { Knowledges, Education, Languages, Portafolio, ProgrammingLanguages }