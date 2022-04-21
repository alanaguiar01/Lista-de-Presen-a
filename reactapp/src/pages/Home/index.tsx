import "./styles.css";
import { Card } from "../../components/Card";
import React, {useEffect, useRef, useState} from 'react'
import {Link } from 'react-router-dom';


// const [(variavel alterada) studentName, (função que altera a vareavel)setStudentName] = useState("")
//O use state é usaddo para renderizar um elemento 

type Student = {
  id: string
  name: string
  time: Date
}
export default function Home() {
  //const [studentName, setStudentName] = useState("") //passar o nome do estudante dinamicamente
  const inputRef = useRef<HTMLInputElement>(null)
  const [students, setStudents] = useState<Student[]>([])//passar o dados do estudante
  const [teacher, setTeacher] = useState({name: '', avatar: ''})
  function handleAddStudent(){
    const newStudent: Student = {
      id: window.crypto.randomUUID(),
      name: inputRef.current?.value!,
      time: new Date()
    };
    console.log(JSON.stringify(newStudent));
    
    fetch('http://localhost:3005/student', {
      method: 'POST',
      body: JSON.stringify(newStudent),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    setStudents((prevState: Student[]) => [...prevState, newStudent]);
    //adiciona um novo aluno na lista e copia o aluno ja adicionado

  }

  useEffect(() => {
    // Dentro do objeto devemos colocar todas. ações que serão executadas.
    fetch('https://api.github.com/users/alanaguiar01')//link da API
      .then((response) => response.json()) //Transforma a API em arquivo json
      .then((data) => { //recebe os dados da API
        setTeacher({ //funçao que atualiza os dados da variavel teacher.
          name: data.name,
          avatar: data.avatar_url
        })
      })
    
  },[])// Os arrays definem quais os estados que o useEffect depende.

  return (
    <div id="list">
      
      <header>
        <h1>Adicione o nome na lista</h1>
        <div>
          <strong>{teacher.name}</strong>
          <img src={teacher.avatar} alt="Foto de perfil"/>
        </div>
      </header>     
      
      <input 
      ref={inputRef}
      type="text" 
      placeholder="Digite o nome..."
      />
      <div id="bttons">
        <button type="button" onClick={handleAddStudent}>Adicionar</button>
        <Link to="/playoff"><button type="button" >Concluir</button></Link>
      </div>
      
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
