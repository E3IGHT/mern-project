import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { Session } from "./styled"
import TMiniBox from './boxes/mini-box'
import ImBox from './boxes/image-box'

export default function ChooseSession() {
    return (
        <Session>
            
                <div className="header">
                    <div className="logo"> <LogoFormat2 /> </div>
                    <TextStyled> Selecione o horário e o idioma </TextStyled>
                </div>
                <div className="container">
                <div className="doubleboxes">
                    <ImBox />
                    
                    <div className="oboxes">
                        <TMiniBox />
                        <TMiniBox />
                        <TMiniBox />
                        <TMiniBox />
                        <TMiniBox />
                        <TMiniBox />
                    </div>
                </div>
            </div>
        </Session>
    )
}