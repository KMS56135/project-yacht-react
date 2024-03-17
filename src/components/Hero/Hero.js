import hero from "../../assets/image/hero.webp"

function Hero () {
    return (
        <section className="mb-32">
            <div className="container px-14  flex items-center flex-col">
                <h1 className="text-4xl self-start pb-10 pl-16">ВМЕСТЕ ПОД ПАРУСОМ</h1>
                <div className="w-full">
                    <picture className="">
                        <source srcSet=""></source>
                        <img className="object-cover w-full" src={hero}></img>
                    </picture>
                </div>
            </div>
        </section>
    );
}
export default Hero;