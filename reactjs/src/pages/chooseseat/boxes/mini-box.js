import styled from "styled-components";

export default function TMiniBox () {
    return (
        <HMBox>
            <div className="theroom"> Sala 08 </div>
            <div className="thehour"> 13:00 </div>
            <div className="thedescrpt"> Legendado </div>
        </HMBox>
    )
}

const HMBox = styled.div`

        display: flex;
        flex-direction: column;
        align-items: center;


        background-color: #AA0A0A;
        padding: 1em;
        border-radius: 0.7em;

        margin: 0.5em;
        

    .thedescrpt {
        font-size:  medium;
    }

    .thehour {
        font-size: xx-large;
    }


`