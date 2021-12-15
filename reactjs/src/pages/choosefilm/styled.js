import styled from "styled-components";

const FilmFormat = styled.div`

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
        flex-direction: column;

        justify-content: center;
        align-items: center;

    }

    .films {
        display: flex;
        flex-direction: row;
        width: 90%;
        
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }







`



export { FilmFormat }