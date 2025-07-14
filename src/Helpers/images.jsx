// Header Images Start //
export const webLogo = "./src/assets/images/web-logo.png"
export const navbar = "./src/assets/images/navbar.jpg";
export const shop = "./src/assets/images/shop.jpg";
// Header Images End //
// Home One Banner Images Start //
export const bg = "./src/assets/images/home1bg.png";
// Home One Banner Images End //
import collection1 from '../assets/images/mens-ware.jpg';
import collection2 from '../assets/images/ladies-ware.jpg'
import collection3 from '../assets/images/kids-ware.jpg'
import collection4 from '../assets/images/smart-watch.jpg'
import collection5 from '../assets/images/sunglasses.jpg'
export const collections = [
    {
        image:collection1,
        name:"Men's Wear"
    },
    {
        image:collection2,
        name:"Ladies Wear"
    },
    {
        image:collection3,
        name:"Kids Wear"
    },
    {
        image:collection4,
        name:"Smart Watch"
    },
    {
        image:collection5,
        name:"Sunglasses"
    },
]

// Footer Start //
import { FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail, FiGithub, FiYoutube, FiGitlab } from "react-icons/fi";

export const footerSocial = [
    {
        icon: FiShoppingCart,
        link: 'https://1.envato.market/shreethemes-portfolio'
    },
    {
        icon: FiDribbble,
        link: 'https://dribbble.com/shreethemes'
    },
    {
        icon: FiLinkedin,
        link: 'http://linkedin.com/company/shreethemes'
    },
    {
        icon: FiFacebook,
        link: 'https://www.facebook.com/shreethemes'
    },
    {
        icon: FiInstagram,
        link: 'https://www.instagram.com/shreethemes'
    },
    {
        icon: FiTwitter,
        link: 'https://twitter.com/shreethemes'
    },
    {
        icon: FiMail,
        link: 'mailto:support@shreethemes.in'
    },
];

export const footerShopping1 = [
    'Men', 'Jackets & Coats', 'Jeans', 'Loungewear', 'Polo shirts', 'Shirts'
];

export const footerShopping2 = [
    'Shorts', 'Suits Swimwear', 'T-shirts', 'Tracksuits', 'Trousers', 'Shirts'
];

export const footerShopping3 = [
    'My account', 'Order History', 'Wish List', 'Newsletter', 'Affiliate', 'Returns'
];

export const footerServices = [
    {
        icon: 'mdi mdi-truck-check-outline',
        name: 'Free delivery'
    },
    {
        icon: 'mdi mdi-archive',
        name: 'Non-contact shipping'
    },
    {
        icon: 'mdi mdi-cash-multiple',
        name: 'Money-back guarantee'  // Fixed typo: "quarantee" to "guarantee"
    },
    {
        icon: 'mdi mdi-shield-check',
        name: 'Secure payments'
    },
];
// Footer Json End  //