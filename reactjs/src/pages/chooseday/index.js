import LogoFormat2 from "../../components/other-logo";
import { TextStyled } from "../../components/text-type";
import { FormatChoose } from "./styled";
import { Link } from "react-router-dom";
import BigBox from './boxes/big-box'
import MiniBox from './boxes/mini-box'


export default function ChooseDay () {
    return (
        <FormatChoose>
            <div className="header">
                    <LogoFormat2 />
            </div>
            <div className="container">
                <div className="tit"> <TextStyled> Escolha a data que você deseja comprar o ingresso. </TextStyled> </div>
                <div className="dates">
                    <Link to="/choosefilm"> <BigBox /> </Link>

                    <div className="otherdates">
                        <Link to="/choosefilm"> <MiniBox /> </Link>
                        <Link to="/choosefilm"> <MiniBox /> </Link>
                        <Link to="/choosefilm"> <MiniBox /> </Link>
                        <Link to="/choosefilm"> <MiniBox /> </Link>
                        <Link to="/choosefilm"> <MiniBox /> </Link>
                        <Link to="/choosefilm"> <MiniBox /> </Link>
                    </div>
                </div>
            </div>
        </FormatChoose>
    )
}