import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";

const News = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-xl font-semibold">Dragon News</h2>
                </div>
                <div>
                     <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;