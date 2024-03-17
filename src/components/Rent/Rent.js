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
        advantages1: "1 каюта", 
        advantages2: "2 спальных места", 
        advantages3: "аудиосистема, кондиционер", 
        advantages4: "холодильник, микроволновка", 
        advantages5: "туалет",
        price: "11 000 ₽/час",
    },
    {
        id: 2,
        imageUrl: card2,
        title: "Катер 60 Manhattan",
        description: "Двухпалубное судно VIP уровня длиной 20 метров, вместимостью 10 человек",
        advantages1: "6 кают", 
        advantages2: "носовая часть с огромной подушкой", 
        advantages3: "просторный флайбридж", 
        advantages4: "оборудованная кухня", 
        advantages5: "джакузи",
        price: "25 000 ₽/час",
    },
    {
        id: 3,
        imageUrl: card3,
        title: "Катер Starfisher 34",
        description: "Моторная яхта длиной 11 метрови вместимостью до 8 человек",
        advantages1: "4 каюты", 
        advantages2: "6 спальных мест", 
        advantages3: "аудиосистема, кондиционер", 
        advantages4: "охолодильник, микроволновка", 
        advantages5: "ддуш, туалет",
        price: "18 000 ₽/час",
    },
    {
        id: 4,
        imageUrl: card4,
        title: "Катер Pacific 7-13",
        description: "Катер Pacific длиной 12 метров и шириной 4.6 метра, вместимостью 8 человек",
        advantages1: "1 каюта", 
        advantages2: "2 спальных места", 
        advantages3: "аудиосистема, кондиционер", 
        advantages4: "холодильник, микроволновка", 
        advantages5: "туалет",
        price: "11 000 ₽/час",
    },
    {
        id: 5,
        imageUrl: card5,
        title: "Катер Atlantic 3000",
        description: "Катер Atlantic длиной 14 метров и вместимостью до 6 человек",
        advantages1: "2 каюты", 
        advantages2: "4 спальных места", 
        advantages3: "просторный флайбридж", 
        advantages4: "оборудованная кухня", 
        advantages5: "душ, туалет",
        price: "15 000 ₽/час",
    },
];

function Rent() {
    const cardContent = cards.map((elem) => {
        return (
        <Card
            id={elem.id}
            imageUrl={elem.imageUrl}
            title={elem.title}
            description={elem.description}
            advantages1={elem.advantages1}
            advantages2={elem.advantages2}
            advantages3={elem.advantages3}
            advantages4={elem.advantages4}
            advantages5={elem.advantages5}
            price={elem.price}
        />)
    });
    return  (
        <section className="mb-128">
            <div className="container px-14">
                {cardContent}
            </div>
        </section>
    );
}

function Card ({id, imageUrl, title, description,
    advantages1, advantages2, advantages3,
    advantages4, advantages5, price}) {
    return (
        <div key={id} className="p-6">
            <div className="mb-5">
                <img className="object-cover w-full" src={imageUrl}></img>
            </div>
            <h2 className="mb-4">{title}</h2>
            <p className="mb-3">{description}</p>
            <div className="mb-7">
                <div>{advantages1}</div>
                <div>{advantages2}</div>
                <div>{advantages3}</div>
                <div>{advantages4}</div>
                <div>{advantages5}</div>
            </div>
            <div className="flex justify-between">
                <div>Цена:</div>
                <div>{price}</div>
            </div>
    </div>
    );
}

export default Rent;