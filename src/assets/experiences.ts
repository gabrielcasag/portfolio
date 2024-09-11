interface Experience {
  id: number;
  jobTitle: string;
  jobDescription: string;
  jobPeriod: string;
  jobType: string;
  company: string;
  skills: Array<{
    name: string;
    icon: string;
  }>;
}

export const experiencesPt: Array<Experience> = [
  {
    id: 1, // Adicionado ID
    jobTitle: "Senior Software Engineering Analyst",
    jobDescription:
      "Liderança da equipe do Service Portal na execução de quatro novos produtos, adotando a plataforma ServiceNow. Realização de levantamento de requisitos, estimativas e atuação junto à equipe de desenvolvimento. Condução de diversas sessões de treinamento para usuários finais e contribuições significativas para o desenvolvimento de um sistema de design amplamente adotado.",
    jobPeriod: "Dezembro de 2022 - Presente",
    company: "Accenture Brasil",
    jobType: "🌎 Remoto",
    skills: [
      { name: "ServiceNow", icon: "" },
      { name: "Angular.js", icon: "angular-dark" },
      { name: "SCSS", icon: "sass" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    id: 2, // Adicionado ID
    jobTitle: "Software Engineering Analyst",
    jobDescription:
      "Desenvolvimento de interfaces personalizadas e intuitivas no Service Portal utilizando Angular.js, APIs, SCSS, Bootstrap, e outras tecnologias. Contribuição significativa na manutenção e documentação de um sistema de design, além de assumir a liderança da equipe responsável.",
    jobPeriod: "Outubro de 2021 - Novembro de 2022",
    company: "Accenture Brasil",
    jobType: "🌎 Remoto",
    skills: [
      { name: "ServiceNow", icon: "" },
      { name: "APIs", icon: "" },
      { name: "Angular.js", icon: "angular-dark" },
      { name: "SCSS", icon: "sass" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    id: 3, // Adicionado ID
    jobTitle: "Junior Analyst",
    jobDescription:
      "Desenvolvimento full stack em projetos de recursos hídricos utilizando .NET e AngularJS. Exercício da função de Scrum Master, liderando planejamentos de Sprint e contribuindo ativamente nas iniciativas de CI/CD para otimizar sistemas legados.",
    jobPeriod: "Agosto de 2021 - Outubro de 2021",
    company: "Fundação de Desenvolvimento Científico e Cultural - FUNDECC",
    jobType: "🌎 Remoto",
    skills: [
      { name: ".NET", icon: "dotnet" },
      { name: "AngularJS", icon: "angular-dark" },
      { name: "Scrum", icon: "" },
      { name: "CI/CD", icon: "jenkins-dark" },
    ],
  },
  {
    id: 4, // Adicionado ID
    jobTitle: "Systems Development Assistant",
    jobDescription:
      "Atuação no desenvolvimento de back-end e front-end para sistemas de recursos hídricos. Participação em iniciativas para aprimorar sistemas legados, implementando técnicas de análise de código, monitoramento e testes automatizados.",
    jobPeriod: "Janeiro de 2021 - Agosto de 2021",
    company: "Fundação de Desenvolvimento Científico e Cultural - FUNDECC",
    jobType: "🌎 Remoto",
    skills: [
      { name: ".NET", icon: "dotnet" },
      { name: "AngularJS", icon: "angular-dark" },
      { name: "PostgreSQL", icon: "postgresql-dark" },
    ],
  },
  {
    id: 5, // Adicionado ID
    jobTitle: "Systems Development Intern",
    jobDescription:
      "Participação em treinamentos técnicos e colaboração em um projeto de software para gestão de contratos, utilizando Vue.js, Spring Boot e H2database. Contribuição no desenvolvimento full stack e design de front-end com foco na criação de interfaces intuitivas.",
    jobPeriod: "Julho de 2020 - Janeiro de 2021",
    company: "Fundação de Desenvolvimento Científico e Cultural - FUNDECC",
    jobType: "🌎 Remoto",
    skills: [
      { name: "Vue.js", icon: "vuejs-dark" },
      { name: "Spring Boot", icon: "spring-dark" },
      { name: "JavaScript", icon: "javascript" },
      { name: "CSS3", icon: "css" },
    ],
  },
];

export const experiencesEn: Array<Experience> = [
  {
    id: 1,
    jobTitle: "Senior Software Engineering Analyst",
    jobDescription:
      "Leadership of the Service Portal team in the execution of four new products, adopting the ServiceNow platform. Conducting requirements gathering, estimates, and working alongside the development team. Leading various training sessions for end users and making significant contributions to the development of a widely adopted design system.",
    jobPeriod: "December 2022 - Present",
    company: "Accenture Brazil",
    jobType: "🌎 Remote",
    skills: [
      { name: "ServiceNow", icon: "" },
      { name: "Angular.js", icon: "angular-dark" },
      { name: "SCSS", icon: "sass" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    id: 2,
    jobTitle: "Software Engineering Analyst",
    jobDescription:
      "Development of customized and intuitive interfaces in the Service Portal using Angular.js, APIs, SCSS, Bootstrap, and other technologies. Significant contribution to the maintenance and documentation of a design system, as well as assuming leadership of the responsible team.",
    jobPeriod: "October 2021 - November 2022",
    company: "Accenture Brazil",
    jobType: "🌎 Remote",
    skills: [
      { name: "ServiceNow", icon: "" },
      { name: "APIs", icon: "" },
      { name: "Angular.js", icon: "angular-dark" },
      { name: "SCSS", icon: "sass" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    id: 3,
    jobTitle: "Junior Analyst",
    jobDescription:
      "Full stack development in water resources projects using .NET and AngularJS. Exercising the role of Scrum Master, leading Sprint planning, and actively contributing to CI/CD initiatives to optimize legacy systems.",
    jobPeriod: "August 2021 - October 2021",
    company: "Scientific and Cultural Development Foundation - FUNDECC",
    jobType: "🌎 Remote",
    skills: [
      { name: ".NET", icon: "dotnet" },
      { name: "AngularJS", icon: "angular-dark" },
      { name: "Scrum", icon: "" },
      { name: "CI/CD", icon: "jenkins-dark" },
    ],
  },
  {
    id: 4,
    jobTitle: "Systems Development Assistant",
    jobDescription:
      "Working on back-end and front-end development for water resources systems. Participation in initiatives to improve legacy systems, implementing code analysis techniques, monitoring, and automated testing.",
    jobPeriod: "January 2021 - August 2021",
    company: "Scientific and Cultural Development Foundation - FUNDECC",
    jobType: "🌎 Remote",
    skills: [
      { name: ".NET", icon: "dotnet" },
      { name: "AngularJS", icon: "angular-dark" },
      { name: "PostgreSQL", icon: "postgresql-dark" },
    ],
  },
  {
    id: 5,
    jobTitle: "Systems Development Intern",
    jobDescription:
      "Participation in technical training and collaboration on a contract management software project, using Vue.js, Spring Boot, and H2database. Contribution to full stack development and front-end design with a focus on creating intuitive interfaces.",
    jobPeriod: "July 2020 - January 2021",
    company: "Scientific and Cultural Development Foundation - FUNDECC",
    jobType: "🌎 Remote",
    skills: [
      { name: "Vue.js", icon: "vuejs-dark" },
      { name: "Spring Boot", icon: "spring-dark" },
      { name: "JavaScript", icon: "javascript" },
      { name: "CSS3", icon: "css" },
    ],
  },
];
