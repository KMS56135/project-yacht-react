import photoblog1 from "../../assets/image/article-blog1.webp";
import photoblog2 from "../../assets/image/article-blog2.webp";

function Blog() {
    return (
        <>
            <article className="mb-28">
                <div className="container px-14">
                    <div>
                        <div className="mb-2 block">
                            <time datatime="20.03.2003">20 октября</time> - <time datatime="19.4.2003">19 апреля</time>
                        </div>
                        <div className="mb-10">
                            <h2>Стань частью команды</h2>
                            <p>Если вы давно хотели попробовать себя в яхтинге – сейчас самое лучшее время! Мы набираем команду будущих шкиперов. За 6 месяцев вы станете настоящим капитаном и уже в следующем сезоне сможете самостоятельно выйти в море!</p>
                        </div>
                        {/* blog image */}
                        <div>
                            <picture>
                                <source srcSet="" media=""></source>
                                <img className="object-cover w-full" src={photoblog1}></img>
                            </picture>
                        </div>
                    </div>
                </div>
            </article>
            <article>
                <div>
                    <div className="container px-14">
                        <div className="mb-2 block">
                            <time datatime="20.07.2003">16 июля</time> - <time datatime="19.7.2003"> 23 июля</time>
                        </div>
                        <div className="mb-10">
                            <h2>Стань частью команды</h2>
                            <p>Если вы давно хотели попробовать себя в яхтинге – сейчас самое лучшее время! Мы набираем команду будущих шкиперов. За 6 месяцев вы станете настоящим капитаном и уже в следующем сезоне сможете самостоятельно выйти в море!</p>
                        </div>
                        {/* blog image */}
                        <div>
                            <picture>
                                <source srcSet="" media=""></source>
                                <img className="object-cover w-full" src={photoblog2}></img>
                            </picture>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}

export default Blog;