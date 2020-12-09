import { project } from "../types/module";
const projects: project[] = [


    {
        key: 1,
        image: {
            url: "quiz.png",
            title: "Logo",
            height: "313px",
            width:"100%",
            backgroundSize: "contain",
          //  website: "https://shrotsatya.github.io/QuizApp"
        },
        title: "E-commerce website",
        content: "A shopping application built using HTML,CSS,JavaScript,NodeJs and MongoDb as a database with admin and user panel.",
       // github: "https://github.com/shrotsatya/QuizApp.git"
    }, {
        key: 2,
        image: {
            url: "breakout.gif",
            title: "Chat",
            height: "313px",
            width:"100%",
            backgroundSize: "contain"
        },
        title: "Online chatting website",
        content: "Shy in life? Hang out virtually and make new friends.",
       // github: "https://github.com/fanatic75/Breakout.git"
    }, {
        key: 3,
        image: {
            url: "blockchain.png",
            title: "Natours",
            height: "313px",
            width:"100%",
            backgroundSize: "cover"
        },
        title: "Natours Web page",
        content: "Front end for Natours website built using advance CSS features and SASS",
       // github: "https://github.com/fanatic75/Basic-Blockchain.git"
    }, {
        key: 4,
        image: {
            url: "burger.gif",
            title: "Burger Builder",
            height: "313px",
            width:"100%",
            backgroundSize: "contain"
        },
        title: "Burger Builder",
        content: "A Burger builder web app built using ReactJs and Firebase where one can build his burger and order the same.",

    }
];
export default projects.reverse();
