import "./styles.css";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <div id="list">
      <h1>Adicionar na Lista de Presença</h1>
      <input type="text" placeholder="Digite o nome"/>
      <button type="button">Adicionar</button>
      
      <Card  name='Joao Batista' time="10:55:25"/>
      <Card name="Alan Martins" time="11:22:25"/>
    </div>
  )
}
