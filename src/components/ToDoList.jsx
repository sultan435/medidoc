import { GoPlus } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";

const ToDoList = () => {
    return (
        <div className="p-8 dark:bg-[#2D2322] lg:p-6 xl:p-8 bg-white shrink-0 shadow-lg rounded-lg text-[#2E1619]">
            <h1 className="text-base font-medium dark:text-white">To-Do List</h1>
            <div className="flex gap-4 mt-4 relative">
                <textarea className="border border-[#EDEBEB] dark:bg-[#EDEBEB] outline-none px-4 py-2 rounded-xl w-full" name="" id="" cols="30" rows="5"></textarea>
                <div className="block absolute lg:block xl:hidden  right-1 bottom-1">
                    <span ><GoPlus className=' bg-[#FF7594] text-2xl p-1 rounded-full text-white'/></span>
                </div>
                <div className="hidden xl:flex items-center h-7 gap-1 px-3 py-[2px] rounded-md bg-[#FF7594]">

                    <span className=' text-white text-xs'><FaCheck /></span>
                    <button className="text-white">Add</button>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4 xl:mt-8'>
                <div className='flex items-center gap-4'>
                    <span className=' bg-[#FF7594] h-7 p-[6px] rounded text-white'><FaCheck /></span>
                    <h3 className="dark:text-[#D1D5DB]">Select All</h3>
                </div>
                <div className="flex items-center gap-1 px-2 py-[2px] rounded-md bg-[#FF7594]">

                    <span className=' text-white text-xs'><FaCheck /></span>
                    <button className="text-white">Done</button>
                </div>
            </div>
            <div>
                <div className='flex flex-row mt-8  gap-4'>
                    <span className=' bg-[#EDEBEB] h-7 p-[6px] rounded text-white'><FaCheck /></span>
                    <div className='flex lg:flex-col xl:flex-row gap-2 lg:gap-4'>
                        <p className="text-sm text-[#2E1619] dark:text-[#D1D5DB] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='w-56 text-sm font-medium text-[#E0E0E0] dark:text-[#A6A6A6]'>Last Added: 10 sep 2022</p>
                    </div>
                </div>
                <div className='flex flex-row mt-8  gap-4'>
                    <span className=' bg-[#EDEBEB] h-7 p-[6px] rounded text-white'><FaCheck /></span>
                    <div className='flex lg:flex-col xl:flex-row gap-2 lg:gap-4'>
                        <p className="text-sm text-[#2E1619] dark:text-[#D1D5DB] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='w-56 text-sm font-medium text-[#E0E0E0] dark:text-[#A6A6A6]'>Last Added: 10 sep 2022</p>
                    </div>
                </div>
                <div className='flex flex-row mt-8  gap-4'>
                    <span className=' bg-[#EDEBEB] h-7 p-[6px] rounded text-white'><FaCheck /></span>
                    <div className='flex lg:flex-col xl:flex-row gap-2 lg:gap-4'>
                        <p className="text-sm text-[#2E1619] dark:text-[#D1D5DB] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='w-56 text-sm font-medium text-[#E0E0E0] dark:text-[#A6A6A6]'>Last Added: 10 sep 2022</p>
                    </div>
                </div>
                <div className='flex flex-row mt-8  gap-4'>
                    <span className=' bg-[#EDEBEB] h-7 p-[6px] rounded text-white'><FaCheck /></span>
                    <div className='flex lg:flex-col xl:flex-row gap-2 lg:gap-4'>
                        <p className="text-sm text-[#2E1619] dark:text-[#D1D5DB] font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className='w-56 text-sm font-medium text-[#E0E0E0] dark:text-[#A6A6A6]'>Last Added: 10 sep 2022</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ToDoList;