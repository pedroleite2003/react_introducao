import { useEffect, useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const [decrementador, setDecrementador] = useState(0);

    useEffect(() => {
        console.log("Todas as vezes");
        
    })
    useEffect(() => {
        console.log("Apenas uma vez");
        
    }, [])
    useEffect(() => {
        console.log("Toda vez que o decrementador for ativado");
        
    }, [decrementador])
    return ( 
        <>
            <button onClick={() => setContador(contador + 1)}>Clicar</button>
            <h3>Contagem: {contador}</h3>

            <button onClick={() => setDecrementador(decrementador - 1)}>Clicar</button>
            <h3>Contagem: {decrementador}</h3>
        </>
     );
}
 
export default Contador;