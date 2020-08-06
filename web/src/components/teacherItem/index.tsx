import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/48971965?s=460&u=61011daf50c4e17579b569f81e3cb28ec8e2c364&v=4" alt="" />

                <div>
                    <strong>Professor Bruno</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo.
            <br /> <br />
            Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo Maluco é brabo
        </p>
            <footer>
                <p>preço/hora
                <strong>R$50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}
export default TeacherItem;