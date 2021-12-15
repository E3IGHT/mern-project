import styled from "styled-components"



export default function Red () {
    return (
        <Seat>
            <img src="/assets/images/red-chair.png" width="35em" height="35em" alt="" />
            <div className="numb"> 01 </div>
        </Seat>
    )
}

const Seat = styled.div`

    position: relative

    .seat {
        padding: 0.15em;
    }

    .numb {
        position: absolute;

        top: 0.8em;
        padding: 0em 0.75em;

        font-weight: 600;
        font-size: 0.9em;
    }

`