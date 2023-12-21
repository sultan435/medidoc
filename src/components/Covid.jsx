import covid from '../assets/images/banner/covid.png'
const Covid = () => {
    return (
        <div className="bg-white dark:bg-[#ffffff1a]  shadow-lg rounded-lg px-5 py-5 lg:mt-8">
            <div className="flex flex-col gap-5 lg:flex-row justify-between mb-4">
                <h1 className='text-xl font-semibold text-[#FF7594] dark:text-white'>Covid-19 Updates</h1>
                <div>
                    <h3 className='text-base font-medium text-[#231F20] dark:text-white'>10 September 2022</h3>
                    <p className='text-base text-[#8A8686] dark:text-white'>Thursday 10:00:00 AM</p>
                </div>
            </div>
            <div className="flex flex-col px-10 lg:px-0  lg:flex-row">
                <div className="xl:flex-1">
                    <img className="w-full lg:w-60 h-full" src={covid} alt="" />
                </div>
                <div className="flex-1 bg-[#FF7590] text-[#F5F5F5] dark:text-white w-full text-center text-sm font-medium rounded-lg transition-all ease-in duration-300">
                    <div className='flex flex-col lg:flex-row gap-5 justify-evenly items-center p-10'>
                        <div>
                            <div>
                                <h3 className='text-sm font-medium'>Infection Number</h3>
                                <p className="text-[38px] py-4 font-medium">500</p>
                            </div>
                            <div className="mt-10 xl:mt-4">
                                <h3 className='text-sm font-medium'>Infection Rate</h3>
                                <p className="text-[38px] py-4">10%</p>
                            </div>
                        </div>
                        <div className='xl:hidden'>
                            <div className='mt-10 lg:mt-0 '>
                                <h3 className='text-sm font-medium'>Total Infection</h3>
                                <p className="text-[38px] py-4 font-medium">500,000</p>
                            </div>
                            <div className="mt-10">
                                <h3 className='text-sm font-medium'>Number Of Death</h3>
                                <p className="text-[38px] py-4 font-medium">20</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Covid;