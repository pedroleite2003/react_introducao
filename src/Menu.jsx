import { useState } from "react";

const Menu = () => {
    const [gaveta, setGaveta] = useState(false);

    return ( 
        <>
            <div>
                <h3 onClick={() => setGaveta(!gaveta)}>menu</h3>
            </div>
            <div className={`absolute duration-200 ${gaveta ? "left-0" : "-left-full"}`}>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </div>
        </>
     );
}
 
export default Menu;