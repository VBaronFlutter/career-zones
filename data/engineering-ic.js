import { core } from './core'
import { engineering } from './engineering'

export const engineeringIc = {
  levels: [
    {
      title: "Software Engineer",
      summary: "Early Career"
    }, {
      title: "Senior Software Engineer",
      summary: "Leads Self"
    }, {
      title: "Lead Engineer",
      summary: "Expert / Specialist"
    }, {
      title: "Engineering Manager",
      summary: "Lead Expert"
    }, {
      title: "Head of Engineering",
      summary: "Thought Leader"
    }
  ],
  competencies: [
    ...core,
    {
      title: engineering.title,
      description: engineering.description,
      levels: [
        ...engineering.levels,
        {
          scope: [
            "Solves complex problems taking a new perspective on existing solutions, exercising judgement based on the analysis of multiple sources of information.",
            "Has developed a sound understanding and experience in own area of specialism, continually builds knowledge of domain through experience.",
            "Works as part of a squad and impacts quality of own work and work of others in the team and those closely related teams.",
            "May formally coach/mentor 1-2 team members.",
          ],
          focusAreas: [
            "Considered a technical expert in a particular programming language and/or domain.",
            "Begins broadening their expertise regarding NFRs with a focus on helping the more junior members of the team to consider the wider impacts of their work.",
            "Becomes more active in their community or environment to broaden their knowledge.",
            "Actively follows and appraises new technology for suitability and potential",
            "Defines and reviews quality standards",
            "Champions peer review",
            "Implements non-trivial components and distributed systems consisting of multiple interacting services",
            "Champions resolution of technical debt",
            "Proactively identifies and addresses problems in application quality and tools",
            "Investigates and fixes complex bugs",
            "Considers metrics when developing, and uses appropriate services to check quality levels",
            "Plays a key role in technical elaboration",
            "Demonstrates understanding of CI/CD processes",
            "Solves small scope not-well-defined problems",
            "Helps non-technical stakeholders to understand and consider technical considerations",
            "Identifies deficiencies in the development processes and supports activities to improve them",
            "Participates in technical and non-technical discussions within and outside the squad",
          ],
          model: {
            "seventy": [
              "Designs, codes, verifies, tests, documents, amends and refactors moderately complex programs/scripts. Applies agreed standards and tools, to achieve a well-engineered result. Collaborates in reviews of work with others as appropriate.",
              "Undertakes complete design of moderately complex software applications or components applying agreed standards, patterns and tools. Assists as part of a team in the design of components of larger software systems. Specifies user and/or system interfaces. Creates multiple design views to address the concerns of the different stakeholders of the design and to handle separately functional and non-functional requirements. Assists in the evaluation of options and trade-offs. Collaborates in reviews of work with others as appropriate.",
              "Reviews requirements and specifications, and defines test conditions. Designs test cases and test scripts under own direction, mapping back to pre-determined criteria, recording and reporting outcomes. Analyses and reports test activities and results. Identifies and reports issues and risks associated with own work.",
            ],
            "twenty": [
              "twenty One",
              "twenty Two",
              "twenty Three",
            ],
            "ten": [
              "ten One",
              "ten Two",
              "ten Three",
            ]
          }
        },
        {
          scope: [
            "Acts either as a broad generalist or deep expert who proactively addresses complex problems beyond existing solutions.",
            "Leads technical work across a domain, related channels and has impact on a range of projects and service activities.",
            "Works within broad guidelines and policies. May mentor/coach several specialists or SME's",
          ],
          focusAreas: [
            "Closely follows technology trends internally and externally, leveraging knowledge and experience to improve our software design",
            "Key advocate for NFRs, DevOps practices and full SDLC and understands the benefit of these.",
            "Shares experience through CoPs and champions learning and development within their scope",
            "Writes code that serves as a definitive example for new engineers",
            "Owns the technical vision for their specialty / domain",
            "Leads on non-functional quality",
            "Owns technical decisions with high risk and low reversibility",
            "Ensures new developments are engineered in keeping with blueprints",
            "Evangelizes best practice across the business",
            "Champions change in pursuit of better technology, services, and standards",
            "Explains all aspects of the platform to new engineers",
            "Maintains blueprint and target architecture documentation with solution architects",
            "Shapes the direction of system designs with less experienced engineers",
            "Transparent in making design and technical decisions",
            "Gets buy-in on technical decision-making and proposed designs",
            "Mediates debates and discussions on tech choices",
            "Is a subject matter expert",
            "Maintains an expert profile in their field",
            "Positively influences engineers in the wider organisation",
          ],
          model: {
            "seventy": [
              "Designs, codes, verifies, tests, documents, amends and refactors complex programs/scripts and integration software services. Contributes to selection of the software development approach for projects, selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Applies agreed standards and tools, to achieve well-engineered outcomes. Participates in reviews of own work and leads reviews of colleagues' work.",
              "Designs software components and modules using appropriate modelling techniques following agreed software design standards, patterns and methodology. Creates and communicates multiple design views to identify and balance the concerns of all stakeholders of the software design and to allow for both functional and non-functional requirements. Identifies and evaluates alternative design options and trade-offs. Recommends designs which take into account target environment, performance security requirements and existing systems. Reviews, verifies and improves own designs against specifications. Leads reviews of others’ designs. Models, simulates or prototypes the behaviour of proposed software to enable approval by stakeholders, and effective construction of the software. Verifies software design by constructing and applying appropriate methods.",
              "Accepts responsibility for creation of test cases using own in-depth technical analysis of both functional and non-functional specifications (such as reliability, efficiency, usability, maintainability and portability). Creates traceability records, from test cases back to requirements. Produces test scripts, materials and regression test packs to test new and amended software or services. Specifies requirements for environment, data, resources and tools. Interprets, executes and documents complex test scripts using agreed methods and standards. Records and analyses actions and results, and maintains a defect register. Reviews test results and modifies tests if necessary. Provides reports on progress, anomalies, risks and issues associated with the overall project. Reports on system quality and collects metrics on test cases. Provides specialist advice to support others.",
            ],
            "twenty": [
              "twenty One",
              "twenty Two",
              "twenty Three",
            ],
            "ten": [
              "ten One",
              "ten Two",
              "ten Three",
            ]
          }
        },
        {
          scope: [
          ],
          focusAreas: [
            "Software Engineering: The planning, designing, creation, amending, verification, testing and documentation of new and amended software components in order to deliver agreed value to stakeholders. The identification, creation and application of agreed software development and security standards and processes. Adopting and adapting software development lifecycle models based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
            "Software Desing: The specification and design of software to meet defined requirements by following agreed design standards and principles. The definition of software, components, interfaces and related characteristics. The identification of concepts and patterns and the translation into a design which provides a basis for software construction and verification. The evaluation of alternative solutions and trade-offs. The facilitation of design decisions within the constraints of systems designs, design standards, quality, feasibility, extensibility and maintainability. The development and iteration of prototypes/simulations to enable informed decision-making. The adoption and adaptation of software design models, tools and techniques based on the context of the work and selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches.",
            "Testing: The planning, design, management, execution and reporting of tests, using appropriate testing tools and techniques and conforming to agreed process standards and industry specific regulations. The purpose of testing is to ensure that new and amended systems, configurations, packages, or services, together with any interfaces, perform as specified (including security requirements) , and that the risks associated with deployment are adequately understood and documented. Testing includes the process of engineering, using and maintaining testware (test cases, test scripts, test reports, test plans, etc) to measure and improve the quality of the software being tested.",
          ],
          model: {
            "seventy": [
              "Takes technical responsibility across all stages and iterations of software development. Plans and drives software construction activities. Adopts and adapts appropriate software development methods, tools and techniques selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Measures and monitors applications of project/team standards for software construction including software security. Contributes to the development of organisational policies, standards, and guidelines for software development.",
              "Selects, adopts and adapts appropriate software design methods, tools and techniques; selecting appropriately from predictive (plan-driven) approaches or adaptive (iterative/agile) approaches. Specifies and designs large or complex software components. Undertakes impact analysis on major design options, makes recommendations and assesses and manages associated risks. Specifies prototypes/simulations to enable informed decision making. Evaluates the quality of others' systems designs to ensure adherence to standards and identifies corrective action, if needed. Ensures that the system design balances functional, quality, security and systems management requirements. Contributes to development of organisational software design and architecture policies and standards.",
              "Coordinates and manages planning of the system and/or acceptance tests, including software security testing, within a development or integration project or programme. Takes responsibility for integrity of testing and acceptance activities and coordinates the execution of these activities. Provides authoritative advice and guidance on any aspect of test planning and execution. Defines and communicates the test strategy for the project. Manages all test processes, including test plans, resources, costs, timescales, test deliverables and traceability. Manages client relationships with respect to testing matters. Identifies process improvements, and contributes to corporate testing standards and definition of best practice.",
              "seventy One",
              "seventy Two",
              "seventy Three",
            ],
            "twenty": [
              "twenty One",
              "twenty Two",
              "twenty Three",
            ],
            "ten": [
              "ten One",
              "ten Two",
              "ten Three",
            ]
          }
        }
      ]
    }
  ]
}