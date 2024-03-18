import galleryImage from "../../assets/image/Gallery/gallery-photo-1.webp";

function Gallery () {
    return (
        <section>
            <h2>Галерея</h2>
            <div className="px-14">
                <picture>
                    <source srcSet="" media=""/>
                    <img src={galleryImage}/>
                </picture>
            </div>
        </section>
    );
}

export default Gallery;