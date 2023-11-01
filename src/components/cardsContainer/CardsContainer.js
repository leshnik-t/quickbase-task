import './cards-container.scss';
import Card from '../card/Card';

const CardsContainer = ({data}) => {
    console.log(data);
    return (
        <section className="cards-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h2>{Object.keys(data)[0]} category</h2>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 g-4">
                            {data[Object.keys(data)[0]].map((cardData) => (
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