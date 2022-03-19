import php from "../assets/svg/php.svg";
import react from "../assets/svg/react.svg";
import typescript from "../assets/svg/typescript.svg";
import me from "../assets/img/me_top.jpg";
import cv from "../assets/CV_LAMOTHE_Lucas.pdf";

import "./Welcome.scss";

const Welcome = (_) => {
  const transitionHover =
    "transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110";

  return (
    <div className="Welcome">
      <div className="Welcome-container container mx-auto">
        <div className="grid lg:grid-cols-2">
          <div className="Welcome-left-column order-2 lg:order-1 mt-16 lg:mt-0 px-2 lg:px-0">
            <h1
              className={
                "Welcome-title text-3xl lg:text-5xl 2xl:text-6xl font-bold mb-10 " +
                transitionHover
              }
            >
              Hello, moi c'est Lucas 👋
            </h1>
            <p className="Welcome-text text-sm lg:text-base lg:w-2/3">
              Je suis <span className="font-bold">développeur web</span>{" "}
              freelance et étudiant en troisième année à{" "}
              <span className="font-bold">Epitech Bordeaux</span>. Je suis
              quelqu'un de sportif et passionné de nouvelles technologies,
              toujours à l'affut des dernières annonces.
            </p>
            <p className="Welcome-text text-sm lg:text-base lg:w-2/3 mt-5">
              Vous pouvez retrouver mon CV{" "}
              <a
                className="font-bold hover:underline"
                href={cv}
                target="_blank"
                rel="noreferrer"
              >
                ici même 📜
              </a>
            </p>
          </div>
          <div className="Welcome-right-column order-1 lg:order-2">
            <div className="Welcome-card flex flex-col items-center justify-center rounded-lg w-64 pt-8 pb-5 sm:p-5 mx-auto shadow-xl">
              <img
                src={me}
                alt=""
                className="rounded-full h-32 w-32 mx-auto shadow-md"
              />
              <div
                className={
                  "Welcome-card-tag rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-xs py-1 px-3 " +
                  transitionHover
                }
              >
                Web/Mobile
              </div>
              <p className="text-base font-bold pt-5 pb-2">Lucas Lamothe</p>
            </div>
            <div className="Welcome-card-icon">
              <div
                className={
                  "Welcome-card-icon-child flex flex-col items-center justify-center rounded-3xl w-16 lg:w-22 py-3 lg:py-2 px-3 shadow-xl " +
                  transitionHover
                }
              >
                <img
                  src={react}
                  alt="logo-react"
                  className="rounded-full h-10 w-10 lg:h-12 lg:w-12 mx-auto"
                />
              </div>
              <div
                className={
                  "Welcome-card-icon-child flex flex-col items-center justify-center rounded-3xl w-16 lg:w-22 py-3 lg:py-2 px-3 shadow-xl " +
                  transitionHover
                }
              >
                <img
                  src={php}
                  alt="logo-php"
                  className="rounded-full h-10 w-10 lg:h-12 lg:w-12 mx-auto"
                />
              </div>
              <div
                className={
                  "Welcome-card-icon-child flex flex-col items-center justify-center rounded-3xl w-16 lg:w-22 py-3 lg:py-2 px-3 shadow-xl " +
                  transitionHover
                }
              >
                <img
                  src={typescript}
                  alt="logo-typescript"
                  className="rounded-full h-10 w-10 lg:h-12 lg:w-12 mx-auto"
                />
              </div>
              <div
                className={
                  "Welcome-card-icon-child hidden lg:flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " +
                  transitionHover
                }
              >
                <p className="text-base">📜 Wordpress</p>
              </div>
              <div
                className={
                  "Welcome-card-icon-child hidden lg:flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " +
                  transitionHover
                }
              >
                <p className="text-base">⭐️ Site vitrine</p>
              </div>
              <div
                className={
                  "Welcome-card-icon-child hidden lg:flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " +
                  transitionHover
                }
              >
                <p className="text-base">🔨 Maintenance</p>
              </div>
              <div
                className={
                  "Welcome-card-icon-child hidden lg:flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " +
                  transitionHover
                }
              >
                <p className="text-base">🛒 E-Commerce</p>
              </div>
              <div
                className={
                  "Welcome-card-icon-child hidden lg:flex flex-col items-center justify-center rounded-xl w-44 p-3 shadow-2xl " +
                  transitionHover
                }
              >
                <p className="text-base">⚙️ Administration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
