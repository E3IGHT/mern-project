import styled from "styled-components"
import { Link } from "react-router-dom";

export default function BigBox() {

    let that = {
        data: today(),
        diaSemana: dayOfWeek(today()),
        mes: monthName(today()),
        dia: dayNumber(today())
    }

    function today() {
        let data = new Date();
        let dd = data.getDate();
        let mm = data.getMonth() + 1;
        let yy = data.getFullYear();
        return `${yy}-${mm}-${dd}`
    }

    function dayNumber(date) {
        date = new Date(`${date}T00:00:00`);
        return date.getDate();
    }
    
    function dayOfWeek (date) {
        let t = today();
        if (t === date)
            return 'HOJE'
    
    
        date = new Date(`${date}T00:00:00`);
        switch (date.getDay()){
            case 0: return 'Domingo'
            case 1: return 'Segunda'
            case 2: return 'Terça'
            case 3: return 'Quarta'
            case 4: return 'Quinta'
            case 5: return 'Sexta'
            case 6: return 'Sábado'
        }
    }
    
    function monthName(date) {
        date = new Date(`${date}T00:00:00`);
        switch (date.getMonth()) {
            case 0: return 'Janeiro'
            case 1: return 'Fevereiro'
            case 2: return 'Março'
            case 3: return 'Abril'
            case 4: return 'Maio'
            case 5: return 'Junho'
            case 6: return 'Julho'
            case 7: return 'Agosto'
            case 8: return 'Setembro'
            case 9: return 'Outubro'
            case 10: return 'Novembro'
            case 11: return 'Dezembro'
        }
    }


    return (
        <Link to='/choosefilm' state={that.data} >
            <GiantBox>
                <div className="weekday"> {that.diaSemana} </div>
                <div className="numberday"> {that.dia} </div>
                <div className="month"> {that.mes} </div>
            </GiantBox>
        </Link>
    )
}

const GiantBox = styled.button`
    
        border-radius: 0.8em;
        background-color: #C60A0A;
        box-shadow: 2px -2px 3px 2px rgba(11, 0, 0, 0.25); 
        padding: 2.5em 6.3em;

        color: white;
        border: none;
        text-transform: uppercase;

        margin-right: 1em;
    

    .weekday, .numberday {
        margin-bottom: 1.2em;
    }

    .weekday, .month {
        font-size: 1.8em;
    }

    .numberday {
        font-size: 2.8em;
    }

    &:hover {
        cursor: pointer;
        background-color: red;
    }
`