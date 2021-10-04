import "./Projects.scss";

const Projects = ({ projects }) => {
    const transitionHover = "transition duration-700 ease-in-out transform hover:translate-y-3 hover:scale-110";

    return (
        <div id="projects" className="Projects">
            <div className="Projects-container container mx-auto my-14">
                <div className="Projects-title mb-16 text-center transition duration-1000 ease-in-out transform hover:scale-95">
                    <h2 className="text-4xl font-bold">Quelques projets 🚀</h2>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-"+(projects.length < 3 ? projects.length : 3)}>
                    {
                        projects.map(project => {
                            return (
                                <a key={project.id} href={project.url}>
                                    <div className={"Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto " + transitionHover}>
                                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-5">
                                            <span className={"Project-card-description-category text-base text-"+project.color+"-500"}>{project.category}</span>
                                            <div className="Project-card-description-title">
                                                <h3 className="text-lg font-bold">{project.title}</h3>
                                                <span className="text-gray-500 text-xs">{project.company}</span>
                                            </div>
                                            <div className="Project-card-description-techno flex flex-row space-x-3">
                                                {
                                                    project.technos.map(techno => {
                                                        return (
                                                            <div key={techno.id} className="bg-white flex flex-col items-center justify-center rounded-3xl w-10 p-2 shadow-xl">
                                                                <img className="rounded-full h-6 w-6 mx-auto" src={techno.svg} alt="logo-react"/>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className="Project-card-images col-span-3">
                                            <img className="h-full object-cover rounded-r-lg" src={project.image} alt="logo-project"/>
                                        </div>
                                    </div>
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;