import { useState } from 'react'
import jogoDaVelha from '../../assets/jogo-Da-Velha.png'
import jogoDaVelha2 from '../../assets/jogo-Da-Velha2.png'
import jogoDaMemoria from '../../assets/jogo-Da-Memoria.png'
import jogoDaMemoria2 from '../../assets/jogo-Da-Memoria2.png'
import './home.scss'

export default function Home() {


    
    const[jogos, setJogos] = useState([
        {
            id: 0,
            selecionado: false,
            nome: 'Jogo da Velha',
            imagemBase: jogoDaVelha2,
            imagemHover: jogoDaVelha,
            imagemMostrando: jogoDaVelha2
        },
        {
            id: 1,
            selecionado: false,
            nome: 'Jogo da Memoria',
            imagemBase: jogoDaMemoria2,
            imagemHover: jogoDaMemoria,
            imagemMostrando: jogoDaMemoria2
        },
        {
            id: 2,
            selecionado: false,
            nome: 'Em breve',
            imagemBase: '',
            imagemHover: '',
            imagemMostrando: ''
        },
    ])
    const mudarImagem = (id, entrando) => {
        const novoJogos = [...jogos]
        console.log('passou o pau')

        if(entrando) {
            novoJogos.forEach(e => {
                e.selecionado = e.id === id
                e.selecionado ? e.imagemMostrando = e.imagemHover : ''
                console.log("entrando")
            })
        } else {
            novoJogos.forEach(e => {
                e.selecionado = e.id === id
                e.selecionado ? e.imagemMostrando = e.imagemBase : ''
                console.log('saindo')
            })
        }

        setJogos(novoJogos)
    }
    
    return (
        <main>
            <section className='home'>
                <h2>
                    Games
                </h2>
                <article>
                    {jogos.map((e) => (
                        <figure onMouseEnter={() => mudarImagem(e.id, true)} onMouseLeave={() => mudarImagem(e.id, false)} key={e.id}>
                            <img src={e.imagemMostrando} alt={e.nome} />
                            <figcaption>
                                {e.nome}
                            </figcaption>
                        </figure>
                    ))}
                </article>
            </section>
        </main>
    )
}