
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Essani Mohsin",
  title: "Hi all, I'm Mohsin",
  subTitle: emoji("A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1iCLAfNkCvqlcFEQ9q4yFudbdBVFhAOJd/view?usp=sharing",
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/essanimohsin",
  linkedin: "https://www.linkedin.com/in/mohsinessani/",
  gmail: "mohsinessani@gmail.com",
  
  facebook: "https://www.facebook.com/profile.php?id=100009644221873",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: "fab fa-docker"
    // }
    {
      skillName: "Adobe Xd",
      fontAwesomeClassname: "fas fa-layer-group"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your education background

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "M.H. Saboo Siddik College of Engineering",
      logo: require("./assets/images/saboologoo.jpg"),
      subHeader: "Bachelor in Engineering in Information and Technology",
      duration: "July 2018 - May 2021",
      desc: "Gained insights of technologies and implementing it in real times",
      
    },
    {
      schoolName: "M.H. Saboo Siddik Polytechnic",
      logo: require("./assets/images/mhssplogo.jpg"),
      subHeader: "Diploma in Information and Technology",
      duration: "July 2015 - May 2018",
      desc: "Acquired valuable Knowledge from Basic to Advanced in various Technologies.",
      
      
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Project Intern at TIFR",
      company: "T.I.F.R.",
      companylogo: require("./assets/images/tifrlogo.png"),
      date: "September 2020 – April 2021",
      desc: "Full Stack Web Developer at TIFR",
      descBullets: [
        "Maintaining of Responsive Web Design and Web Components",
        "Integrating Website with Backend and reducing efforts for administrator."
      ]
    },
    {
      role: "Web Intern at Mindscript ",
      company: "Mindscript Pvt Ltd",
      companylogo: require("./assets/images/mindscriptlogo.png"),
      date: "June 2020 – January 2021",
      desc: "UI Developer at Mindscript Technologies",
      descBullets: [
        " Developing Responsive Web Application for Student, Staff and Administrator",
        " Maintaining and Updating the Database with Php and MySql"
      ]
    },
    {
      role: "Python Intern at Hertzsoft Tech",
      company: "Hertzsoft Technologies Pvt Ltd",
      companylogo: require("./assets/images/hertzsoftlogo.jpg"),
      date: "December 2019 – January 2020",
      desc: "Python Intern at Hertzsoft Technologies Pvt Ltd",
      descBullets: [
        "Developed a project backend using Django framework",
        "Developed a GUI based cake ordering app using Tkinter framework"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "mohsinessani", // Change to your github username to view your profile in Contact Section.
  showGithubProfile : "true",  // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Projects ',
  subtitle: 'Have a glimpse',
  projects: [
    {
      image: require('./assets/images/exp.webp'),
      projectName: "Expertise Learning",
      projectDesc: "A web based learning application for Student's, Staff and Administrator",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://explearning.rf.gd/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/friendfeed.webp'),
      projectName: "Friend's Feed",
      projectDesc: "A social networking site which allows users to post publicly or privately",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://friendfeed.rf.gd/',
        },
      ],
    },

{
      image: require('./assets/images/studocc.webp'),
      projectName: "Student Document Portal",
      projectDesc: "The purpose of this document is to build an online system to manage student documents and to ease the student management system",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://studoc.rf.gd/',
        },
      ],
    },


    {
      image: require('./assets/images/phoenix.webp'),
      projectName: "Phoenix Tutorials Website",
      projectDesc: "Classes Website",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://github.com/essanimohsin/Phoenix-Tutorials/',
        },
      ],
    },
    {
      image: require('./assets/images/cake.webp'),
      projectName: "Cake Ordering Application",
      projectDesc: "Cake Ordering App Made by Tkinter framework of Python",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://github.com/essanimohsin/Cake-Ordering-App',
        },
      ],
    },


    {
      image: require('./assets/images/car.webp'),
      projectName: "Line Following Robot",
      projectDesc: "A line follower robot which will carry the load from one point to another",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://github.com/essanimohsin/IOT-',
        },
      ],
    },

    {
      image: require('./assets/images/math.webp'),
      projectName: "Math Quizzer",
      projectDesc: "A simple maths quiz application for kids",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://github.com/essanimohsin/MathQuizzer',
        },
      ],
    },


    {
      image: require('./assets/images/fridge.webp'),
      projectName: "What's in Fridge",
      projectDesc: "An AI based application which suggests recipe based on the availability of food items",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'https://github.com/essanimohsin/Whats-In-Fridge',
        },
      ],
    },

  ],
  display: true, // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ACM Mumbai Hackathon",
      subtitle: "Winner of ACM Mumbai Hackathon",
      image: require("./assets/images/acm.webp"),
      footerLink: [
        { name: "Certificate of Participation", url: "https://drive.google.com/file/d/1SAITjlfqQ8aCguWVkwJk26cOIFgvzDCE/view?usp=sharing" },
        { name: "Certificate of Appreciation", url: "https://drive.google.com/file/d/1AiKdc2Xq4EgYhPr8g2kPM5Lqsiz3519q/view?usp=sharing" },
        { name: "Memorial moments", url: "https://drive.google.com/file/d/1LgajToZjUW613PyaxmaONLkl-ekcK9Bw/view?usp=sharing" }
      ]
    },
    {
      title: "Smart India Hackathon",
      subtitle: "Participated and selected as Top 9 Semi-Finalist in Smart India Hackathon",
      image: require("./assets/images/sih.webp"),
      footerLink: [{ name: "View Certification", url: "https://drive.google.com/file/d/1XhMjm7IgqidB7WzvjW_t9GqW40Pj18BJ/view?usp=sharing" }]
    },

    {
      title: "Front End Developer Intern at Mindscript Technologies Pvt Ltd",
      subtitle: "UI Intern at Mindscript Technologies Pvt Ltd",
      image: require("./assets/images/mindscript.webp"),
      footerLink: [
        { name: "Letter of Recommendation", url: "https://drive.google.com/file/d/1ojMjimG5EEA_Sd0r7B-L-tROjblnkx_o/view?usp=sharing" },
        { name: "Final Project", url: "http://explearning.rf.gd" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 9967867833",
  emailAddress: "mohsinessani@gmail.com",
};

//Twitter Section

const twitterDetails = {
  userName : "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
