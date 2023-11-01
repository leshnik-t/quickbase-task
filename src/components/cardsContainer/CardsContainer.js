import './cards-container.scss';
import Card from '../card/Card';

const CardsContainer = ({data}) => {
    const featuredCards = data[Object.keys(data)[0]].filter((cardData) => cardData.featured === true);

    const cards = data[Object.keys(data)[0]].filter((cardData) => cardData.featured !== true);

    const cardsArray = [...featuredCards, ...cards];

    console.log(cardsArray);

    return (
        <section className="cards-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2>{Object.keys(data)[0]} category</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 g-3">
                            {cardsArray.map((cardData) => (
                                <Card key={cardData.id} props={cardData}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CardsContainer;