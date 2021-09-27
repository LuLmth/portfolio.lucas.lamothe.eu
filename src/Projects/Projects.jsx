import react from "../assets/svg/react.svg";
import javascript from "../assets/svg/javascript.svg";
import php from "../assets/svg/php.svg";

import "./Projects.scss";

const Projects = _ => {
    const transitionHover = "transition duration-700 ease-in-out transform hover:translate-y-3 hover:scale-110";

    return (
        <div id="projects" className="Projects">
            <div className="container mx-auto my-14">
                <div className="Projects-title mb-12 text-center transition duration-1000 ease-in-out transform hover:scale-95">
                    <h2 className="text-4xl font-bold">Quelques projets 🚀</h2>
                </div>
                <div className="grid grid-cols-3">
                    <div className={"Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto " + transitionHover}>
                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-5">
                            <span className="Project-card-description-category text-base text-blue-500">iOS Mobile App</span>
                            <div className="Project-card-description-title">
                                <h3 className="text-lg font-bold">Suivi d'activités en direct</h3>
                                <span className="text-gray-500 text-xs">TrainMe.com</span>
                            </div>
                            <div className="Project-card-description-techno bg-white flex flex-col items-center justify-center rounded-3xl w-10 p-2 shadow-xl">
                                <img className="rounded-full h-6 w-6 mx-auto" src={react} alt="logo-react"/>
                            </div>
                        </div>
                        <div className="Project-card-images col-span-3">
                            <img className="h-full object-cover rounded-r-lg" src="https://cdn.dribbble.com/users/427857/screenshots/14390260/media/8613d80ed1b4b6f57679223da9524083.png?compress=1&resize=400x300" alt="logo-project"/>
                        </div>
                    </div>
                    <div className={"Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto " + transitionHover}>
                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-5">
                            <span className="Project-card-description-category text-base text-pink-500">Communication</span>
                            <div className="Project-card-description-title">
                                <h3 className="text-lg font-bold">Création de publications</h3>
                                <span className="text-gray-500 text-xs">Instagram</span>
                            </div>
                            <div className="Project-card-description-techno bg-white flex flex-col items-center justify-center rounded-3xl w-10 p-2 shadow-xl">
                                <img className="rounded-full h-6 w-6 mx-auto" src={javascript} alt="logo-react"/>
                            </div>
                        </div>
                        <div className="Project-card-images col-span-3">
                            <img className="h-full object-cover rounded-r-lg" src="https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png" alt="logo-project"/>
                        </div>
                    </div>
                    <div className={"Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto " + transitionHover}>
                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-5">
                            <span className="Project-card-description-category text-base text-purple-500">Web</span>
                            <div className="Project-card-description-title">
                                <h3 className="text-lg font-bold">Extension chrome automatisé</h3>
                                <span className="text-gray-500 text-xs">Amazon.com</span>
                            </div>
                            <div className="Project-card-description-techno flex flex-row space-x-3">
                                <div className="bg-white flex flex-col items-center justify-center rounded-3xl w-10 p-2 shadow-xl">
                                    <img className="rounded-full h-6 w-6 mx-auto" src={react} alt="logo-react"/>
                                </div>
                                <div className="bg-white flex flex-col items-center justify-center rounded-3xl w-10 p-2 shadow-xl">
                                    <img className="rounded-full h-6 w-6 mx-auto" src={php} alt="logo-react"/>
                                </div>
                            </div>
                        </div>
                        <div className="Project-card-images col-span-3">
                            <img className="h-full object-cover rounded-r-lg" src="https://psfiles.com/wp-content/uploads/2019/10/free-psd-iphone-xs-app-mobile-showcase-mock-up.jpg" alt="logo-project"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;