import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
// import mock3 from "../img/mock3.png"
// import mock4 from "../img/mock4.png"
// import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */



export const info = {
    firstName: "Francisco",
    lastName: "Erramuspe",
    initials: "fe", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🧉',
            text: 'fueled by mate'
        },
        {
            emoji: '🇺🇾',
            text: 'born in Uruguay'
        },
        {
            emoji: '🇺🇸',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "software engineer at StartQA"
        },
        {
            emoji: "📧",
            text: "franciscoerramuspe91@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.instagram.com/francisco.erramuspe/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/franciscoerramuspe",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/francisco-erramuspe/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.youtube.com/channel/UCPVHKEqvOyuuta7La6oG_3g",
            icon: "fa fa-youtube",
            label: 'twitter'
        }

// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I was born in Uruguay, a small country in South America. At the age of 18, I had the possibility to emmigrate to the US with an academic-athletic scholarship. I started my journey at Troy University (Alabama). Here, I graduated with a Computer Science degree in May of 2023. Currently, I am pursuing a Master of Software Engineering at Monmouth University, expecting to graduate in December of 2024.",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html', 'css', 'python', 'tailwind', 'aws', 'node.js','mongoDB', 'MySQL'],
            exposedTo: ['Google Cloud', 'vue.js']
        }
    ,
    hobbies: [
        {
            label: 'lifting',
            emoji: '🏋🏻‍♂️'
        },
        {
            label: 'tennis',
            emoji: '🎾'
        },
        {
            label: 'vlogging',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://cripto-price-tracker.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/franciscoerramuspe/cripto-react", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://expense-tracker-react-two.vercel.app/",
            source: "https://github.com/franciscoerramuspe/expense-tracker-react",
            image: mock2
        },
        // {
        //     title: "Project 3",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock3
        // },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}