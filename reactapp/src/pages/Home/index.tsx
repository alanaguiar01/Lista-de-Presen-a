import "./styles.css";
import { Card } from "../../components/Card";
import React, {useState} from 'react'

// const [(variavel alterada) studentName, (função que altera a vareavel)setStudentName] = useState("")
//O use state é usaddo para renderizar um elemento 

type Student = {
  id: number
  name: string
  time: Date
}
export function Home() {
  const [studentName, setStudentName] = useState("") //passar o nome do estudante dinamicamente
  const [students, setStudents] = useState<Student[]>([])//passar o dados do estudante
  let i = 0
  function handleAddStudent(){
    const newStudent: Student = {
      id: i+1,
      name: studentName,
      time: new Date()
    };
    setStudents((prevState: Student[]) => [...prevState, newStudent]);
    //adiciona um novo aluno na lista e copia o aluno ja adicionado
  }

  return (
    <div id="list">
      <h1>Adicione o nome na lista</h1>
      <input 
      type="text" 
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)}// função pra pegar o valor atual
      />
      <button type="button" onClick={handleAddStudent}>Adicionar</button>
      
      {
        students.map(student => <Card 
          key={student.id}//elemento diferenciado de todos os outros  
          name={student.name} 
          time={student.time}/>)
        //percorrendo o card de forma dinamica e adicionando os valores
      }
      
    </div>
  )
}
