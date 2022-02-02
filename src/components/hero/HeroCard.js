import {Link} from 'react-router-dom';
;


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {
    const heroImage = require.context('../../assents/', true);


    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters p-1">
                    <div className="col-md-4">
                        <img src={ heroImage(`./${id}.jpg`) } alt={superhero} className="card-img-top  " />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text"> {alter_ego} </p>
                            {
                                (alter_ego !== characters)
                                    && <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <span className="text-muted">{ first_appearance }</span>
                            </p>

                            <Link to={`/hero/${id}`} >
                                Más info...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    );
};
