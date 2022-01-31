import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../selector/getHeroById";

export const HeroScreen = () => {

    const {heroId} = useParams();
    
    //useMemo guarda hero y lo actualiza solo si cambia heroId
    const hero = useMemo(() => getHeroeById(heroId), [heroId]); 
    
    const navigate = useNavigate();
    
    const handleReturn = () => {
        navigate(-1);
    }

    if(!hero){
        return <Navigate to="/" />
    }
    
    //se desestructura hero desde los params de useParams
    const {id, superhero, alter_ego, publisher, first_appearance, characters} = hero; 

    const heroImg = `/assents/${id}.jpg`;
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={ heroImg } 
                    alt={ superhero } 
                    className="img-thumbnail animate__animated animate__fadeInLeft" />
            </div>
            <div className="col-8">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush animate__animated animate__fadeIn">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{ publisher }</li>
                    <li className="list-group-item"><b>First appearance: </b>{ first_appearance }</li>
                </ul>
                <h5 className="mt-5">Character</h5>
                <p>{ characters }</p>

                <button 
                    className="btn btn-outline-info"
                    onClick={ handleReturn }
                >
                    Regresar
                </button>
            </div>
        </div>
    );
};
