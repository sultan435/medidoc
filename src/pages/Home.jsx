import ToDoList from "../components/ToDoList";
import Appointments from "../components/Appointments";
import Covid from "../components/Covid";
import Header from "../components/Header";
import Banner from '../components/Banner';

const Home = () => {
    return (
        <section>
            <Header></Header>
            <div className="px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-5 xl:gap-16 lg:gap-5">
                    <div className="lg:col-span-2 xl:col-span-3">
                        <Banner></Banner>
                        <div className="lg:hidden">
                            <Appointments></Appointments>
                        </div>
                        <div className="">
                            <ToDoList></ToDoList>
                        </div>
                    </div>
                    <div className="lg:col-span-2 xl:col-span-2 h-auto">
                        <div className="hidden lg:block">
                            <Appointments></Appointments>
                        </div>
                        <div className="hidden xl:block">
                            <Covid></Covid>
                        </div>
                    </div>
                </div>
                <div className="block xl:hidden">
                    <Covid></Covid>
                </div>
            </div>
        </section>
    );
};

export default Home;