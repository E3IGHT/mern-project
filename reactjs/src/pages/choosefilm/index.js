import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { FilmFormat } from "./styled"

export default function ChooseFilm () {
    return (
        <FilmFormat>
            <div className="header">
                <LogoFormat2 />
                <TextStyled> Selecione o filme que deseja assistir </TextStyled>
            </div>
            <div className="container">
                <div className="films">
                    <div className="filmFormat">
                        <div className="image"> <img src="/assets/images/film.png" /> </div>
                        <div className="texts">
                            <div className="title"> Harry Potter e a Pedra Filosofal </div>
                            <div className="session">
                                <div className="wsession"> Legendado e Dublado</div>
                                <div className="wsession"> Classificação +12 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FilmFormat>
    )
}