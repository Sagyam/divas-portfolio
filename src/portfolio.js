/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Divas Portfolio",
  description:
    "Interested in research in mathematical physics, quantum computing, and algorithms.",
  og: {
    title: "Divas Sudedi Portfolio",
    type: "website",
    url: "https://dsubedi.me",
  },
};

//Home Page
const greeting = {
  title: "Divas Subedi",
  logo_name: "Divas Subedi",
  nickname: "",
  subTitle:
    "Interested in research in mathematical physics, quantum computing, and algorithms.",
  resumeLink:
    "https://github.com/thunder753/divas-portfolio/raw/master/Resume_dsubedi.pdf",
  portfolio_repository: "https://github.com/",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=xFXfPpkAAAAJ&hl=en&oi=ao",
    fontAwesomeIcon: "fas fa-graduation-cap",
    backgroundColor: "#4285F4",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/d-subedi//",
    fontAwesomeIcon: "fab fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Github",
    link: "https://github.com/thunder753",
    fontAwesomeIcon: "fab fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  // {
  //   name: "Trinity",
  //   link: "mailto:dsubedi@trincoll.edu",
  //   fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
  //   backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  // },
];

const skills = {
  data: [
    {
      title: "Education & Honors",
      fileName: "EducationImg",
      skills: [
        "⚡ Cumulative GPA: 4.1 / 4.0",
        "⚡ Thomas Holland Scholar",
        "⚡ The Albert J. Howard Jr. Prize",
        "⚡ Engineering Junior Book Prize",
        "⚡ Theodore R. Blakeslee II Award",
        "⚡ Second Year Phi Gamma Delta Prize in Mathematics",
        "⚡ Faculty Honors (All semester)",
      ],
      softwareSkills: [],
    },
    {
      title: "Skills & Certification",
      fileName: "CertificationImg",
      skills: [
        "⚡ Python, MATLAB, Qiskit, C, C++, R, Mathematica, Java",
        "⚡ SPICE, COMSOL, Git, ROS, LaTeX, RStudio, Unity3D, Jupyter",
        "⚡ Data Science Professional Certificate (HarvardX)",
        "⚡ Data Structures and Performance (UC Santa Clara)",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#646464",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#4B8BBE",
          },
        },
        {
          skillName: "java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#ED8B00",
          },
        },
        {
          skillName: "GIT",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#f14e32",
          },
        },
        {
          skillName: "Unity",
          fontAwesomeClassname: "simple-icons:unity",
          style: {
            color: "#000",
          },
        },
      ],
    },
    {
      title: "Courseworks",
      fileName: "CourseworksImg",
      skills: [
        "⚡ Quantum Mechanics",
        "⚡ Classical Mechanics",
        "⚡ Abstract Algebra",
        "⚡ Applied Linear Algebra",
        "⚡ Electrodynamics",
        "⚡ Partial Differential Equations",
        "⚡ Microprocessor Systems",
        "⚡ Digital Signal Processing",
      ],
      softwareSkills: [],
    },
    {
      title: "Projects",
      fileName: "ProjectsImg",
      skills: [
        "⚡ FermiLT: Designed and maintained circuit element optimizer for Fermilab ",
        "⚡ QHO Simulator: Designed a simulator to estimate time evolution of a given quantum wave function.",
        "⚡ Autonomous Vehicle: Designed and established wireless communication to interface with autonomous vehicle.",
        "⚡ Cubetastic: Built 3D collision‐based obstacle avoidance game for Android and Windows. ",
        "⚡ Text Editor: Implemented Search Tree to build a text editor with text prediction.",
        "⚡ Project Map: Built global air traffic map by implementing various data structures.",
      ],
      softwareSkills: [],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "TRINITY COLLEGE",
      subtitle: "B.S. in Physics and Computer Engineering",
      logo_path: "trinity-logo.png",
      alt_name: "trinity-college",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Cumulative GPA: 4.1 / 4.0",
        "⚡ Thomas Holland Scholar",
        "⚡ The Albert J. Howard Jr. Prize",
        "⚡ Engineering Junior Book Prize",
        "⚡ Theodore R. Blakeslee II Award",
        "⚡ Second Year Phi Gamma Delta Prize in Mathematics",
        "⚡ Faculty Honors (All semester)",
      ],
      website_link: "https://www.trincoll.edu/",
    }
    // {
    //   title: "Chelsea International Academy",
    //   subtitle: "GCE A-Level",
    //   logo_path: "chelsea.png",
    //   alt_name: "chelsea-intl",
    //   duration: "2015 - 2017",
    //   descriptions: [
    //     "⚡ Cumulative GPA: 4.0 / 4.0",
    //     "⚡ Aru kk gareko thees samjidhai lekh",
    //   ],
    //   website_link: "https://www.facebook.com/ChelseaInternationalAcademy/",
    // },
    // {
    //   title: "DAV School, Biratnagar",
    //   subtitle: "SLC",
    //   logo_path: "dav.jpeg",
    //   alt_name: "dav-school",
    //   duration: "2006 - 2015",
    //   descriptions: [
    //     "⚡ Class Topper",
    //     "⚡ Ma gaye pachi kehi kanda gareko thees ke?? Samjhera lekh  ",
    //   ],
    //   website_link: "https://www.dav.edu.np/",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "PH125.8x: Data Science: Machine Learning",
      subtitle: "edX",
      logo_path: "EdX.svg",
      certificate_link:
        "https://courses.edx.org/certificates/6b38cb45422242e4a4c6d67e251b5f39",
      alt_name: "HarvardX",
      color_code: "#fff",
    },
    {
      title: "PH125.1x: Data Science: R Basics",
      subtitle: "edX",
      logo_path: "EdX.svg",
      certificate_link:
        "https://courses.edx.org/certificates/641bf967c25445ebbf63529cbed4cec6",
      alt_name: "HarvardX",
      color_code: "#fff",
    },
    {
      title: "PH125.3x: Data Science: Probability",
      subtitle: "edX",
      logo_path: "EdX.svg",
      certificate_link:
        "https://courses.edx.org/certificates/db3afc5f944146398847b0213193fb19",
      alt_name: "HarvardX",
      color_code: "#fff",
    },
    {
      title: "PH125.4x: Data Science: Inference and Modeling",
      subtitle: "edX",
      logo_path: "EdX.svg",
      certificate_link:
        "https://courses.edx.org/certificates/e9fd05d487454821b7cff288670d711b",
      alt_name: "HarvardX",
      color_code: "#fff",
    },
    {
      title: "PH125.5x: Data Science: Productivity Tools",
      subtitle: "edX",
      logo_path: "EdX.svg",
      certificate_link:
        "https://courses.edx.org/certificates/8e215f2b4cf34db1a5cfd15c0d7fcd05",
      alt_name: "HarvardX",
      color_code: "#fff",
    },
    {
      title: "PH125.2x: Data Science: Visualization",
      subtitle: "edX",
      logo_path: "EdX.svg",
      certificate_link:
        "https://courses.edx.org/certificates/d293e88879c443c2b451cf539dbc7a71",
      alt_name: "HarvardX",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Internship and Volunteership",
  description: "",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Teaching Assistant",
          company: "TRiNiTY COLLEGE",
          company_url: "https://www.trincoll.edu/",
          logo_path: "trinity-logo.png",
          duration: "Jan 2020 ‐ Present",
          location: "Hartford, CT, USA",
          description:
            " Assisted in management of courses, conducted labs, graded assignments, and presented supplementary lectures.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Intern",
          company: "FERMi NATiONAL LABORATORY / DUNE AT LBNF",
          company_url: "https://www.fnal.gov/",
          logo_path: "fermi-logo.png",
          duration: "May 2021 ‐ Aug 2021",
          location: "Batalavia, IL, USA",
          description:
            " Designed and coded firmware on ground impedance monitor for isolation of ground for DUNE‐LBNF far side detector. Implement signal processing models in FPGA for impedance monitoring. Created and managed code‐base for circuit element parameter optimization using LTSPICE and Python",
          color: "#0879bf",
        },
        {
          title: "Trainee",
          company: "UNiVERSiTY OF WATERLOO: INSTiTUTE OF QUANTUM COMPUTiNG",
          company_url: "https://uwaterloo.ca/",
          logo_path: "uni-waterloo-logo.png",
          duration: "May 2021 ‐ Aug 2021",
          location: "Waterloo, ON, Canada",
          description:
            "Participated in USEQIP to study multiple aspects of experimental quantum computing. Created and collaborated in quantum algorithm coding projects.",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "divas-headshot.jpeg",
    description: "Feel free to contact me if you want to know about anyting",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "300 Summit St, Hartford, CT 06106, United States",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://g.page/trinity-college-hartford?share",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+01 XXXXXXXX",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
