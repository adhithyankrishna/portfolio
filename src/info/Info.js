import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: " Adithyan m",
    lastName: "",
    initials: " A-K ", // the example uses first and last, but feel free to use three or more if you like.
    position: "Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the India'
        },
        {
            emoji: "💼",
            text: "Student "
        },
        {
            emoji: "📧",
            text: "krishnaadhithyan@gmail.com"
        }
    ],
    socials: [
        
        {
            link: "https://www.instagram.com/adhithyan_krishna/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/adhithyankrishna",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "www.linkedin.com/in/adithyan-krishna",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/ADHITHY72036683",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello, my name is Adithyan M, and I am currently pursuing my studies at DR NGP Institute of Technology in Coimbatore. I am passionate about programming and fascinated by new technologies. From a young age, I have been captivated by the world of computers and the endless possibilities they offer. As a programmer, I enjoy exploring innovative solutions and tackling complex challenges. Whether it's designing efficient algorithms, developing web applications, or diving into artificial intelligence, I thrive on the thrill of learning and applying new concepts. My dedication to honing my programming skills has allowed me to stay up-to-date with the latest advancements in the field. I am eager to contribute to the ever-evolving tech industry and make a positive impact through my work. Through my portfolio, I aim to showcase my projects and highlight my expertise in various programming languages and technologies. I am excited to embark on new ventures, collaborate with fellow enthusiasts, and create meaningful solutions that shape the future of technology",
    skills:
        {
            proficientWith: ['java', 'flutter', 'python', 'github', 'bootstrap', 'c','figma'],
            exposedTo: ['Android Studio','Meachine Learning','react js','Firebase']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'theater',
            emoji: '🎭'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'Music',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Student Information System",
            source: "https://github.com/adhithyankrishna/campus_flow", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Web Scraping ",
            source: "https://github.com/adhithyankrishna/WebScraping-selenium-bs4-word-document-",
            image: mock2
        },
        {
            title: "Online chating Application",
            source: "https://github.com/adhithyankrishna/Thotti.2.0",
            image: mock3
        },
       
       
    ]
}