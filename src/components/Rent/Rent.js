import card1 from "../../assets/image/Rent/card1.webp";
import card2 from "../../assets/image/Rent/card2.webp";
import card3 from "../../assets/image/Rent/card3.webp";
import card4 from "../../assets/image/Rent/card4.webp";
import card5 from "../../assets/image/Rent/card5.webp";

const cards = [
    {
        id: 1,
        imageUrl: card1,
        title: "Катер Pacific 7-13",
        description: "Pacific длиной 12 метров и шириной 4.6 метра, вместимостью 8 человек",
        advantages: [
            "1 каюта", 
            "2 спальных места", 
            "аудиосистема, кондиционер", 
            "холодильник, микроволновка", 
            "туалет"
        ],
        price: "11 000 ₽/час",
    },
    {
        id: 2,
        imageUrl: card2,
        title: "Катер 60 Manhattan",
        description: "Двухпалубное судно VIP уровня длиной 20 метров, вместимостью 10 человек",
        advantages: [
            "6 кают", 
            "носовая часть с огромной подушкой", 
            "просторный флайбридж", 
            "оборудованная кухня", 
            "джакузи",
        ],
        price: "25 000 ₽/час",
    },
    {
        id: 3,
        imageUrl: card3,
        title: "Катер Starfisher 34",
        description: "Моторная яхта длиной 11 метрови вместимостью до 8 человек",
        advantages: [
            "4 каюты", 
            "6 спальных мест", 
            "аудиосистема, кондиционер", 
            "охолодильник, микроволновка", 
            "ддуш, туалет",
        ],
        price: "18 000 ₽/час",
    },
    {
        id: 4,
        imageUrl: card4,
        title: "Катер Pacific 7-13",
        description: "Катер Pacific длиной 12 метров и шириной 4.6 метра, вместимостью 8 человек",
        advantages: [
            "1 каюта",
            "2 спальных места", 
            "аудиосистема, кондиционер", 
            "холодильник, микроволновка", 
            "туалет",
        ],
        price: "11 000 ₽/час",
    },
    {
        id: 5,
        imageUrl: card5,
        title: "Катер Atlantic 3000",
        description: "Катер Atlantic длиной 14 метров и вместимостью до 6 человек",
        advantages: [
            "2 каюты", 
            "4 спальных места", 
            "просторный флайбридж", 
            "оборудованная кухня", 
            "душ, туалет",
        ],
        price: "15 000 ₽/час",
    },
];

function Rent() {
    const cardContent = cards.map(
        (elem) => {
            return (
                <Card
                    id={elem.id}
                    imageUrl={elem.imageUrl}
                    title={elem.title}
                    description={elem.description}
                    advantages={elem.advantages}
                    price={elem.price}
            />)
        });
    return  (
        <section className="mb-28">
            <div className="container flex px-14 lg:flex flex-wrap justify-center gap-5">
                {cardContent}
            </div>
        </section>
    );
}


function Card ({id, imageUrl, title, description,
    advantages, price}) {
    const advantagesList = advantages.map((element) => {
        return (
            <ul><li>{element}</li></ul>
        )
    });
    return (
        <div key={id} className="rounded-lg shadow-blue-100 shadow-md flex flex-col justify-between p-6 lg:basis-80 grow ">
            <div className="mb-5">
                <img className="object-cover w-full" src={imageUrl}></img>
            </div>
            <h2 className="mb-4">{title}</h2>
            <p className="mb-3">{description}</p>
            <div className="mt-auto mb-2.5">
                <div>{advantagesList}</div>
            </div>
            <div className="flex justify-between ">
                <div>Цена:</div>
                <div>{price}</div>
            </div>
        </div>
    );
}

export default Rent;