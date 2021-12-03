import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { FilmFormat } from "./styled"
import BoxFilm from "./film-box-format"

export default function ChooseFilm () {
    return (
        <FilmFormat>
            <div className="header">
                <div className="logo"> <LogoFormat2 /> </div>
                <TextStyled> Selecione o filme que deseja assistir </TextStyled>
            </div>
            <div className="container">
                <div className="films">
                    <BoxFilm />
                    <BoxFilm />
                    <BoxFilm />
                    <BoxFilm />
                    <BoxFilm />
                    <BoxFilm />
                </div>
            </div>
        </FilmFormat>
    )
}