import './card.scss';

const Card = ({props}) => {
    if (props.image === '' || props.image === null) {
        return;
    }

    return (
        <div className="col" >
            <div className={`card ${props.category.toLowerCase()} h-100`}>
                {props.category !== '' &&
                    <div className="card-header">
                        {props.category}
                    </div>
                }
                <div className="image-container">
                    <img src={props.image} className="card-img-top" alt={props.title}/>
                </div>
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.body}</p>
                </div>
                { props.link !== '' &&
                <div className="card-footer">
                    <a href={props.link}>{props.linkText}</a>
                </div>
                }
            </div>
        </div>
    )
}

export default Card;