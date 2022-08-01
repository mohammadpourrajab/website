import React from "react";
import Banner from "../banner/Banner";
import Cards from "../cards/Cards";
import Search from "../search/Search";
import Logos from "../logos/Logos";
// import NewCounter from "../NewCounter";
import useTitle from "../../hooks/useTitle";
// import Posts from "../Posts";
// import SendPost from "../SendPost";
// import Child from "../hoc/Child";
// import NewChild from "../hoc/NewChild";

function Home(props) {

    useTitle("Home Page");


    return (
        <div className="home">
            {/*<SendPost/>*/}
            {/*<Posts/>*/}
            {/*<Child prd={5} />*/}
            {/*<NewChild/>*/}
            {/* <NewCounter/> */}
            <Banner/>
            <Cards/>
            <Search/>
            <Logos/>
        </div>
    );
}

export default Home;