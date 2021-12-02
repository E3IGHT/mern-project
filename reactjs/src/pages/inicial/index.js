import { Inicial } from "./styled"

export default function Home () {
    return (
        <Inicial>
            <div className="logo">
                <div className="logo-image"> <img src="/assets/images/ticket.png" width="60em" height="65em"/> </div>
                <div className="logo-name"> CineMonk </div>
            </div>
            <div className="tit"> O que você quer fazer? </div>
            <div className="buyticket"> Comprar <br /> Ingresso </div>
        </Inicial>
    )
}