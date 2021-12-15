import styled from "styled-components";
import Red from "./seats/seat-format";
import Blue from "./seats/blue-format";
import Grey from "./seats/grey-format";
import {None} from "./seats/none-format";


export default function Row () {

    return (
        <TRow>
            <div className="row">
                <div className="letter"> A </div>
                <div className="seats">
                    <Red />
                    <Red />
                    <Red />
                    <None />
                    <Red />
                    <Red />
                    <Red />
                    <Red />
                    <Red />
                    <Red />
                    <Red />
                    <None />
                    <Red />
                    <Red />
                    <Red />
                    
                </div>
            </div>
        </TRow>
    )
}

const TRow = styled.div`

.row, .seats {
        display: flex;
        flex-direction: row;
        
    }

    .letter {
        display: flex;
        align-items: center;

        font-size: 1.6em;
        font-weight: bolder;
        background: #AA0A0A;

        padding: 0.1em 0.3em;
        margin: 0.2em;
        margin-right: 2em;

        border-radius: 0.4em;
    }

    .seats {
        position: relative;
        display: flex;
        align-items: center;
    }

`