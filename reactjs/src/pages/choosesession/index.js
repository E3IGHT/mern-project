import LogoFormat2 from "../../components/other-logo"
import { TextStyled } from "../../components/text-type"
import { Session } from "./styled"
import TMiniBox from './boxes/mini-box'
import ImBox from './boxes/image-box'
import { Link, useLocation } from "react-router-dom"

import Api from '../../services'
import { useEffect, useState } from "react"
const api = new Api();

export default function ChooseSession() {

    const[session,setSession] = useState([]);

    const nav = useLocation();
    let w = nav.state;
    let data = w.data;
    let filme = w.filme.nome;

    async function listar() {
        let d = await api.availableSessions(filme, data);
        setSession(d);
    }

    useEffect(() => {
        listar()
    }, [] )


    return (
        <Session>
            
                <div className="header">
                    <div className="logo"> <LogoFormat2 /> </div>
                    <TextStyled> Selecione o horário e o idioma </TextStyled>
                </div>
                <div className="container">
                <div className="doubleboxes">
                    <ImBox info={w} />
                    
                    <div className="oboxes">
                        {session.map((item) => 
                            <Link to="/chooseseat" state={item} > <TMiniBox info={item} /> </Link> 
                        )}
                        
                    </div>
                </div>
            </div>
        </Session>
    )
}