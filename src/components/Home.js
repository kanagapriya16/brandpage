import React from 'react';
import logo from "../assets/logo.png";
import '@fortawesome/fontawesome-free/css/all.min.css';
export const Home = () => {
    return (
        <div className="text-white flex flex-col items-center h-screen" style={{ background: 'linear-gradient(180deg, rgba(88,45,128,1) 0%, rgba(29,202,221,1) 60%, rgba(27,206,223,1) 100%)' }}>
            <div className="text-center justify-center">
                <img src={logo} alt="Logo" className="mb-4 ml-14 md:ml-28 lg:ml-28" style={{ maxWidth: '300px' }} />
                <p className="text-xl md:text-2xl lg:text-2xl xl:text-2xl mb-2">COMING SOON</p>
                <p className="mt-2 text-sm md:text-base lg:text-lg xl:text-xl mb-4">Get in touch</p>
                <div className="flex flex-col sm:flex-col gap-4 justify-center lg:justify-start">
                    <button className="bg-[#00d4ff] text-black font-normal py-4 px-14  rounded-[50px]">
                        <i className="fas fa-phone mr-2 float-start text-white"></i> <a href="tel:+1 408-931-4532">Phone</a>
                    </button>
                    <button className="bg-[#00d4ff] text-black font-normal py-4 px-14 rounded-[50px]">
                        <i className="fab fa-instagram mr-2 float-start text-white"></i> <a href="https://instagram.com">Instagram</a>
                    </button>
                    <button className="bg-[#00d4ff] text-black font-normal py-4 px-14 rounded-[50px]">
                        <i className="fas fa-envelope mr-2 float-start text-white"></i> <a href="mailto:ksboard@karaisol.com">Email</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
