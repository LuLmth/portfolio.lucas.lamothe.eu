import react from "./assets/svg/react.svg";
import figma from "./assets/svg/figma.svg";

const projects = [
    {
        id: 1,
        color: "green",
        category: "Innovation",
        title: "TrackMyPlate - Projet de fin d'études",
        company: "Epitech Bordeaux",
        technos: [{id: 1, svg: figma}],
        image: "https://cdn.dribbble.com/users/427857/screenshots/14390260/media/8613d80ed1b4b6f57679223da9524083.png?compress=1&resize=400x300",
        url: "https://trackmyplate.fr"
    },
    {
        id: 2,
        color: "yellow",
        category: "Front End",
        title: "Mon portfolio",
        company: "lucas.lamothe.eu",
        technos: [{id: 1, svg: react}],
        image: "https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png",
        url: "https://github.com/LucasLamothe/portfolio.lucas.lamothe.eu"
    }
];

export default projects;