import photoArticle1 from "../../assets/image/article-blog1.webp";

function Article() {
    return (
        <article>
            <div className="container px-14">
                <div className="mb-28">
                    <time datatime="20.03.2003">20 октября</time> - <time datatime="19.4.2003">19 апреля</time>
                    <div>
                        <h2>Стань частью команды</h2>
                        <p>Если вы давно хотели попробовать себя в яхтинге – сейчас самое лучшее время! Мы набираем команду будущих шкиперов. За 6 месяцев вы станете настоящим капитаном и уже в следующем сезоне сможете самостоятельно выйти в море!</p>
                    </div>
                    <div>
                        <picture>
                            <source srcSet="" media=""></source>
                            <img src={photoArticle1}></img>
                        </picture>
                    </div>
                </div>
            </div>
            <div className="container px-14">
                <time datatime="20.07.2003">16 июля</time> - <time datatime="19.7.2003"> 23 июля</time>
                <div>
                    <h2>Стань частью команды</h2>
                    <p>Если вы давно хотели попробовать себя в яхтинге – сейчас самое лучшее время! Мы набираем команду будущих шкиперов. За 6 месяцев вы станете настоящим капитаном и уже в следующем сезоне сможете самостоятельно выйти в море!</p>
                </div>
                <div>
                    <picture>
                        <source srcSet="" media=""></source>
                        <img src={photoArticle1}></img>
                    </picture>
                </div>
            </div>
        </article>
    );
}

export default Article;