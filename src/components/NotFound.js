import { Link } from "react-router-dom";


const NotFound = () => {

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="not-found-container">
            <div><span>Ooops!</span> This is awkward... You are looking for something that doesn't actually exist.</div>
            <img src="../images/error-404.png" alt="Error" loading="lazy" />
            <Link to="/" onClick={() => scrollToTop()}><button>HOME</button></Link>          
        </div>
    )
}

export default NotFound;