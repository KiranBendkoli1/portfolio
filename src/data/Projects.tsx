import bb0 from '../assets/images/project/bb1-min.png'
import bb1 from '../assets/images/project/bb2-min.png'
import bb2 from '../assets/images/project/bb3-min.png'
import em0 from '../assets/images/project/em1.jpg'
import em1 from '../assets/images/project/em2.jpg'
import em2 from '../assets/images/project/em3.jpg'
import gf0 from '../assets/images/project/gg1.png'
import gf1 from '../assets/images/project/gg2.png'
import gf2 from '../assets/images/project/gg.png'
import lqs0 from '../assets/images/project/lqs1.jpg'
import lqs1 from '../assets/images/project/lqs2.jpg'
import lqs2 from '../assets/images/project/lqs2-min.png'
import cc0 from '../assets/images/project/ctt1-min.png'
import cc1 from '../assets/images/project/ctt2-min.png'
import cc2 from '../assets/images/project/ctt3-min.png'
import mrs0 from '../assets/images/project/mrs0-min.png'
import mrs1 from '../assets/images/project/mrs1-min.png'
import mrs2 from '../assets/images/project/mrs2-min.png'
import { ProjectType } from 'types/common'

const projects: ProjectType[] = [
  {
    index: 0,
    title: 'Blood Bank Management System',
    domain: 'Web Development',
    img: bb1,
    img1: bb0,
    img2: bb1,
    img3: bb2,
    islink: true,
    link: 'https://streamless-endeavor.000webhostapp.com/index.php',
    desc: 'This is web based blood bank management system which can be use as a solution over traditional blood bank management system',
    source: 'https://github.com/KiranBendkoli1/blood-bank-management-system'
  },
  {
    index: 1,
    title: 'Lets Quick Share',
    domain: 'Cross Platform',
    img: lqs0,
    img1: lqs0,
    img2: lqs1,
    img3: lqs2,
    islink: true,
    link: 'https://lets-quick-share.web.app/#/',
    desc: 'This app helps users to share important texts and links between devices. You can download android app from github release and you can use live link to visit web app',
    source: 'https://github.com/KiranBendkoli1/lets-quick-share'
  },
  {
    index: 2,
    title: 'Chrome Tab Tracker',
    domain: 'google chrome extension',
    img: cc0,
    img1: cc0,
    img2: cc1,
    img3: cc2,
    islink: true,
    link: 'https://tab-tracker-ext.web.app/',
    desc: "Google chrome extension which saves employees/students visited site's url directly to the cloud",
    source: 'https://github.com/KiranBendkoli1/Chrome-Tab-Tracker'
  },
  {
    index: 3,
    title: 'Expense Managaer App',
    domain: 'Android',
    img: em0,
    img1: em0,
    img2: em1,
    img3: em2,
    islink: true,
    desc: 'This is an android app which can track your daily expenses with the help of this app you can control your expenses',
    source: 'https://github.com/KiranBendkoli1/Expense-Manager',
    link: 'https://github.com/KiranBendkoli1/Expense-Manager/releases/download/v2.0.0/ExpenseManagerV2.0.0.apk'
  },
  {
    index: 4,
    title: 'Github Information finder',
    domain: 'Web Development',
    img: gf0,
    img1: gf0,
    img2: gf1,
    img3: gf2,
    islink: true,
    link: 'http://coderays.me/github-information-finder/',
    desc: "This is web app which helps you to find users information based on their username you can also find their repositorie's brief information , followings and followers information through it",
    source: 'https://github.com/KiranBendkoli1/github-information-finder'
  },
  {
    index: 5,
    title: 'Movie Recommendation System',
    domain: 'Machine Learning',
    img: mrs0,
    img1: mrs0,
    img2: mrs1,
    img3: mrs2,
    islink: true,
    link: 'https://tmdbmovierecommendationsystem.herokuapp.com/',
    desc: 'Movie recommendation system recommends you movies based on movies you watched you just neet to select movie of your intrest and it will recommends you five different movies based on content similarity. ',
    source: 'https://github.com/KiranBendkoli1/movie-recommendation-system'
  }
]

export default projects
