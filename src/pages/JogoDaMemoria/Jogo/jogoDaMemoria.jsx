import { useEffect, useState } from "react"
import "./jogoDaMemoriaStyle.scss"

export default function JogoDaMemoria(teste) {


    const corNormalDeFundo = 'radial-gradient(circle, rgba(17,86,58,1) 65%, rgba(16,133,84,1) 120%)'
    const[cartas, setCartas] = useState([
        {
            id: 0,
            corBase: '#ffffff',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 1,
            corBase: '#ffffff',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 2,
            corBase: '#000000',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 3,
            corBase: '#000000',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 4,
            corBase: '#0ce6f2',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 5,
            corBase: '#0ce6f2',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 6,
            corBase: '#1e579c',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 7,
            corBase: '#1e579c',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 8,
            corBase: '#cbb917',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 9,
            corBase: '#cbb917',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 10,
            corBase: '#bf481d',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 11,
            corBase: '#bf481d',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 12,
            corBase: '#49065e',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 13,
            corBase: '#49065e',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 14,
            corBase: '#b01025',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
        {
            id: 15,
            corBase: '#b01025',
            corSelecionada: corNormalDeFundo,
            corAtras: corNormalDeFundo,
            selecionado: false,
            ordem: Math.floor(Math.random() * 32)
        },
    ])

    const[movimentos, setMovimentos] = useState(1)

    const[iguais, setIguais] = useState([])
    const[selecionados, setSelecionados] = useState([])
    const[selecionadosId, setSelecionadosId] = useState([])

    console.log(teste)

    const selecionarCartas = (id) => {
        const novoCartas = [...cartas];

        novoCartas.forEach(e => {
            e.selecionado = e.id === id

            e.selecionado ? e.corSelecionada = e.corBase : ''
            e.selecionado ? selecionados.push(e.corBase) : ''
            e.selecionado ? selecionadosId.push(e.id) : ''
            e.selecionado && selecionadosId[0] !== selecionadosId[1] ? setMovimentos(movimentos + 1) : ''
        })
        // Quando as cartas selecionadas são iguais
        if(selecionados.length === 3 && cartas[selecionadosId[0]].corBase === cartas[selecionadosId[1]].corBase && selecionadosId[0] !== selecionadosId[1])  {
            cartas[selecionadosId[0]].corAtras = cartas[selecionadosId[0]].corBase
            cartas[selecionadosId[1]].corAtras = cartas[selecionadosId[0]].corBase
            selecionados.splice(0, 2)
            selecionadosId.splice(0, 2)

            novoCartas.forEach(e => {
                e.corSelecionada = e.corAtras
                e.selecionado ? e.corSelecionada = e.corBase : ''
            })

        // Quando as cartas selecionadas não são iguais
        } else if(selecionados.length === 3) {
            selecionados.splice(0, 2)
            selecionadosId.splice(0, 2)

            novoCartas.forEach(e => {
                e.corSelecionada = e.corAtras
                e.selecionado ? e.corSelecionada = e.corBase : ''
            })
        }

        setCartas(novoCartas)
      };

      const[cartasAtivas, setCartasAtivas] = useState(16)

      const QuantasCartas = (e) => {
        setCartasAtivas(e.target.value)
      }
      
      const reset = () => {
        window.location.reload(false)
      }

    return (
        <main>
            <div className="selecionadorDeQuantidade">
                <h2 onClick={reset}>
                    ↻
                </h2>
                <select name="" id="" onChange={QuantasCartas}>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16" selected>16</option>
                </select>
                <h4>
                    Jogadas
                </h4>
                <h3>
                    {movimentos - 1}
                </h3>
            </div>
            <section className="areaDoJogoMemoria">
                {cartas.map((e) => (
                    <article onClick={() => selecionarCartas(e.id)} key={e.id} style={{background: e.corSelecionada, order: e.ordem}}>
                        
                    </article>
                )).splice(0, cartasAtivas)}
            </section>
        </main>
    )
}