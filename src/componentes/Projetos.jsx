import React from "react"
import { Link } from 'react-router-dom'

function Projetos () {
return (
    <section id="content-project">
<section id="project-link" className="project">
    <Link id="pixel-art" to='/starWars'></Link>
    <div>
        <p>Projeto paleta de cores… Foi o primeiro projeto que eu fiz, ele todo foi feito com HTML, CSS, e Js. Fique à vontade para testar e se divertir!!!</p>
    </div>
</section>
    <section className="project test">
    <div>
        <p>Projeto Lista de tarefas… Esse projeto foi um grande desafio, durante as semanas de desenvolvimento dele eu não consegui entregar o que eu achava justo pelo conhecimento que eu já tinha, e por isso fiquei um tempo sem mexer nele. Depois de algumas semanas, voltei com a cabeça mais fria e o resultado foi ótimo! Fique à vontade para testar e se divertir!!!</p>
    </div>
    <a id="todo-list" href="../projetos/todo-list" target="_blank">
    </a>
</section>
    <section className="project">
        <a id="trybeWarts" href="../projetos/trybewarts" target="_blank">
        </a>
        <div>
            <p>Projeto Trybewarts... Primeiro projeto desenvolvido em dupla na Trybe. Foi uma experiencia muito gratificante poder fazer, pela primeira vez, códigos em conjunto com outra pessoa. A troca de experiencias e o desenvolvimento pessoal para ambos, foi muito boa! Fique à vontade para testar e se divertir!!! OBS: projeto apenas visual, suas funçoes de enviar e login não funcionam...</p>
        </div>
</section>
    <section className="project test">
    <div>
        <p>Projeto Shopping Cart... Esse foi um projeto muito difícil de terminar. Pela primeira vez, tive que mexer com APIs e funções assíncronas, além das maravilhosas Promises. Fique à vontade para testar e se divertir!!!</p>
    </div>
    <a id="shopping-cart" href="../projetos/shopping-cart" target="_blank">
    </a>
</section>
    </section>
)
}

export default Projetos;