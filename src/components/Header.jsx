
import { IoIosArrowDown, IoMdArrowDropup } from "react-icons/io";
import img from '../assets/images/banner/banner.png'
import icon1 from '../assets/images/icon/Frame 2849.png'
import icon2 from '../assets/images/icon/Frame 2850.png'
import icon3 from '../assets/images/icon/Frame 2851.png'
import icon4 from '../assets/images/icon/Frame 2852.png'
import DarkTheme from "./DarkTheme";
import avatar from '../assets/images/icon/Avatar.png'


const Header = () => {

    return (
        <div>
            <div className=" lg:bg-gradient-to-r lg:from-[#F9F9F9] lg:via-[#F9F9F9] lg:to-[#F9F9F9] lg:dark:bg-gradient-to-r lg:dark:from-[#150A09] lg:dark:via-[#150A09] lg:dark:to-[#150A09] bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] ">
                <div className="flex justify-between items-center py-7 px-7 lg:px-0 w-full transition-all ease-in duration-300">
                    <div>
                        <ul>
                            <li className="text-base font-semibold  text-white dark:text-white lg:text-[#646F75] ml-14 lg:ml-0 xl:ml-0 transition-all ease-in duration-300">Home</li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-1">
                        <DarkTheme></DarkTheme>
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                                <img src={avatar} />
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <span><IoIosArrowDown className="text-2xl" /></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block xl:hidden">
                <div className="flex gap-6 flex-col lg:flex-row justify-between lg:items-center lg:rounded-lg bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65]  pb-10 px-10 transition-all ease-in duration-300">
                    <div className="flex justify-center">
                        <img src={img} alt="" />
                    </div>
                    <div className="text-white space-y-3">
                        <h1 className="text-2xl font-semibold ">Hello, Mary Jane!</h1>
                        <p className="text-base font-medium">Stay Up-to-Date with your appointments.</p>
                        <p className="text-base font-medium">You Have No pending Reports</p>
                    </div>
                </div>
                <div className="px-4 lg:px-0">
                    <h1 className="text-base font-semibold text-[#2E1619] dark:text-white py-5">Your Vitals</h1>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-black mb-7">
                        <div className="bg-white dark:bg-[#ffffff1a] dark:text-[#D1D5DB] shadow-lg p-2  border-2 border-[#EDEBEB]  rounded-lg space-y-2">
                            <img className="" src={icon1} alt="" />
                            <h3 className="text-xs font-semibold text-[#2E1619] dark:text-[#D1D5DB]">Pulse Count</h3>
                            <p className="text-base font-medium text-[#4A3D3F] dark:text-[#D1D5DB]">60 bpm</p>
                            <div className="flex items-center gap-1">
                                <span className=""><IoMdArrowDropup /></span>
                                <p className="text-xs font-medium text-[#03922B] dark:text-[#D1D5DB]">Normal</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#ffffff1a] shadow-lg p-2  border-2 border-[#EDEBEB]  rounded-lg space-y-2">
                            <img className="" src={icon2} alt="" />
                            <h3 className="text-xs font-semibold text-[#2E1619] dark:text-[#D1D5DB]">Blood Pressure</h3>
                            <p className="text-base font-medium text-[#4A3D3F] dark:text-[#D1D5DB]">110/70 mmHg</p>
                            <div className="flex items-center gap-1">
                                <span className=""><IoMdArrowDropup /></span>
                                <p className="text-xs font-medium text-[#82AB0D] dark:text-[#D1D5DB]">Slightly higher</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#ffffff1a] shadow-lg p-2  border-2 border-[#EDEBEB]  rounded-lg space-y-2">
                            <img className="" src={icon3} alt="" />
                            <h3 className="text-xs font-semibold text-[#2E1619] dark:text-[#D1D5DB] ">Oxygen Saturation</h3>
                            <p className="text-base font-medium text-[#4A3D3F] dark:text-[#D1D5DB]">97 %</p>
                            <div className="flex items-center gap-1">
                                <span className=""><IoMdArrowDropup /></span>
                                <p className="text-xs font-medium text-[#82AB0D] dark:text-[#D1D5DB]">Slightly higher</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-[#ffffff1a] shadow-lg p-2  border-2 border-[#EDEBEB]  rounded-lg space-y-2">
                            <img className="" src={icon4} alt="" />
                            <h3 className="text-xs font-semibold text-[#2E1619] dark:text-[#D1D5DB] ">Glucose Count</h3>
                            <p className="text-base font-medium text-[#4A3D3F] dark:text-[#D1D5DB]">100 mm/dL</p>
                            <div className="flex items-center gap-1">
                                <span className=""><IoMdArrowDropup /></span>
                                <p className="text-xs font-medium text-[#03922B] dark:text-[#D1D5DB]">Normal</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;