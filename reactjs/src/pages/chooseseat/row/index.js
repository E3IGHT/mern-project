import styled from "styled-components";


export default function Row () {
    return (
        <TRow>
            <div className="row">
                <div className="letter"> A </div>
                <div className="seats">
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 01 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 02 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 03 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 04 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 05 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 06 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 07 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 08 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 09 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 10 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 11 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 12 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 13 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 14 </div>
                    </div>
                    <div className="seat">
                        <img src="/assets/images/red-chair.png" alt="" />
                        <div className="numb"> 15 </div>
                    </div>
                </div>
            </div>
        </TRow>
    )
}

const TRow = styled.div`

.row, .seats {
        display: flex;
        flex-direction: row;
        
    }

    .letter {
        display: flex;
        align-items: center;

        font-size: 1.6em;
        font-weight: bolder;
        background: #AA0A0A;

        padding: 0.3em 0.6em;
        margin: 0.2em;
        margin-right: 2em;

        border-radius: 0.4em;
    }

    .seats {
        position: relative;
        display: flex;
        align-items: center;
    }

    .seat {
        padding: 0.2em;
    }

    .numb {
        position: absolute;

        top: 1em;
        padding: 0em 0.8em;

        font-weight: 700;
    }

`