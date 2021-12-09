import LogoFormat1 from "../../components/logo-format";
import { TextStyled } from '../../components/text-type'
import { Tickets } from "./styled";
import Ticket from "./ticket/ticket";

export default function AllTickets () {
    return (
        <Tickets>
            <div className="header">
                    <LogoFormat1 />
                    <TextStyled> Parabéns! Sua compra foi realizada com sucesso. <br /> 
                    Agora é só aproveitar o filme :) </TextStyled>
            </div>
            <div className="container">
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
                <Ticket />
            </div>
        </Tickets>
    )
}