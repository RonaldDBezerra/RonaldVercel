import React from "react";
import Typewriter from "typewriter-effect"
import { VscGithubInverted } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";
import Animation from "./Animation";
function Main() {
    return (
        <>
        <main id="main-content">
        <section id="content-section-of-main">
        <h1>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                dalay: 40,
                strings:[
                    'Bem vindo...',
                    'Eu sou o Ronald...',
                    'Desenvolvedor web!',
                ],
            }} />
        </h1>
            <h2>
                Desenvolvedor Front-end JR
            </h2>
            <section id="content-liks">
                <span id="span-liks">
                        <a href="https://www.linkedin.com/in/ronalddamasio/" target="__blank">
                            <div>
                                <AiFillLinkedin />
                                <p>Linkedln</p>
                            </div>
                        </a>
                        <a href="https://github.com/RonaldDBezerra" target="__blank">
                            <div>
                                <VscGithubInverted />
                                <p>Github</p>
                            </div>
                        </a>
                </span>
            </section>
        </section>
        <span id="span-Imagem">
            <Animation />
        </span>
    </main>
                </>
    )
}

export default Main;