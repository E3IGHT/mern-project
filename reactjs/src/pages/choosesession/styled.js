import styled from "styled-components";

const Session = styled.div`

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



`

export { Session }