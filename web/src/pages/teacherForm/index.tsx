import React from 'react';
import PageHeader from '../../components/pageHeader';
import './styles.css'
import Input from '../../components/input';
import warningIcon from '../../assets/images/icons/warning.svg';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que vc quer dar aulas."
                description="O primeira passo é preencher esse formulário de inscrição." />



            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo" type="text"></Input>
                    <Input name="avatar" label="Avarar" type="text"></Input>
                    <Input name="whatsapp" label="Whatsapp"></Input>

                </fieldset>


                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="subject" label="Matérias" type="text"></Input>
                    <Input name="cost" label="Custo da sua hora/aula" type="text"></Input>

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante!" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">Salvar cadastro</button>
                </footer>
            </main>


        </div>
    )
}

export default TeacherForm;