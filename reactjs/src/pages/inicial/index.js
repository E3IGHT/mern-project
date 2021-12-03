import { Inicial } from "./styled"
import LogoFormat1 from "../../components/logo-format"
import LogoFormat2 from "../../components/other-logo"

export default function Home () {
    return (
        <Inicial>
           <div className="container">
            <LogoFormat2 />
                <div className="tit"> O que você quer fazer? </div>
                <Link to="/chooseday"> <div className="butt"> <button className="buyticket"> Comprar <br /> Ingresso </button> </div> </Link>
           </div>
        </Inicial>
    )
}