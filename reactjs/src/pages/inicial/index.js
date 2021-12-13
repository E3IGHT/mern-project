import { Inicial } from "./styled"
import LogoFormat1 from "../../components/logo-format"
import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { Link } from 'react-router-dom'

export default function Home () {
    return (
        <Inicial>
           <div className="container">
            <LogoFormat2 />
                <div className="tit"> <TextStyled> O que você quer fazer? </TextStyled> </div>
                <Link to="/chooseday"> <div className="butt"> <button className="buyticket"> Comprar <br /> Ingresso </button> </div> </Link>
           </div>
        </Inicial>
    )
}