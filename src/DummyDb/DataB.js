import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
//Testimonials image
import image1 from "../Assets/images/adire.jpg";
import image2 from "../Assets/images/masque.jpg";
import image3 from "../Assets/images/more.jpg";

//Recording thumbnails
import undraw1 from "../Assets/images/undraw_content_team_re_6rlg.svg";
import undraw2 from "../Assets/images/undraw_movie_night_re_9umk.svg";
import undraw3 from "../Assets/images/undraw_online_stats_0g94.svg";
import swiper1 from "../Assets/images/african-american-g97b01d64c_1920.jpg";
import swiper2 from "../Assets/images/smiling-g1b1c4bb77_1920.jpg";
import swiper3 from "../Assets/images/monstera-g74f94a21e_1920.jpg";
import swiper4 from "../Assets/images/make-up-g469112bc7_1920.jpg";

//Team member
import User1 from "../Assets/images/user1.jpg";
import User2 from "../Assets/images/user2.avif";
import User3 from "../Assets/images/user3.jpg";
import User4 from "../Assets/images/user4.jpg";
import User5 from "../Assets/images/user5.jpg";
import User6 from "../Assets/images/user6.jpg";

// Social Media icon
const Facebook = <BsFacebook size={25} />;
const Instagram = <BsInstagram size={25} />;
const Twitter = <BsTwitter size={25} />;
const Youtube = <BsYoutube size={25} />;

//Navlinks
export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Oriki",
    path: "/oriki",
  },
  {
    name: "Town",
    path: "/town",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

//Footer links
export const Flinks = [
  {
    links: "About",
    path: "/about",
  },
  {
    links: "Town",
    path: "/town",
  },
  {
    links: "Blog",
    path: "/blog",
  },
  {
    links: "Latest",
  },
  {
    links: "Newsletter",
  },
];

//Social Media links
export const SocialMedia = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "sdooivvhiovhv",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "sdooivvhiovhv",
  },
  {
    name: "Twitter",
    icon: Twitter,
    link: "sdooivvhiovhv",
  },
  {
    name: "Youtube",
    icon: Youtube,
    link: "sdooivvhiovhv",
  },
];

//carousel link
export const carousel = [
  {
    Image: image1,
  },
  {
    Image: image2,
  },
  {
    Image: image3,
  },
];
// Homepage Content
export const Content = [
  {
    icon: undraw1,
    title: "history research",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et, iure corrupti id, excepturi facilis provident minima reprehenderit cum non dignissimos atque sequi culpa distinctio.",
  },
  {
    icon: undraw2,
    title: "african language session",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et, iure corrupti id, excepturi facilis provident minima reprehenderit cum non dignissimos atque sequi culpa distinctio.",
  },
  {
    icon: undraw3,
    title: "speaking & workshop",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus et, iure corrupti id, excepturi facilis provident minima reprehenderit cum non dignissimos atque sequi culpa distinctio.",
  },
];

// Testimonial
export const swiperContent = [
  {
    image: swiper1,
    name: "Bolatito Callum",
    comment:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aut itaque nobis, obcaecati quibusdam provident voluptatum fuga recusandae necessitatibus dolores?",
    state: "Lagos State",
  },
  {
    image: swiper2,
    name: "Ogunleye Seyi",
    comment:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aut itaque nobis, obcaecati quibusdam provident voluptatum fuga recusandae necessitatibus dolores?",
    state: "Ogun State",
  },
  {
    image: swiper3,
    name: "Adegoke Adeola",
    comment:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aut itaque nobis, obcaecati quibusdam provident voluptatum fuga recusandae necessitatibus dolores?",
    state: "Osun State",
  },
  {
    image: swiper4,
    name: "Micheal Oyelana",
    comment:
      " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam aut itaque nobis, obcaecati quibusdam provident voluptatum fuga recusandae necessitatibus dolores?",
    state: "Oyo State",
  },
];

export const Team_mate = [
  {
    id: 1,
    name: "prscilia Kent",
    role: "Team Lead",
    img: User1,
    fblink: "",
    twitter: "",
  },
  {
    id: 2,
    name: "Adeboye ife",
    role: "Asst Team Lead",
    img: User2,
    fblink: "",
    twitter: "",
  },
  {
    id: 3,
    name: "Femi Adeola",
    role: "Designer",
    img: User3,
    fblink: "",
    twitter: "",
  },
  {
    id: 4,
    name: "Debo gbenro",
    role: "Product Manager",
    img: User4,
    fblink: "",
    twitter: "",
  },
  {
    id: 5,
    name: "Olugbemi Olayinka",
    role: "Journalist",
    img: User5,
    fblink: "",
    twitter: "",
  },
  {
    id: 6,
    name: "gbenga Ashafa",
    role: "Marketer",
    img: User6,
    fblink: "",
    twitter: "",
  },
];

export const Town = [
  {
    id: "town-1",
    title: "Àkúrẹ́",
    desc: "including all ancient Yoruba towns under Ondo and Èkìtì",
  },
  {
    id: "town-2",
    title: "Àpá",
    desc: "all ancient Yoruba towns native to Badargry Kingdom",
  },
  {
    id: "town-3",
    title: "Èkó",
    desc: "including Ẹ̀pẹ́, Ìkòròdú, and all other indigenous families native to Lagos Island and Etí-Ọ̀sà",
  },
  {
    id: "town-4",
    title: "Ẹdẹ",
    desc: "including Ìlá-Ọ̀ràngún, Èjìgbò, and other towns under Ẹdẹ",
  },
  {
    id: "town-5",
    title: "Ẹ̀gbá",
    desc: "including Ìlá-Ọ̀ràngún, Èjìgbò, and other towns under Ẹdẹ",
  },
  {
    id: "town-6",
    title: "Ẹ̀gbádò",
    desc: "including families from Ìlaròó and other towns under Yewa kingdom",
  },
  {
    id: "town-7",
    title: "Ìbàdàn",
    desc: "including of all the major clans and towns under the entire Councils of Ibadan cities",
  },
  {
    id: "town-8",
    title: "Ifẹ̀",
    desc: "including Modákẹ́kẹ́ and other surrounding towns under ancient Ifẹ̀ Kingdom",
  },
  {
    id: "town-9",
    title: "Ìjẹ́bú",
    desc: "including Rẹ́mọ, Ṣàgámù, and all other Ìjẹ́bú settlements",
  },
  {
    id: "town-9",
    title: "Ìjẹ̀ṣà",
    desc: "including all towns under Iléṣà, including Ẹ̀sà-Òkè",
  },
  {
    id: "town-10",
    title: "Ìlọrin",
    desc: "including all native Yoruba towns in Kwara and Kogi State",
  },
  {
    id: "town-11",
    title: "Ògbómọ̀ṣọ̀ọ́",
    desc: "all towns thought to fall under the geography of Òkè-Ògùn in Ọ̀yọ́ State may be found here",
  },
  {
    id: "town-12",
    title: "Òṣogbo",
    desc: "including of Ìkìrun, Ìkirè, Èjìgbò, and other neighboring towns to Òṣogbo",
  },
  {
    id: "town-13",
    title: "Ọ̀fà ",
    desc: "Yoruba towns under near Ilorin or thoguth to be in Kwara State may be found under here",
  },
  {
    id: "town-14",
    title: "Ọ̀yọ́",
    desc: "including Ìsẹ́yìn, Ṣakí,̣ and other surrounding ancient towns native to Ọ̀yọ́ kingdom",
  },
];
