import photoNewsDesktopJPG from "../assets/image/Company/photo-news-desktopJPG.jpg";
import photoNewsDesktopWebp from "../assets/image/Company/photo-news-desktop.webp";
import photoNewstabletWebp from "../assets/image/Company/photo-news-tablet.webp";
import photoNewsMobileWebp from "../assets/image/Company/photo-news-mobile.webp";
import photoNews2DesktopJPG from "../assets/image/Company/photoNews2DesktopJPG.jpg";
import PageHeader from "../components/Header/PageHeader";
import Footer from "../components/Footer/Footer";

function Company() {
    return (
        <>
            <PageHeader />
            <div className="mt-10">
                <div className="container px-14">
                    <h2 className="text-center font-sans text-2xl mb-6 underline decoration-2 underline-offset-8 decoration-blue-200">Новости</h2>
                    <figure>
                        <picture>
                            <source srcSet={photoNewsDesktopJPG} media="(min-width: 1024px)"/>
                            <source srcSet={photoNewsDesktopWebp} media="(min-width: 1024px)"/>
                            <source srcSet={photoNewstabletWebp} media="(min-width: 768px)"/>
                            <img className="w-full" src={photoNewsMobileWebp}/>
                        </picture>
                        <figcaption className="mt-4 text-right text-gray-500">
                            Победитель регаты шкипер Иван Кулешов
                        </figcaption>
                    </figure>
                    <h3 className="mt-8 mb-7 text-2xl">Итоги регаты Sochi Race Week 2020</h3>
                    <p className="mb-3 font-sans text-lg leading-7">
                        Свыше сотни участников собирались на побережье Сочи, чтобы
                        посоревноваться за главный приз. В соревнованиях приняли
                        участие как новички, так и профессионалы моряки, имеющие за
                        плечами немалый опыт.
                    </p>
                    <p className="mb-6 font-sans text-lg leading-7">
                        На протяжении всего плавания нас сопровождало солнце
                        прекрасная погода, в отдельные дни ветер до 20 узлов. Регата
                        была прекрасно организована, 135 яхтсменов, 7 экипажей, 9
                        стран участниц, 4 гоночных дня, 3 дивизиона.
                    </p>
                    <h3 className="mb-4 font-sans text-xl">Команды-участники:</h3>
                    <ul className="space-y-1 mb-7 font-sans list-disc list-inside">
                        <li>Восток 35</li>
                        <li>Fortune Sailing</li>
                        <li>Сибирь</li>
                        <li>Левиафан</li>
                        <li>Черный лебедь</li>
                        <li>White Pepper</li>
                        <li>Pearl</li>
                    </ul>
                    <p className="font-sans text-lg leading-7">
                        Чемпионом регаты Sochi Race Week 2020 стала команда Fortune
                        Sailing, в прошлом году остановившаяся в одном шаге от
                        победы, а в этом сезоне опередившая ближайшего соперника —
                        экипаж «Восток 35» — на 12 баллов 5 баллов.
                    </p>
                    <div className="mt-20">
                        <h2 className="text-center font-sans text-2xl mb-6 underline decoration-2 underline-offset-8 decoration-blue-200">Морские Экспедиции</h2>
                        <picture>
                            <img className="w-full" src={photoNews2DesktopJPG}/>
                        </picture>
                        <p className="my-3 font-sans text-lg leading-7">Яхт-клуб объявляет о запуске новой серии морских экспедиций, призванных погрузить участников в уникальные приключения по просторам Средиземного моря.</p>
                        <p className="font-sans text-lg leading-7"> От затерянных бухт до древних портов, каждое путешествие обещает незабываемые впечатления и исследование красоты моря в компании опытных капитанов и энтузиастов.</p>
                    </div>
                </div>
            </div>
            <div className="container mt-28">
                <Footer />
            </div>
        </>
    );
}

export default Company;
