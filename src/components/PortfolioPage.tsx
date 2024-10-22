"use client"
import React from 'react'
import { useEffect } from "react";

function PortfolioPage() {



    useEffect(() => {

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            const scrollers: NodeListOf<Element> = document.querySelectorAll(".scroller");

            scrollers.forEach((scroller: Element) => {
                (scroller as HTMLElement).setAttribute("data-animated", "true");

                const scrollerInner: HTMLElement | null = scroller.querySelector(".scroller__inner") as HTMLElement;
                if (scrollerInner) {
                    const scrollerContent: HTMLElement[] = Array.from(scrollerInner.children) as HTMLElement[];

                    scrollerContent.forEach((item) => {
                        const duplicatedItem: HTMLElement = item.cloneNode(true) as HTMLElement;
                        duplicatedItem.setAttribute("aria-hidden", "true");
                        scrollerInner.appendChild(duplicatedItem);
                    });
                } else {
                    console.error("scrollerInner not found for:", scroller);
                }
            });
        }

    }, []);

    return (
        <>

            <section id='experience' className=" bg-black  text-yellow-500">
                <img className='mx-auto' src="/flower-removebg-preview.png" alt="" style={{ height: "200px ", width: "200px" }} />
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-600 ">Projects</h2>
                <div className="flex flex-wrap justify-center">
                    <div className="scroller" data-speed="slow">
                        <ul className="tag-list scroller__inner flex gap-4 p-4 ">
                            <div className="max-w-xs m-4 bg-black shadow-md rounded-lg">
                                {/* <img src="/project1.jpg" alt="Project 1" className="rounded-t-lg" /> */}
                                <div className="p-4">
                                    <h3 className="font-bold text-center mb-2">CSCF</h3>
                                    <p className=' text-center bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent text-sm md:text-base'>Token Trader is a user-friendly platform that simplifies the buying and selling of digital tokens. With real-time market insights and secure transactions, we empower both novice and experienced traders to navigate the token economy with ease.

                                    </p>
                                </div>
                            </div>
                            <div className="max-w-xs m-4 bg-black shadow-md rounded-lg">
                                {/* <img src="/project1.jpg" alt="Project 2" className="rounded-t-lg" /> */}
                                <div className="p-4">
                                    <h3 className="font-bold text-center mb-2">Appointment Project</h3>
                                    <p className='text-center bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent text-sm md:text-base'>MedConnect is an easy-to-use platform for online appointment booking between patients and doctors. Patients can quickly schedule visits, view availability, and manage their healthcare, enhancing access to timely medical care.</p>
                                </div>
                            </div>
                            <div className="max-w-xs m-4 bg-black shadow-md rounded-lg">
                                {/* <img src="/project1.jpg" alt="Project 3" className="rounded-t-lg" /> */}
                                <div className="p-4">
                                    <h3 className="font-bold text-center mb-2 ">D2XC</h3>
                                    <p className='text-center bg-gradient-to-r from-red-700 via-white to-pink-500 bg-clip-text text-transparent text-sm md:text-base'>LearnOnline is an accessible platform for engaging online courses. We empower learners of all ages to acquire new skills and knowledge at their own pace.</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </section>

        </>

    )
}

export default PortfolioPage