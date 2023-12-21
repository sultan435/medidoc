import { Link, Outlet } from "react-router-dom";
import { FaBars, FaRegUser, FaCalendarDays, FaClockRotateLeft } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import icon from '../../assets/images/icon/icon.png'
import { IoIosArrowBack } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { useState } from "react";


const MainLayout = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="bg-[#F9F9F9] dark:bg-[#150A09]">
            <div className="lg:flex gap-6 max-w-screen-2xl mx-auto pb-6 " >
                <nav className="">
                    <div className="absolute lg:fixed xl:static bg-white dark:bg-[#2E1619] lg:px-4 xl:px-8 pt-8 h-full z-10">
                        <div onClick={toggleMenu}>
                            {
                                menuOpen ? <div className="relative">
                                    <div className="flex items-center gap-6 px-7">
                                        <img src={icon} alt="" />
                                        <h1 className="text-2xl font-semibold text-[#384449] dark:text-white"><span>Medi</span><span className="text-[#FF7594]">Doc</span></h1>
                                    </div>
                                    <button className="text-[#FF7594] text-2xl p-2 w-10 bg-white shadow-xl rounded-full cursor-pointer flex items-center justify-center -mr-3 lg:-mr-6 xl:-mr-10 absolute top-0 -right-2">

                                        <span ><IoIosArrowBack /></span>
                                    </button>
                                </div> :
                                    <button className="absolute left-6 lg:static p-1  bg-white shadow-lg rounded-md"><span><FaBars className="text-3xl text-[#FF7594]" /></span></button>
                            }
                        </div>
                        <div className={`${menuOpen ? "block px-6 dark:text-[#D1D5DB]" : "hidden"}`}>
                            <ul className="pt-24 flex flex-col gap-5">
                                <li className="flex items-center gap-7 text-[#FF7594] text-base p-2"><span className="text-3xl"><FiHome /></span> Home</li>
                                <li className="flex items-center gap-7 text-base p-2"><span className="text-3xl"><FaRegUser /></span>Patient Profile </li>
                                <li className="flex items-center gap-7 text-base p-2"><span className="text-3xl"><FaCalendarDays /></span>Appointments</li>
                                <li className="flex items-center gap-7 text-base p-2"><span className="text-3xl"><FaClockRotateLeft /></span>Medical History</li>
                                <li className="flex items-center gap-7 text-base p-2"><span className="text-3xl"><IoSettingsOutline /></span>Settings</li>
                                <li className="mt-52 bg-[#FF7594] rounded-lg py-3 text-center font-medium text-white text-sm"><button>New Appointment</button></li>
                            </ul>
                        </div>
                        <div className={`${!menuOpen ? "hidden lg:block xl:block" : "hidden"}`}>

                            <div>
                                <ul className="pt-28 flex flex-col gap-10">
                                    <li><Link to='/'><span className="text-3xl text-[#FF7594]"><FiHome /></span></Link></li>

                                    <li><span className="text-3xl"><FaRegUser /></span></li>
                                    <li><span className="text-3xl"><FaCalendarDays /></span></li>
                                    <li><span className="text-3xl"><FaClockRotateLeft /></span></li>
                                    <li><span className="text-3xl"><IoSettingsOutline /></span></li>
                                </ul>
                                <button className="mt-52 text-3xl "><span ><GoPlus className=' bg-[#FF7594] text-4xl p-1 border-4 border-[#FF7594] rounded-full text-white' /></span></button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex-1 ml-0 lg:ml-12 xl:ml-0 lg:px-3">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;




