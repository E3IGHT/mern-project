import styled from "styled-components";

const Tickets = styled.div`

    background-image: url('/assets/images/background.png');
    background-size: 100% 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;


    .header {
        margin-top: 2em;
        text-align: center;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 70em;
    }


`

export { Tickets }