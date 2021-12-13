import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { FilmFormat } from "./styled"
import BoxFilm from "./film-box-format"
import { Link } from "react-router-dom"

export default function ChooseFilm () {
    return (
        <FilmFormat>
            <div className="header">
                <div className="logo"> <LogoFormat2 /> </div>
                <TextStyled> Selecione o filme que deseja assistir </TextStyled>
            </div>
            <div className="container">
                <div className="films">
                    <Link to="/choosesession"> <BoxFilm /> </Link>
                    <Link to="/choosesession"> <BoxFilm /> </Link>
                    <Link to="/choosesession"> <BoxFilm /> </Link>
                    <Link to="/choosesession"> <BoxFilm /> </Link>
                    <Link to="/choosesession"> <BoxFilm /> </Link>
                    <Link to="/choosesession"> <BoxFilm /> </Link>
                </div>
            </div>
        </FilmFormat>
    )
}