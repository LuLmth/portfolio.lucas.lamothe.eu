import react from "../assets/svg/react.svg";
import javascript from "../assets/svg/javascript.svg";
import php from "../assets/svg/php.svg";

const Contact = _ => {
    return (
        <div className="Contact">
            <div className="container mx-auto my-14">
                <div className="Contact-title mb-16 text-center transition duration-1000 ease-in-out transform hover:scale-95">
                    <h2 className="text-4xl font-bold">Contact 📭</h2>
                </div>
                <div className="Contact-form">
                    <form className="max-w-xl mx-auto">
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-first-name">First Name</label>
                                <input className="shadow appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">Last Name</label>
                                <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="DOE" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input className="shadow appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="john.doe@example.com" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;