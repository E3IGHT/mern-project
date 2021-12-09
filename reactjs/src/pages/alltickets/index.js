import LogoFormat1 from "../../components/logo-format";
import { TextStyled } from '../../components/text-type'

export default function AllTickets () {
    return (
        <div>
            <div className="header">
                    <LogoFormat1 />
                    <TextStyled> Parabéns! Sua compra foi realizada com sucesso. <br /> Agora é só aproveitar o filme :) </TextStyled>
            </div>
        </div>
    )
}