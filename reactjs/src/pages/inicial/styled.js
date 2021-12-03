import styled from 'styled-components';

const Inicial = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    
    color: white;


    min-height: 100vh;
    background-image: url('/assets/images/background.png');
    background-size: 100% 100%;

    .container {
        padding: 3em 3em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-bottom: 5em;
    }

    .logo-image {
        margin-bottom: 0.5em;
    }

    .logo-name {
        font-size: 1.8rem;
        color: rgba(240, 161, 36, 1);

        text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    }

    .tit {
        font-size: 2.2rem;
        color: #E1E1E1;
        text-shadow: 1px 1px 4px rgba(202, 202, 202, 0.87);


        margin-bottom: 3em;

    }

    .buyticket {
        background: linear-gradient(183.2deg, #861B1B 12.34%, #F80000 148.35%);
        box-shadow: 8px 5px 5px 2px rgba(0, 0, 0, 0.25);
        border-radius: 0.8em;
        color: white;
        border: none;
        


        padding: 1em;
        text-transform: uppercase;
        font-size: 1.6em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .buyticket:hover {
        background: #861B1B;
        cursor: pointer;
        transition: 0.1s;
    }


`


export { Inicial }