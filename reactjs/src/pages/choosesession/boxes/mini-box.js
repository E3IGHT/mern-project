import styled from "styled-components";

export default function TMiniBox (props) {

    let session = props.info;

    return (
        <HMBox>
            <div className="theroom"> Sala {session.sala} </div>
            <div className="thehour"> {session.hora} </div>
            <div className="thedescrpt"> {session.audio} </div>
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