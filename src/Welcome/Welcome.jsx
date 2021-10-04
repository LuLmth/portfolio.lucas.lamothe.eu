import php from "../assets/svg/php.svg";
import react from "../assets/svg/react.svg";
import javascript from "../assets/svg/javascript.svg";
import me from "../assets/img/me.png";
import cv from "../assets/CV_LAMOTHE_Lucas.pdf";

import "./Welcome.scss";

const Welcome = _ => {
    const transitionHover = "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";

    return (
        <div className="Welcome">
            <div className="Welcome-container container mx-auto">
                <div className="grid grid-cols-2">
                    <div className="Welcome-left-column">
                        <h1 className={"Welcome-title text-5xl 2xl:text-6xl font-bold mb-10 " + transitionHover}>Hello, moi c'est Lucas 👋</h1>
                        <p className="Welcome-text text-base w-2/3">
                            Je suis <span className="font-bold">développeur web</span> freelance et
                            étudiant en troisième année à <span className="font-bold">Epitech Bordeaux</span>.
                            Je suis quelqu'un de sportif et passionné de nouvelles technologies, toujours
                            à l'affut des dernières annonces.
                        </p>
                        <p className="Welcome-text text-base w-2/3 mt-5">
                            Vous pouvez retrouver mon CV <a className="font-bold hover:underline" href={cv} target="_blank" rel="noreferrer">ici même 📜</a>
                        </p>
                        {/*<p className="Welcome-see-more Welcome-text text-base w-1/3 mt-8">
                            <a href="#contact">
                                <span className="Welcome-finger"></span><span className="pl-2">Me contacter</span>
                            </a>
                        </p>*/}
                    </div>
                    <div className="Welcome-right-column">
                        <div className="Welcome-card flex flex-col items-center justify-center rounded-lg w-64 p-5 mx-auto shadow-xl">
                            <img src={me} alt="" className="rounded-full h-32 w-32 mx-auto shadow-md"/>
                            <div className={"Welcome-card-tag rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs py-1 px-3 " + transitionHover}>
                                Web/Mobile
                            </div>
                            <p className="text-base font-bold pt-5 pb-2">Lucas Lamothe</p>
                        </div>
                        <div className="Welcome-card-icon">
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-3xl w-22 p-3 shadow-xl " + transitionHover}>
                                <img src={php} alt="logo-php" className="rounded-full h-12 w-12 mx-auto"/>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-3xl w-22 p-3 shadow-xl " + transitionHover}>
                                <img src={react} alt="logo-react" className="rounded-full h-12 w-12 mx-auto"/>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-3xl w-22 p-3 shadow-xl " + transitionHover}>
                                <img src={javascript} alt="logo-javascript" className="rounded-full h-12 w-12 mx-auto"/>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " + transitionHover}>
                                <p className="text-base">📜 Wordpress</p>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " + transitionHover}>
                                <p className="text-base">⭐️ Site vitrine</p>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " + transitionHover}>
                                <p className="text-base">🔨 Maintenance</p>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " + transitionHover}>
                                <p className="text-base">🛒 E-Commerce</p>
                            </div>
                            <div className={"Welcome-card-icon-child flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " + transitionHover}>
                                <p className="text-base">⚙️ Administration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
