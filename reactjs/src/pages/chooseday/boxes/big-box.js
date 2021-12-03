import styled from "styled-components"

export default function BigBox() {
    return(
        <GiantBox>
                        <div className="weekday"> Hoje </div>
                        <div className="numberday"> 04 </div>
                        <div className="month"> Maio </div>
        </GiantBox>
    )
}

const GiantBox = styled.button`
    
        border-radius: 0.8em;
        background-color: #C60A0A;
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25); 
        padding: 2.5em 6.3em;

        color: white;
        border: none;
        text-transform: uppercase;

        margin-right: 1em;
    

    .weekday, .numberday {
        margin-bottom: 1.2em;
    }

    .weekday, .month {
        font-size: 1.8em;
    }

    .numberday {
        font-size: 2.8em;
    }

    &:hover {
        cursor: pointer;
        background-color: red;
    }
`