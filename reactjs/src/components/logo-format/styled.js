import styled from "styled-components";

const L1 = styled.div`
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-bottom: 2em;
    

    .logo-image {
        margin-bottom: 0.5em;
    }

    .logo-name {
        font-size: 1.8rem;
        color: rgba(240, 161, 36, 1);

        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    }
`

const L2 = styled.div`
    
        display: flex;
        flex-direction: row;
        align-items: center;

        padding: 1em;
    

    .logo-image {
        margin-right: 0.8em;
    }

    .logo-name {
        font-size: 1.8rem;
        color: rgba(240, 161, 36, 1);

        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    }
`

export { L1, L2 }