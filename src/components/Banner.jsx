import img from '../assets/images/banner/banner.png'
import { IoMdArrowDropup } from "react-icons/io";
import icon1 from '../assets/images/icon/Frame 2849.png'
import icon2 from '../assets/images/icon/Frame 2850.png'
import icon3 from '../assets/images/icon/Frame 2851.png'
import icon4 from '../assets/images/icon/Frame 2852.png'

const Banner = () => {
    return (
        <div className="hidden xl:block">
            <div className="flex justify-between items-center px-4 bg-gradient-to-r from-[#FF7594] via-[#FF797B] to-[#FF7C65] rounded-lg transition-all ease-in duration-300">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="text-white space-y-3">
                    <h1 className="text-2xl font-semibold ">Hello, Mary Jane!</h1>
                    <p className="text-base font-medium">Stay Up-to-Date with your appointments.</p>
                    <p className="text-base font-medium">You Have No pending Reports</p>
                </div>
            </div>
            <div className="grid grid-cols-4 mt-7 gap-4 text-black mb-10">
                <div className="bg-white dark:bg-[#ffffff1a] shadow-lg p-2  border-2 border-[#EDEBEB]  rounded-lg space-y-2">
                    <img className="" src={icon1} alt="" />
                    <h3 className="text-xs font-semibold text-[#2E1619] dark:text-[#D1D5DB] ">Pulse Count</h3>
                    <p className="text-base font-medium text-[#4A3D3F] dark:text-[#D1D5DB]">60 bpm</p>
                    <div className="flex items-center gap-1">
                        <span className=""><IoMdArrowDropup /></span>
                        <p className="text-xs font-medium text-[#03922B] dark:text-[#D1D5DB]">Normal</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-[#ffffff1a] shadow-lg p-2  border-2 border-[#EDEBEB]  rounded-lg space-y-2">
                    <img className="" src={icon2} alt="" />
                    <h3 className="text-xs font-semibold text-[#2E1619] dark:text-[#D1D5DB] ">Blood Pressure</h3>
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
    );
};

export default Banner;