import Content from "./Content";
import Header from "./Header";

const Home = ({ props, setMobileNav }) => {
    return (
        <div className="home-content">
          <Header />
          <Content props={props} setMobileNav={setMobileNav} />
        </div>
    )
}

export default Home;