"use client";

import { useEffect } from "react";

const InfiniteScroll = () => {
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
        <div className="bg-black  flex flex-col items-center justify-center p-4 overflow-hidden">
            <h1 className="text-blue-600 text-3xl md:text-4xl lg:text-5xl mb-4">My Skills</h1>

            <div className="scroller" data-speed="fast">
                <ul className="tag-list scroller__inner flex gap-4 p-4">
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        HTML
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        CSS
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        Bootstrap
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        Tailwind
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        Ant Design
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        JavaScript
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        ReactJs
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        NextJs
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        NestJs
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        NodeJs
                    </li>
                    <li className="bg-blue-600 text-white rounded-md p-2 text-sm sm:text-base md:text-lg lg:text-xl">
                        MongoDB
                    </li>
                </ul>
            </div>

            <div className="scroller" data-direction="right" data-speed="slow">
                <div className="scroller__inner flex gap-4 p-4">
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/mndb.png" alt="MongoDB" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/nodejs.png" alt="NodeJs" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/nest.png" alt="NestJs" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/nextjs.svg" alt="NextJs" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/rect.png" alt="ReactJs" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/js.png" alt="JavaScript" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/tailwind.png" alt="Tailwind" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/bootstrap.png" alt="Bootstrap" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/css.png" alt="CSS" />
                    <img className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain" src="/html.png" alt="HTML" />
                </div>
            </div>

            
        </div>
    );
};

export default InfiniteScroll;
