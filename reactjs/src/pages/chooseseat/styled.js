import styled from "styled-components";

const Seats = styled.div`

color: white;
    background-image: url('/assets/images/background.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    min-height: 100vh;

    .header {
        padding: 1em 1em;
        display: flex;
        align-items: center;

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

    .principal-box {
        display: flex;
        flex-direction: column;

        padding: 1em 2em;

        background: rgba(198, 198, 198, 0.9);
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25), inset 0px 0px 8px 2px rgba(0, 0, 0, 0.25);
        border-radius: 16px 16px 16px 0px;

        margin-right: 2em;
    }

    .botao {
        display: flex;
        margin-top: 26em;
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

export { Seats };