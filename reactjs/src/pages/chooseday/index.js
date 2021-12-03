import LogoFormat2 from "../../components/other-logo";
import { TextStyled } from "../../components/text-type";
import { FormatChoose } from "./styled";
import BigBox from './boxes/big-box'
import MiniBox from './boxes/mini-box'


export default function ChooseDay () {
    return (
        <FormatChoose>
            <div className="header">
                    <LogoFormat2 />
            </div>
            <div className="container">
                <TextStyled> Escolha a data que você deseja comprar o ingresso. </TextStyled>
                <div className="dates">
                    <BigBox />

                    <div className="otherdates">
                        <MiniBox />
                        <MiniBox />
                        <MiniBox />
                        <MiniBox />
                        <MiniBox />
                        <MiniBox /> 
                    </div>
                </div>
            </div>
        </FormatChoose>
    )
}