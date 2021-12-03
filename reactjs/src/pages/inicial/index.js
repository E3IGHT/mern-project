import { Inicial } from "./styled"
import LogoFormat1 from "../../components/logo-format"
import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"

export default function Home () {
    return (
        <Inicial>
           <div className="container">
            <LogoFormat2 />
                <div className="tit"> <TextStyled> O que você quer fazer? </TextStyled> </div>
                <div className="butt"> <button className="buyticket"> Comprar <br /> Ingresso </button> </div>
           </div>
        </Inicial>
    )
}