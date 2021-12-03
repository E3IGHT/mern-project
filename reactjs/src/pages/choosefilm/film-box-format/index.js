import styled from "styled-components"

export default function BoxFilm () {
    return (
        <FilmTest>
            <div className="image"> <img src="/assets/images/film.png" width="100em" height="150em" /> </div>
            <div className="texts">
                <div className="title"> Harry Potter e a Pedra Filosofal </div>
                <div className="session">
                    <div className="wsession"> Legendado e Dublado</div>
                    <div className="wsession"> Classificação +12 </div>
                </div>
            </div>
        </FilmTest>
    )
}

const FilmTest = styled.div`


        display: flex;
        flex-direction: row;
        margin: 0.8em;
        padding: 0.5em;



        background-color: #AA0A0A;
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25);
        border-radius: 16px 16px 0px;


    .image {
        margin-right: 1em;
    }

    .title {
        width: 70%;
        color: rgba(255, 202, 118, 1);
        font-size: 1.1em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        margin-bottom: 2em;
        margin-top: 0.4em;
    }

    .wsession {
        font-size: 0.9em;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

` 