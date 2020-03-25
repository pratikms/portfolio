const greeting = {
  title: "Hello, World! 👋 I'm Pratik Shivaraikar",
  subTitle:
    "I'm a passionate Software Engineer based in Pune, India specializing in building exceptional, high-quality software products.",
  resumeLink: "/resume.pdf"
}

const socialMediaLinks = {
  github: "https://github.com/pratikms",
  linkedin: "https://www.linkedin.com/in/pratik-shivaraikar/",
  gmail: "contact@pratikms.com",
  // gitlab: "https://gitlab.com/pratikms",
  // facebook: "https://www.facebook.com/pratik.shivaraikar"
}

const skillsSection = {
  title: "About Me",
  subTitle: "I have a professional experience of working in the Storage, Security and Wireless domains. Apart from that, I've also worked on quite a few open-source projects ranging from web development to game development.",
  skillsPreamble: "Here are a few technologies that I've worked on:",
  
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ]
}

const openSource = {
  githubConvertedToken: process.env.GATSBY_GITHUB_ACCESS_TOKEN,
  githubUserName: "pratikms"
}

const blogSection = {
  title: "Blogs",
  subtitle: "Whenever I find time, I also like to write about whatever I have learned:",
  url: "https://blog.pratikms.com"
}

const contactInfo = {
  title: "Get In Touch",
  subtitle: "Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!",
  // number: "+92-3243454077",
  email_address: "contact@pratikms.com"
}

export { greeting, socialMediaLinks, skillsSection, openSource, blogSection, contactInfo }
