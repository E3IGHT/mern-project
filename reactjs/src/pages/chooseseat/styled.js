import styled from "styled-components";

const Seats = styled.div`

    background-image: url('/assets/images/background.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 100vh;
    color: white;

    .header {
        padding: 1em 1em;
        display: flex;
        align-items: center;
        margin-bottom: 1em;
        margin-left: 2em;

    }

    .logo {
        display: flex;
        flex-grow: 0.3;
    }

    .container {
        padding: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .doubleboxes {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .imagebox {
        background-color: #AA0A0A;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0.3em;

        margin-right: 4em;

        
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
        border-radius: 16px 16px 16px 0px;
    }

    .title {
        width: 9.5em;
        color: rgba(255, 202, 118, 1);
        font-size: large;

        margin-bottom: 0.5em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .description {
        font-size: small;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 0.3em;
    }

    .oboxes {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        width: 30em;
    }

    .boxtwo {
        display: flex;
        flex-direction: column;
        align-items: center;


        background-color: #AA0A0A;
        padding: 1em;
        border-radius: 0.7em;

        margin: 0.5em;
        
    }

    .thedescrpt {
        font-size:  medium;
    }

    .thehour {
        font-size: xx-large;
    }




`

export { Seats }