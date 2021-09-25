const Projects = _ => {
    return (
        <div className="Projects">
            <div className="container mx-auto my-14">
                <div className="grid grid-cols-3">
                    <div className="Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto">
                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-3">
                            <span className="text-lg text-pink-500">E-commerce</span>
                            <h3 className="text-xl font-bold">Amazon website</h3>
                            <span className="text-gray-500 text-sm">Amazon.com</span>
                        </div>
                        <div className="Project-card-images col-span-3">
                            <img className="h-full object-cover rounded-r-lg" src="https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png" alt="logo-project"/>
                        </div>
                    </div>
                    <div className="Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto">
                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-3">
                            <span className="text-lg text-pink-500">E-commerce</span>
                            <h3 className="text-xl font-bold">Amazon website</h3>
                            <span className="text-gray-500 text-sm">Amazon.com</span>
                        </div>
                        <div className="Project-card-images col-span-3">
                            <img className="h-full object-cover rounded-r-lg" src="https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png" alt="logo-project"/>
                        </div>
                    </div>
                    <div className="Project-card grid grid-cols-8 rounded-lg w-3/4 h-52 shadow-2xl mx-auto">
                        <div className="Project-card-description col-span-5 flex flex-col justify-center px-3">
                            <span className="text-lg text-pink-500">E-commerce</span>
                            <h3 className="text-xl font-bold">Amazon website</h3>
                            <span className="text-gray-500 text-sm">Amazon.com</span>
                        </div>
                        <div className="Project-card-images col-span-3">
                            <img className="h-full object-cover rounded-r-lg" src="https://assets.justinmind.com/wp-content/uploads/2020/08/mockup-templates-to-download-now.png" alt="logo-project"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;