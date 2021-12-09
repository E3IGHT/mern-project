import ImBox from "../choosesession/boxes/image-box";
import LogoFormat2 from "../../components/other-logo";
import { TextStyled } from "../../components/text-type";
import { ForPayment } from "./styled";


export default function Payment () {
    return (
        <ForPayment>
            <div className="header">
                <div className="logo"> <LogoFormat2 /> </div>
                <TextStyled> Selecione a melhor opção de pagamento </TextStyled>
            </div>

            <div className="container">
                <ImBox />

                <div className="options">
                    <div className="opt-box">
                        <div className="op-seats">
                            <div className="otitle"> Lugares </div>
                            <div>
                                <label> A1 </label>
                                <select>
                                    <option value="0"> Selecione... </option>
                                    <option value="1"> Meia </option>
                                    <option value="2"> Inteira </option>
                                </select>
                            </div>
                            <div>
                                <label> A1 </label>
                                <select>
                                    <option value="0"> Selecione... </option>
                                    <option value="1"> Meia </option>
                                    <option value="2"> Inteira </option>
                                </select>
                            </div>
                            <div>
                                <label> A1 </label>
                                <select>
                                    <option value="0"> Selecione... </option>
                                    <option value="1"> Meia </option>
                                    <option value="2"> Inteira </option>
                                </select>
                            </div>
                            <div>
                                <label> A1 </label>
                                <select>
                                    <option value="0"> Selecione... </option>
                                    <option value="1"> Meia </option>
                                    <option value="2"> Inteira </option>
                                </select>
                            </div>
                        </div>
                        <div className="linha"></div>
                        <div className="op-price">
                            <div className="otitle"> Pedido </div>
                            <div className="oooo">
                                <div className="descript"> Ingressos Meia: 03 </div>
                                <div className="descript"> Ingressos Inteira: 01 </div>
                            </div>
                            <div className="all"> Total: R$ 100,00 </div>
                        </div>
                    </div>

                    <div className="botao"> <button> Concluir </button></div>
                </div>
            </div>
        </ForPayment>
    )
}