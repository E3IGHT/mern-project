import { useEffect, useState } from "react";

import LogoFormat2 from "../../components/other-logo";
import { TextStyled } from "../../components/text-type";
import { FormatChoose } from "./styled";
import { Link } from "react-router-dom";
import BigBox from './boxes/big-box'
import MiniBox from './boxes/mini-box'

import Api from "../../services";
const api = new Api();


export default function ChooseDay () {

    const [day, setDay] = useState([]);

    console.log(day);

    function today() {
        let data = new Date();
        let dd = data.getDate();
        let mm = data.getMonth() + 1;
        let yy = data.getFullYear();
        return `${yy}-${mm}-${dd}`
    }

    async function listar() {
        let resp = await api.availableDates();
        setDay(resp);
    }



    useEffect(() => {
        listar();
    }, []);

    return (
        <FormatChoose>
            <div className="header">
                    <LogoFormat2 />
            </div>
            <div className="container">
                <div className="tit"> <TextStyled> Escolha a data que você deseja comprar o ingresso. </TextStyled> </div>
                <div className="dates">
                        <BigBox />
                    <div className="otherdates">
                    
                    { day.map (item =>
                       <Link to="/choosefilm" state={item.data} >
                            <MiniBox info={item} key={item.id} />
                       </Link>
                    )}
                        
                       
                    </div>
                </div>
            </div>
        </FormatChoose>
    )
}