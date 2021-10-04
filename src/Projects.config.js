import react from "./assets/svg/react.svg";
import javascript from "./assets/svg/javascript.svg";
import php from "./assets/svg/php.svg";

const projects = [
    {
        id: 1,
        color: "blue",
        category: "iOS Mobile App",
        title: "Suivi d'activités en direct",
        company: "TrainMe.com",
        technos: [react],
        image: "https://cdn.dribbble.com/users/427857/screenshots/14390260/media/8613d80ed1b4b6f57679223da9524083.png?compress=1&resize=400x300"
    },
    {
        id: 2,
        color: "yellow",
        category: "Communication",
        title: "Création de publications",
        company: "Instagram",
        technos: [javascript],
        image: "https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png"
    },
    {
        id: 3,
        color: "purple",
        category: "Web",
        title: "Extension chrome automatisé",
        company: "Amazon.com",
        technos: [react, php],
        image: "https://psfiles.com/wp-content/uploads/2019/10/free-psd-iphone-xs-app-mobile-showcase-mock-up.jpg"
    }
];

export default projects;