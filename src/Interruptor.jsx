import { useState } from "react";

const Interruptor = () => {

    const [luz, setLuz] = useState("Luz ligada");

    function lampada(){
        if (luz == "Luz ligada") {
            setLuz("Luz desligada");
        }else{
            setLuz("Luz ligada");
        }
    }
    
    return ( 
        <>
            <button onClick={lampada}>interruptor</button>
            <h3>{luz}</h3>
            {
                luz == "Luz ligada" ? (
                    <img style={{width:300}}src="https://img.myloview.com.br/fotomurais/lampada-acesa-luz-700-1109866.jpg" alt="" />
                    
                ) : (
                    <img style={{width:240}}src="https://img.freepik.com/vetores-gratis/lampada-realistica-isolada-de-vetor-sobre-branco_1284-41931.jpg?semt=ais_hybrid&w=740" alt="" />
                )
            }
        </>
     );
}
 
export default Interruptor;