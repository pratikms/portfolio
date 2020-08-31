const greeting = {
  title: "Hello, World! 👋 I'm Pratik Shivaraikar",
  subTitle:
    "I'm a passionate Software Engineer based in Pune, India specializing in building exceptional, high-quality software products.",
  resumeLink: "/resume.pdf"
}

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/pratik-shivaraikar/",
  github: "https://github.com/pratikms",
  gmail: "contact@pratikms.com",
  twitter: "https://twitter.com/@pmshivaraikar",
  medium: "https://medium.com/@pratik.shivaraikar",
  dev: "https://dev.to/pratikms"
}

const skillsSection = {
  title: "About Me",
  subTitle: "I have a professional experience of working in the Storage, Security and Wireless domains. Apart from that, I've also worked on quite a few open-source projects ranging from web development to game development.",
  skillsPreamble: "Here are a few technologies that I've worked on:",
  
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Node.js",
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
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ]
}

const experience = {
  showExperience: true, //Set it to true to show experience Section
  experience: [
    {
      key: 3,
      role: "Principal Development Engineer",  
      company: "Calsoft",
      companyLogo: require("./images/calsoft.webp"),
      companyHomepage: "https://calsoftinc.com/",
      background: "rgb(230, 22, 29)",
      date: "Jun 2019 – Present",
      desc: "Contracted to Lenovo for working on Lenovo XClarity™ data-center management solutions",
      descBullets: [
        "Major contributor of the Third-party Integrations Team, working on data-forwarding micro-services",
        "Active developer to Lenovo's various open-source projects like PyLXCA, Lenovo Ansible, etc.",
        "Lead contributor for integrating SIEM tools like Splunk to collect, analyze and derive meaningful insights from events collected from Lenovo hardware"
      ]
    },
    {
      key: 2,
      role: "Software Engineer",   
      company: "Quick Heal",
      companyLogo: require("./images/quickheal.webp"),
      companyHomepage: "https://www.quickheal.com/",
      background: "rgb(244, 100, 28)",
      date: "Feb 2018 – Jun 2019",
      desc: "Worked on Shared Services of Licensing and Activation across all Quick Heal products",
      descBullets: [
        "Developed Partner Portal for Key Generation and Activation",
        "Designed and implemented a highly-performant Geo-location API to be used by all Quick Heal products and saving considerable YOY expenditure",
        "Delivered multiple POCs for supporting server migration from on-prem to cloud"
      ]
    },
    {
      key: 1,
      role: "Software Engineer",  
      company: "Wifi-soft Solutions",
      companyLogo: require("./images/wifi-soft.webp"),
      companyHomepage: "https://www.wifi-soft.com/",
      background: "rgb(5, 52, 91)",
      date: "Jun 2015 – Feb 2018",
      desc: "Worked on Enterprise, Hotspot and IoT solutions to monetize WiFI",
      descBullets: [
        "Developed Unibox 3.0 — a multicontroller — from ground up",
        "Developed real-time dashboard providing analytics collected from all the IoT devices for the Sensors product",
        "Implemented Kibo Partner Management (KPM) — a complete solution for Partners, Distributers and Vendors to manage their hotspots"
      ]
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

export { greeting, socialMediaLinks, skillsSection, experience, openSource, blogSection, contactInfo }
