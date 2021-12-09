import styled from "styled-components"

export default function Ticket () {
    return (
        <StyledFormTicket>
            <div className="texts">
                <div className="boutred">
                    <div className="redinf"> A1 </div>
                    <div className="redinf"> MEIA </div>
                    <div className="redinf"> #1261289 </div>
                </div>
                <div className="boutdayhour">
                    <div className="dayhour"> 09/12/2021 </div>
                    <div className="dayhour"> 19:22 </div>
                </div>
                <div className="filmname"> Harry Potter e a Pedra Filosfal </div>
                <div className="boutsession">
                    <div className="session"> Dublado </div>
                    <div className="session"> Sala 08 </div>
                    <div className="session"> 13:00h </div>
                </div>
            </div>
        </StyledFormTicket>
    )
}

const StyledFormTicket = styled.div`


        background-image: url('/assets/images/final-ticket.png');
        background-size: 120% 190%;
        background-position: -2em -5.6em;
        background-repeat: no-repeat;


        /* width: 25em;
        height: 22em; */


    .texts {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        margin-left: 6.2em;
        margin-right: 2em;
        // margin-top: 1em;
        
    }

    .boutred, .boutdayhour, .boutsession {
        display: flex;
        flex-direction: row;

        
    }

    .boutred {
        margin-top: 2.3em;
        
    }

    .redinf {
        margin-right: 0.5em;
        font-size: 1em;
        color: #960404;
        font-weight: 500;
    }

    .dayhour {
        color: #373737;
        font-size: 0.7em;
        margin-bottom: 0.2em;
    }

    .filmname {
        font-size: 1.1em;
        width: 8em;
        color: black;
        font-weight: 500;

        margin-bottom: 0.1em;
    }

    .session {
        margin-right: 0.5em;
        color: #960404;
        font-size: 1em;
        font-weight: 500;

        margin-bottom: 3em;
    }

`