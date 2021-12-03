import styled from "styled-components";

export default function MiniBox() {
    return(
        <FormatMini>
            <div className="weekday"> Hoje </div>
            <div className="numberday"> 04 </div>
            <div className="month"> Maio </div>
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