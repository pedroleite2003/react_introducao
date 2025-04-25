import BemVindo from "./BemVindo";
import Bolo from "./Bolo";
import Carro from "./Carro";
import Musica from "./Musica";

const App = () => {
  return ( 
    <>
      <h1>Ola mundo</h1>
      <BemVindo nome="Ailana" cidade="Aquiraz"/>
      <BemVindo nome="André" cidade="Fortaleza"/>
      <BemVindo nome="Marcio" cidade="Fortaleza"/>
      <BemVindo nome="Victor" cidade="Maracanau"/>

      <Bolo sabor="cenoura" cobertura="chocolate"/>
      <Bolo sabor="chocolate" cobertura="chocolate"/>
      <Bolo sabor="fubâ" cobertura="chocolate"/>
      <Bolo sabor="formigueiro" cobertura="chocolate"/>

      <Carro modelo="Civic" marca="Honda"/>

      <Musica instrumento="piano" banda="Bon Jovi"/>
    </>
   );
}
 
export default App;