import { TextStyled } from "../../components/text-type"
import LogoFormat2 from "../../components/other-logo"
import { Seats } from "./styled"
import Row from "./row"
import { Link } from 'react-router-dom'


export default function ChooseSeat () {
    return(
        <Seats>
            <div className="header">
                <div className="logo"> <LogoFormat2 /> </div>
                <TextStyled> Selecione os melhores lugares </TextStyled>
            </div>
            <div className="container">
                <div className="principal-box">
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    <Row />
                    
                </div>
                <Link to="/payment"> <div className="botao"> <button> Próximo </button></div> </Link>
            </div>
        </Seats>
    )
}