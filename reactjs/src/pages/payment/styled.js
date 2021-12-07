import styled from "styled-components";

const ForPayment = styled.div`

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
        flex-direction: row;
        justify-content: center;
        align-items: center;

    }

    .opt-box {
        padding: 1.5em;
        display: flex;
        flex-direction: row;

        background: linear-gradient(180deg, #AA0A0A 0%, rgba(83, 0, 0, 0.92) 126.82%);
        border-radius: 0.4em;

        margin-bottom: 4em;
    }

    .op-seats {
        
    }

    .otitle {
        color: rgba(255, 181, 64, 1);
        font-size: 1.7em;
        font-weight: 600;


        text-align: center;
        margin-bottom: 1em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .linha {
        width: 0.11em;
        height: 10em;

        margin: 0em 2em 0em 2em;
        background-color: rgba(90, 16, 16, 1);
    }
    label {
        font-size: large;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    select {
        border: 0.1em solid black;
        border-radius: 3em;
        padding: 0.3em 1.2em;
        margin: 0.2em;
    }

    .botao {
        display: flex;
        justify-content: flex-end;
    }

    button {
        border: none;
        padding: 2.3em 1em;
        border-radius: 50%;

        background: radial-gradient(50% 50% at 50% 50%, #F4F4F4 0%, #C1C1C1 100%);
        color: rgba(98, 98, 98, 1);
        font-size: medium;
        font-weight: bolder;
    }


`

export { ForPayment }