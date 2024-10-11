import { FacebookFilled,  GithubOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'
import React from 'react'

function FooterPage() {
    return (
        <>
            <footer className="footer bg-neutral text-neutral-content items-center p-4 ">
                <aside className="grid-flow-col items-center">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="/1722336887739-removebg-preview.png" />
                        </div>
                    </div>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                   <a href="https://www.facebook.com/"> <FacebookFilled className=' rounded-xl bg-slate-900 px-2 py-2 hover:bg-slate-600 cursor-pointer' /></a>
                   <a href=""> <TwitterOutlined className=' rounded-xl bg-slate-900 px-2 py-2  hover:bg-slate-600 cursor-pointer' /></a>
                   <a href="https://www.instagram.com/incredible_vs09/"><InstagramOutlined className=' rounded-xl bg-slate-900 px-2 py-2  hover:bg-slate-600 cursor-pointer' /></a>
                   <a href="https://www.youtube.com/@vikaskumar9879"><YoutubeOutlined className='rounded-xl bg-slate-900 px-2  py-2  hover:bg-slate-600 cursor-pointer' /></a>
                   <a href="https://www.linkedin.com/in/vikas-bhartiya-01686230a/">  <LinkedinOutlined className=' rounded-xl bg-slate-900 px-2 py-2  hover:bg-slate-600 cursor-pointer' /></a>
                   <a href="https://github.com/vikas-pms"> <GithubOutlined className=' rounded-xl bg-slate-900 px-2 py-2  hover:bg-slate-600 cursor-pointer' /></a>
                </nav>
            </footer>


        </>
    )
}

export default FooterPage