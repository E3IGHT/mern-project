import styled from "styled-components";

const FormatChoose = styled.div`

    display: flex;
    flex-direction: column;

    background-image: url('/assets/images/background.png');
    min-height: 100vh;
    color: white;

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2em 2em;
    }

    .header {
        display: flex;
        padding: 1em;
    }

    .dates {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .otherdates {
        padding: 1em;
        display: flex;
        
        flex-wrap: wrap;
        width: 40%;
    }



    

    



`

export { FormatChoose }