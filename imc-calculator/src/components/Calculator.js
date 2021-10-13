import { Container } from "./style" 

export function Calculator() {

    function calculate() {
        
    }

    return (
        <Container>
            <div>
                <input type="number" placeholder="Altura em metros"/>
            </div>
            
            <div>
                <input type="number" placeholder="Peso em kilogramas"/>
            </div>

            <button>Calcular</button>

            <div>
                <p>Seu IMC é: 20</p>
            </div>
        </Container>
    )
}