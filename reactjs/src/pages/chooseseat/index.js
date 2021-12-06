import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { Seats } from "./styled"


export default function ChooseSeat() {
    return (
        <Seats>
            
                <div className="header">
                    <div className="logo"> <LogoFormat2 /> </div>
                    <TextStyled> Selecione o horário e o idioma </TextStyled>
                </div>
                <div className="container">
                <div className="doubleboxes">
                    <div className="imagebox">
                        <div className="image"> <img src="/assets/images/film-format.png" alt="" width="180em" height="280em" /> </div>
                        <div className="texts">
                            <div className="title"> Harry Potter e a Pedra Filosofal </div>
                            <div className="description"> Legendado e Dublado </div>
                            <div className="description"> Classificação +12  </div>
                        </div>
                    </div>

                    <div className="oboxes">
                    <div className="boxtwo">
                        <div className="thedescrpt"> Sala 08 </div>
                        <div className="thehour"> 13:00 </div>
                        <div className="thedescrpt"> Legendado </div>
                    </div>
                    <div className="boxtwo">
                        <div className="theroom"> Sala 08 </div>
                        <div className="thehour"> 13:00 </div>
                        <div className="thedescrpt"> Legendado </div>
                    </div>
                    <div className="boxtwo">
                        <div className="theroom"> Sala 08 </div>
                        <div className="thehour"> 13:00 </div>
                        <div className="thedescrpt"> Legendado </div>
                    </div>
                    <div className="boxtwo">
                        <div className="theroom"> Sala 08 </div>
                        <div className="thehour"> 13:00 </div>
                        <div className="thedescrpt"> Legendado </div>
                    </div>
                    <div className="boxtwo">
                        <div className="theroom"> Sala 08 </div>
                        <div className="thehour"> 13:00 </div>
                        <div className="thedescrpt"> Legendado </div>
                    </div>
                    <div className="boxtwo">
                        <div className="theroom"> Sala 08 </div>
                        <div className="thehour"> 13:00 </div>
                        <div className="thedescrpt"> Legendado </div>
                    </div>
                    </div>
                </div>
            </div>
        </Seats>
    )
}