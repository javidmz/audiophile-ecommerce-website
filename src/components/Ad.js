

const Ad = () => {
    return (
        <div className="ad-container">
            <div className="ad-content">
                <div className="ad-header">BRINGING YOU THE <span>BEST</span> AUDIO GEAR</div>
                <div className="ad-body">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</div>
            </div>
            <picture>
                    <source media="(min-width: 1000px)" srcSet="../images/shared/desktop/image-best-gear.jpg" />
                    <source media="(min-width: 481px)" srcSet="../images/shared/tablet/image-best-gear.jpg" />
                    <img src="../images/shared/desktop/image-best-gear.jpg" alt="best-audio" />
            </picture>
        </div>
    )
}

export default Ad;