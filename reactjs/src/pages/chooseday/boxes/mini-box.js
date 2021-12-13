import { useState } from "react";
import styled from "styled-components";

export default function MiniBox(props) {

    const [informations, setInformations] = useState(props.info);



    return(
        <FormatMini>
            <div className="weekday"> { informations.diaSemana } </div>
            <div className="numberday"> {informations.dia} </div>
            <div className="month"> {informations.mes} </div>
        </FormatMini>
    )
}


const FormatMini = styled.div`
    
        border: none;
        background: #AA0A0A;
        border-radius: 0.6em;

        display: flex;
        flex-direction: column;
        align-items: center;


        margin: 0.4em;
        padding: 0.6em 2.2em;

        color: white;
        text-transform: uppercase;
    

    .weekday, .numberday {
        margin-bottom: 0.2em;
    }

    .weekday, .month {
        font-size: 0.8em;
    }

    .numberday {
        font-size: 1.5em;
    }

    &:hover {
        cursor: pointer;
        background-color: red;
    }
`