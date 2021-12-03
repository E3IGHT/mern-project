import { Inicial } from "./styled"
import LogoFormat1 from "../../components/logo-format"
import LogoFormat2 from "../../components/other-logo"

export default function Home () {
    return (
        <Inicial>
            <LogoFormat2 />
            <div className="tit"> O que você quer fazer? </div>
            <div className="buyticket"> Comprar <br /> Ingresso </div>
        </Inicial>
    )
}