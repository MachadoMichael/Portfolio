import React from 'react'

export default function About() {
  return (
    <div className='about'>
      <div className='description'>
        <h1 className='title_about'>Michael Machado</h1>
        <p>
          Oriundo do empreendedorismo conheci a programação no início do ano, logo em seguida
          comecei a tentar entender melhor a carreira. E depois de algum tempo pesquisando, inicie o curso
          <a className='link_progbr' href='https://programadorbr.com/'>PROGRAMADOR BR</a> e logo no
          inicio do curso nos módulos de HTML e CSS já achava incrível o que estava aprendendo,
          porém no primeiro contato com uma linguagem de programação (javascript) tudo mudou.
          A sensação pode ser descrita como "Neo aprendendo a controlar a matrix", o "poder" de
          conseguir utilizar a tecnologia para resolver problemas "reais" é fascinante. Desde então venho
          estudando diariamente e desenvolvendo projetos para evoluir profissionalmente.

        </p>
        <h3 className='title_about'>Citação</h3>
        <div className='quote'>
          " conhecimento = ((estudo + prática) x constância)<sup>tempo</sup> "
        </div>

        <h3 className='title_about'>Estudando atualmente</h3>
        <ul>
          <li>TypeScript</li>
          <li>Inglês</li>
          <li>Espanhol</li>
        </ul>
      </div>


      <div className='photo'></div>

    </div>
  )
}
