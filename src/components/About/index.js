import Item from "../Item";
import sx from "./About.module.sass";

const links = {
  leadershipFigures:
    "https://drive.google.com/file/d/1vh9lmS-SFPL-_R-JAsicbYHWX5nQ9IEi/view?usp=sharing",
  qubic:
    "https://www.qubic.market/?gclid=Cj0KCQiAgOefBhDgARIsAMhqXA6mrn45trkttgGmtAGN59SSA6HWlbLfn5A3wmMC872WLBDizE1n7ToaAqVEEALw_wcB",
  graduationProject:
    "https://drive.google.com/file/d/14gQrviCTfyf2MHIN3QFCgGyZLBIiEDeu/view?usp=share_link",
  codeclub: "https://github.com/Chrissy1209/code-club",
};

const itemData = [
  {
    id: "gln",
    name: "GLN",
    link: "https://globalline.my",
    date: "Jun 2024 – Present",
    text: (
      <>
        <p>
          At GLN, I focused on modernizing and enhancing the user experience of
          our applications.
        </p>
        <p></p>
        <ul style={{ paddingInlineStart: "2rem" }}>
          <li>
            Refactored legacy code by evaluating tech stack and planning
            workflows. Later optimized the existing codebase by consolidating UI
            components and creating a custom Node.js script to remove <strong>400+ </strong>
            unused images, improving maintainability and boosting deployment
            efficiency by <strong>16%</strong>.
          </li>
          <li>
            Utilized <strong>AI-powered tools</strong> like Cursor, Copilot,
            Claude, and ChatGPT to boost development efficiency, enhance
            problem-solving capabilities, and improve code quality.
          </li>
          <li>
            CLed end-to-end feature development from ideation to deployment in{" "}
            <strong>cross-functional and cross-national teams</strong>.
          </li>
          <li>
            Optimized <strong>user experience</strong> by balancing technical
            feasibility and usability, proactively contributing ideas to feature
            enhancements and continuous improvements.
          </li>
        </ul>
        <p>
          This experience has deepened my expertise in{" "}
          <strong>modern web development</strong> practices and strengthened my
          ability to work effectively in{" "}
          <strong>diverse team environments</strong>.
        </p>
      </>
    ),
  },
  {
    id: "liu",
    name: "Linköping University",
    link: "https://liu.se/en",
    date: "Jul 2023 - Aug 2023",
    text: (
      <>
        <p>
          In July 2023, I participated in a summer exchange program in Sweden,
          where I enrolled in a{" "}
          <strong>Leadership and Organizational Behavior</strong> course
          alongside nearly 30 individuals from 12 different countries.
        </p>
        <p>
          During the program, I actively engaged in various hands-on activities
          that allowed me to apply theoretical knowledge to real-world
          scenarios. One notable instance was a{" "}
          <strong>corporate role-playing</strong>, where we assumed different
          roles within a company to simulate complex{" "}
          <strong>decision-making processes</strong> and enhance our{" "}
          <strong>problem-solving skills</strong>.
        </p>
        <p>
          Being part of such a diverse class, I acquired valuable skills in{" "}
          <strong>interacting, communicating, and collaborating</strong> with
          people from vastly different cultures, and excelled in a group project
          on{" "}
          <strong>
            <a
              className={sx.link}
              href={links.leadershipFigures}
              target="_blank"
              rel="noreferrer"
            >
              Contemporary Leadership Figures
            </a>
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    id: "maicoin",
    name: "MaiCoin",
    link: "https://group.maicoin.com",
    date: "Jul 2022 - Jun 2023",
    text: (
      <>
        <p>
          Throughout my last year of college, I pursued a{" "}
          <strong>frontend/blockchain engineering</strong> internship at
          MaiCoin, engaging in daily stand-ups, weekly one-on-one meetings, and
          solving problems through collaborative efforts.
        </p>
        <p></p>
        <ul style={{ paddingInlineStart: "2rem" }}>
          <li>
            Established an <strong>admin dashboard</strong> to support daily
            operations for{" "}
            <strong>
              <a
                className={sx.link}
                href={links.qubic}
                target="_blank"
                rel="noreferrer"
              >
                Qubic
              </a>
            </strong>{" "}
            (an NFT Wallet), managing the KYC user list and push notifications
            using Next.js, TypeScript and Material-UI.
          </li>
          <li>
            Built an <strong>NFT verification platform</strong> for users who
            want to redeem their NFT by Next.js, Firebase cloud function, and
            GraphQL.
          </li>
          <li>
            Implemented two websites and two landing pages from concept to
            deployment, standardized outputs with{" "}
            <strong>responsive web design</strong>, and{" "}
            <strong>mobile-first</strong> strategy.
          </li>
        </ul>
        <p>
          This journey proved to be incredibly rewarding. I thrived in an
          environment that fostered <strong>continuous learning</strong> and
          refined my <strong>technical proficiency</strong>. Eager to contribute
          these experiences to dynamic projects and further advance in future
          roles.
          {/* It was an incredibly rewarding experience. Eager to apply these experiences in future roles, I look forward to contributing my skills to dynamic projects and further advancing as a frontend engineer. */}
        </p>
      </>
    ),
  },
  {
    id: "grad-project",
    name: "Graduation Project《繫念》",
    link: null,
    date: "Jul 2022 - Mar 2023",
    text: (
      <>
        <p>
          While I was immersed in my role at MaiCoin, I simultaneously managed
          my graduation project. It was the most fulfilling period as I{" "}
          <strong>led a team of 6</strong> and earned the{" "}
          <strong>Most Popular Award</strong>.
        </p>
        <ul style={{ paddingInlineStart: "2rem" }}>
          <li>
            Integrated human-machine interaction to create a 3*3m physical
            escape room, including 4 major mechanisms, using Arduino.
          </li>
          <li>
            <strong>
              Conducted presentations, facilitated internal communications, and
              managed tasks.
            </strong>
          </li>
          <li>
            Served as a social media manager, ideating social campaigns, and
            handling both posting and monitoring.
          </li>
          <li>
            Successfully executed <strong>two exhibitions</strong>, both
            on-campus and in Taipei, catering to over 90 groups.
          </li>
        </ul>
        <p>
          View the final report{" "}
          <strong>
            <a
              className={sx.link}
              href={links.graduationProject}
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    id: "yzu",
    name: "Yuan Ze University",
    link: "https://infocom.yzu.edu.tw",
    date: "B.S. in ICT, Sep 2019 - Sep 2023",
    text: (
      <>
        <p>
          My experience at{" "}
          <strong>
            <a
              className={sx.link}
              href={links.codeclub}
              target="_blank"
              rel="noreferrer"
            >
              Code-club
            </a>
          </strong>{" "}
          highlighted the power of collaborative problem-solving and teamwork.
          My senior summer vocation abroad at Linköping exposed me to diverse
          perspectives. My engagement in graduation project honed my creative
          abilities and resilience in the face of challenges. My internships at
          MaiCoin helped me discover my love for building products that
          contribute to enhancing user experiences and addressing real-world
          needs.
        </p>
        <p>
          YZU not only showed me what I love to do but also instilled in me a
          commitment to continuous growth and apply my skills meaningfully to
          the ever-evolving field of web development.
        </p>
      </>
    ),
  },
];

const About = () => {
  return (
    <div className={sx.layout}>
      <div className={sx.container}>
        <div className="title-group">
          <h1 className={sx.title}>- My journey -</h1>
          <p className={sx.subTitle}>
            Frontend Engineer with strong experience in React ecosystem,
            cross-functional collaboration, and AI-powered development
            workflows. Passionate about building scalable and user-centric web
            apps. Seeking opportunities in international teams that value
            ownership, agility, and continuous learning. 👨‍💻
            {/* I'm a recent graduate and passionate frontend engineer with internship experience at MaiCoin. I've successfully contributed to projects, honing both development and project management skills, and I'm looking for new challenges to grow further in technology and coding! */}
            {/* I'm a Frontend Engineer with solid experience in modern web
            technologies including TypeScript, Next.js, and Tailwind. Skilled in
            refactoring legacy code, enhancing code quality through rigorous
            reviews, and leveraging AI-assisted tools to boost development
            efficiency. Passionate about user-centric design, cross-functional
            collaboration, and continuous learning. */}
            {/* Seeking new challenges and opportunities to grow now. 👨‍💻 */}
          </p>
        </div>
        <div className="item-wrapper">
          {itemData.map((e) => (
            <Item
              key={e.id}
              id={e.id}
              name={e.name}
              link={e.link}
              date={e.date}
              text={e.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
