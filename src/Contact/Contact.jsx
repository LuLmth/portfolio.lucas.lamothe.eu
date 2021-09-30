import { useForm } from "react-hook-form";
import { useCookies } from 'react-cookie';
import emailjs from "emailjs-com";
import toastr from "toastr";

import "./Contact.scss";

const configEmailJS = {
    serviceID: "service_kcvtrg2",
    templateID: "template_202g84f",
    userID: "user_EfMO9fN1EC3FMIiHzrjmU"
}

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const Contact = _ => {
    const { register, handleSubmit, reset } = useForm({ shouldUseNativeValidation: true });
    const [ cookies, setCookie ] = useCookies(['emailSend']);

    const onSubmit = data => {
        const emailSendCount = parseInt(cookies.emailSend) || 0;

        reset();
        if (emailSendCount >= 5) {
            toastr.info("Vous avez atteint la limite de demande de contact.");
            return;
        }
        emailjs.send(configEmailJS.serviceID, configEmailJS.templateID, {
            contact_email: data.email,
            message: data.message
        }, configEmailJS.userID).then(function(response) {
            setCookie('emailSend', emailSendCount + 1);
            toastr.success("Email de contact envoyé avec succès.");
        }, function(error) {
            console.log('FAILED...', error);
            toastr.error("Erreur: Impossible d'envoyer l'email.");
        });
    };

    return (
        <div id="contact" className="Contact">
            <div className="container mx-auto my-14">
                <div className="Contact-title mb-16 text-center transition duration-1000 ease-in-out transform hover:scale-95">
                    <h2 className="text-4xl font-bold">Contact 📭</h2>
                </div>
                <div className="Contact-form">
                    <form className="max-w-xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -mx-3 mb-4">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-first-name">First Name</label>
                                <input {...register("firstName")} className="shadow appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="John" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="grid-last-name">Last Name</label>
                                <input {...register("lastName")} className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-last-name" type="text" placeholder="DOE" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email <span className="text-red-600">*</span></label>
                            <input {...register("email", {required: "Le champ email est obligatoire."})} className="shadow appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="text" placeholder="john.doe@example.com" />
                        </div>
                        <div className="mb-4">
                            <label className="block tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="email">Message <span className="text-red-600">*</span></label>
                            <textarea {...register("message", {required: "Le champ message est obligatoire."})} className="shadow appearance-none block w-full text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="grid-message" rows="5" placeholder="Votre message..." />
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 w-full border border-blue-500 hover:border-transparent rounded">Confirmer</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;