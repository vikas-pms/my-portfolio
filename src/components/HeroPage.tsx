import React from 'react';

function HeroPage() {
    return (
        <>
            <div className="hero min-h-screen  p-4 bg-black">
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
                    <img
                        src="/1722336887739-removebg-preview.png"
                        className="max-w-xs w-full lg:max-w-sm rounded-full shadow-2xl mb-4 lg:mb-0"
                        alt="Hero"
                    />
                    <div className="text-center lg:text-left px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                            Hey, I`&apos;`m <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent font-sans">
                                Vikas Kumar
                            </span>
                        </h1>
                        <h2 className="font-bold text-white mb-4">
                            A Full Stack MERN Developer Lucknow.
                        </h2>
                        <p className="py-4 bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent text-sm md:text-base">
                        I `&apos;` m build dynamic web applications using the MERN stack and have over a year of experience in both front-end and back-end development. I`&apos;`m passionate about coding and continuously learning, so let&lsquos connect to discuss how I can help bring your ideas to life!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroPage;
