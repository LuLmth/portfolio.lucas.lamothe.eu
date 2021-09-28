import "./Footer.scss";

const Footer = _ => {
    return (
        <div className="Footer shadow-inner">
            <div className="container h-full mx-auto mt-14">
                <div className="Footer-middle-column flex flex-col items-center justify-center h-full">
                    <span className="text-center">
                        <span className="text-sm">®️ 2021 - Lucas LAMOTHE</span>
                        <br/>
                        <span className="text-xs">Développeur web freelance</span>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Footer;