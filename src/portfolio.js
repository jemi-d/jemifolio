/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jemima. D",
  title: "Hi all, I'm Jemi",
  subTitle: emoji(
    "A passionate Application Developer 🚀 having an experience of building Mobile and Web applications with Kotlin / Java / Android SDK / Flutter / Dart and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1gfdTs8LSxSn9TUDowm8l3k4seGg5H2FH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jemi-d",
  linkedin: "https://www.linkedin.com/in/jemima-d-361847221/",
  gmail: "jjemimad@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY APP DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your mobile and web applications"
    ),
    emoji("⚡ Build Native Android apps and Cross platform apps using Flutter"),
    emoji(
      "⚡ Integration of third party services/libraries such as Firebase / AWS / Payment Gateway / Google Map SDK"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "devicon-kotlin-plain colored"
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "devicon-android-plain colored"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "devicon-dart-plain colored"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "devicon-flutter-plain colored"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "devicon-java-plain colored"
    },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "aws",
      fontAwesomeClassname: "devicon-amazonwebservices-plain colored"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "devicon-firebase-plain colored"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "devicon-python-plain colored"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Ayya Nadar Janaki Ammal College",
      logo: require("./assets/images/anjac.png"),
      subHeader: "Master of Computer Applications",
      duration: "July 2020 - June 2022",
      desc: "Graduated with First Class Distinction, securing a CGPA of 7.9.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Sri Kaliswari College",
      logo: require("./assets/images/sri_kaliswari.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2017 - April 2020",
      desc: "Graduated with First Class, securing a CGPA of 7.9.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Android Native - Kotlin", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Flutter - Dart",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming & Bug Fixing",
      progressPercentage: "65%"
    },
    {
      Stack: "Backend - Python",
      progressPercentage: "20%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Junior Software Engineer",
      company: "Revolution Games Private Ltd",
      companylogo: require("./assets/images/rg_logo1.jpeg"),
      date: "July 2022 – October 2024",
      desc: "I began my career at Revolution Games Private Limited as a Junior Software Engineer, where I learned Android and Flutter development from scratch. During my time there, I worked on 2–3 projects end-to-end and gained hands-on experience in key technologies such as Google Maps integration, in-app notifications, social logins, bug fixing, maintenance, and feature development. This role helped me build a strong foundation in mobile application development and best coding practices."
    },
    {
      role: "Android Developer",
      company: "Helyxon Healthcare Solutions",
      companylogo: require("./assets/images/helyx_logo.jpeg"),
      date: "April 2025 – Present",
      desc: "Helyxon Healthcare Solutions as an Android Developer, where I was solely responsible for maintaining and enhancing a large-scale healthcare application. I contributed new features including advanced navigation, migration of Java code to Kotlin with Jetpack Compose, data synchronization with AWS cloud storage, database operations and migration logic, and a prescription generator using PDF and Canvas. I also handled bug fixes and overall application performance improvements, ensuring reliability and smooth functionality.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
   
    // {
    //   role: "Software Engineer Intern",
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.png"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/hint_social_logo.png"),
      projectName: "Hint Social",
      projectDesc: "Social events platform to meet new people and discover local things to do based on your interests - for making new friends, finding activity partners, dating, or however else you want to Hint.",
      footerLink: [
        // {
        //   name: "Project Files",
        //   url: "https://drive.google.com/drive/folders/1q6280kEOitbHd4XTB2qYCLNyjCTzppdZ?usp=sharing"
        // }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/ecdoc_logo.webp"),
      projectName: "ECDoc",
      projectDesc: "The app helps doctors manage patient details, book appointments, and conduct consultations. It provides complete info on medications,tracks growth with charts, allergies, and treatment history.",
      footerLink: [
        {
          name: "App Link",
          url: "https://play.google.com/store/apps/details?id=com.helyxon.ecdoc"
        },
        {
          name: "Project Files",
          url: "https://drive.google.com/drive/folders/1HzmgcycQPQFLY5IMCkzXKY1FzKsJAAel?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9047638603",
  email_address: "jjemimad@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
