import {useState} from 'react'

import { Container } from "./style"

export function Calculator() {

    const [height, setHeight] = useState()
    const [weight, setWeigth] = useState()
    const [IMC, setIMC] = useState(0)

    const calculate = (e) => {
        e.preventDefault()
        setIMC(weight / (height*height))
    }

    return (
        <Container>
            <form onSubmit={calculate}>
                <div>
                    <input 
                        type="number" 
                        value={height} 
                        placeholder="Altura em metros"
                        onChange={event => setHeight(Number(event.target.value))}
                    />
                </div>
                
                <div>
                    <input 
                        type="number" 
                        value={weight} 
                        placeholder="Peso em kilogramas"
                        onChange={event => setWeigth(Number(event.target.value))}
                    />
                </div>

                <button type="submit">Calcular</button>
            </form>

            <div>
                <p>Seu IMC é: {IMC.toFixed(2)}</p>
            </div>
        </Container>
    )
}