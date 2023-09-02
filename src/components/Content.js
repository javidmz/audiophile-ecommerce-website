import ContentNav from "./ContentNav";
import Products from "./Products";
import Ad from "./Ad";

const Content = ({ setMobileNav }) => {
    return (
        <main>
            <ContentNav setMobileNav={setMobileNav} />
            <Products />
            <Ad />
        </main>
    )
}

export default Content;