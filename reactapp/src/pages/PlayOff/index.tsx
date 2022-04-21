import './styles.css'
import { Card } from "../../components/Card";
import { useEffect, useState } from 'react';
import { RandomRoundRobin, SequentialRoundRobin } from 'round-robin-js';

type PlayOffProps = {
    phase: 'oitavas' | 'quartas' | 'semiFinal' | 'final'
}

type Student = {
    name: string
    id: string
}

type RandomStudent = RandomRoundRobin<Student> 

type Title = string

export default function PlayOff({phase}: PlayOffProps) {
    
    const [title, setTitle] = useState<Title>();
    function getPhaseLength(){
        switch (phase) {
            case 'oitavas':return 8
            case 'quartas':return 4
            case 'semiFinal':return 2
            case 'final':return 1
        } 
    } 

    const [student, setStudent] = useState<RandomStudent>()
    useEffect(() => {
        fetch('http://localhost:3005/student')
            .then(data => data.json())
            .then(data => {
                const randomData = data.sort(() => .5 - Math.random())
                const randomTable = new SequentialRoundRobin<Student>(randomData);
                setStudent(randomTable) 
            })
            switch (phase) {
                case 'oitavas':
                    setTitle('Oitavas de Final')
                    break;
                case 'quartas': 
                    setTitle('Quartas de Final')
                    break;
                case 'semiFinal': 
                    setTitle('Semi de Final')
                    break;
                case 'final': 
                    setTitle('Final')
                    break;
                default: 
                    return null
            } 
    }, [])
    return(
        <div id="container">
            <header>
                <h1>{title}</h1>
            </header>
            <section>
                <div id="firstLine">
                    {/* {Array.from({length: 8}, (_, index) => {
                        return <div key={index} className="firstMcs"></div>
                    })} */
                    }
                    {
                        Array.from({length: getPhaseLength()}, (_, index) => {
                            const studentRandom = student?.next()
                            return <div key={index} className="firstMcs">{studentRandom?.value.name}</div>
                        })
                    }  
                </div>
                
                <div id="secondLine">
                    {
                        Array.from({length: getPhaseLength()}, (_, index) => {
                            const studentRandom = student?.next()
                            return <div key={index} className="secondMcs">{studentRandom?.value.name}</div>
                        })
                    }
                </div>
            </section>
        </div>
        
    )
}