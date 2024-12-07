
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Camelcase Ltd.",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    }
  ],
}
export const intro = {
  title: "Mark Mitchell",
  //description: "A Computer Engineer creating mobile apps and static websites.",
  description: "Software Developer and Devops Engineer.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://todo.com",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  // description: [
  //   "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I kick started my professional career as a mobile application developer working remotely for a UK based startup — Lessgo.",
  //   "The tech industry is ever-evolving and I love being able to grow with it, while continually solidifying the fundamentals. I opensource my code from a place of empathy - for future developers, teammates, users, and with accessibility in mind. I also love joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I’m sharing my programming journey on instagram, helping people who are just getting into the space of programming.",
  //   "When I’m not programming, I focus on my hobbies which are: diary writing, doodling, meeting people and growing my network.",
  // ],
  description: [
    "Who am I?"
  ]
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Software Development",
      description: "I am a software developer with over 20 years of experience in <b>Java</b> and Spring. I build scalable, reliable applications, craft high-performance APIs, and optimise systems for efficiency and maintainability.",
      icons: null,
    },
    {
      title: "Infrastructure",
      description: "I design and build clean, DRY, secure configurations using Terraform and Terragrunt. From networks to containers, I deliver end-to-end infrastructure solutions that prioritise security and scalability, including orchestration for seamless workflows.",
      icons: null,
    },
    {
      title: "Team Upskilling",
      description: "I create tailored Proof of Concepts (POCs) and tutorials designed to align with the team's skillset and tech stack. These resources help teams quickly adopt new technologies and improve their workflows.",
      icons: null,
    },
    {
      title: "Development Environments",
      description: `
        Modern architectures are complex, but developers shouldn’t need to master them to start coding.
        <ul>
            <li>Simplify workflows, so developers can focus on coding, not infrastructure.</li>
            <li>Reduce time-to-deploy with tailored, efficient setups.</li>
            <li>(todo: upd/change)Support both local and remote Kubernetes environments for seamless transitions.</li>
        </ul>
        (todo: upd/change)My solutions empower teams to deliver faster and stay productive.
    `,
      icons: null,
      listlinks: null
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Code",
      description: "Common Design Patterns implemented in Java and Spring and (todo: rephrase)Java Optomisatiosn for mx performance and imin resorce usage",
      listlinks: [
        {
          icon: faGithub,
          link: null,
          title: "Java Design Patterns"
        },
        {
          icon: faGithub,
          link: null,
          title: "Java Optomised"
        }
      ]
    },
    {
      title: "Infrastructure",
      description: "Clean, DRY Infrastructure patterns using Terraform and Terragrunt",
      listlinks: [
        {
          icon: faGithub,
          link: null,
          title: "AWS ECS Infra"
        },
      ]
    },
    {
      title: "Development Environments",
      description: "Some examples of bespoke solutions I have successfully delivered for clients in the past.",
      icons: null,
      listlinks: [
        {
          icon: faGithub,
          link: "https://github.com/mm-camelcase/k8s-devenv",
          title: "Local Kubernetes devenv"
        },
        {
          icon: faGithub,
          link: "https://github.com/mm-camelcase/k8s-remote-devenv",
          title: "Remote Kubernetes devenv"
        }
      ]
    },
    {
      title: "Tutorials",
      description: "Tutorials and POCs",
      listlinks: [
        {
          icon: faGithub,
          link: null,
          title: "Spring boot deployed to AWS ECS"
        },
        {
          icon: faGithub,
          link: null,
          title: "Feature Flags"
        },
        {
          icon: faGithub,
          link: null,
          title: "Lambdas in Java"
        }
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Feel free to reach out directly by email at markmitchell451@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:markmitchell451@gmail.com1",
      isPrimary: true,
    }
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Mark Mitchell | Software Developer | Java | DevOps",
  description: "todo.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "markmitchell",
  description: "Mark Mitchell | Software Developer | Java | DevOps",
  cards: [
    {
      title: "My website",
      link: "https://mm-camelcase.github.io/site/",
    },

    {
      title: "My GitHub",
      link: "https://github.com/mm-camelcase",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/mark-mitchell-camelcase/",
    },
  ]
}