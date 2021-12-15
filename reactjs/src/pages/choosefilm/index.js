import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { FilmFormat } from "./styled"
import BoxFilm from "./film-box-format"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

import Api from '../../services'
import { useEffect, useState } from "react"
const api = new Api();

export default function ChooseFilm () {

    const[movie, setMovie] = useState([])
    const navigate = useLocation();

    async function listar () {
        let resp = await api.availableMovies(navigate.state);
        setMovie(resp)
    }

    useEffect(() => {
        listar();
    }, [] );

    return (
        <FilmFormat>
            <div className="header">
                <div className="logo"> <LogoFormat2 /> </div>
                <TextStyled> Selecione o filme que deseja assistir </TextStyled>
            </div>
            <div className="container">
                <div className="films">
                    {movie.map((item) =>
                        <Link to="/choosesession" state={item}> <BoxFilm info={item} /> </Link>
                    )}
                    
                </div>
            </div>
        </FilmFormat>
    )
}