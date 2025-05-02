import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    return ( 
        <>
            <button onClick={() => setContador(contador + 1)}>Clicar</button>
            <h3>Contagem: {contador}</h3>
        </>
     );
}
 
export default Contador;