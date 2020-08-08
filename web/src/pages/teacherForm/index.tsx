import React from 'react';
import PageHeader from '../../components/pageHeader';
import './styles.css'
import Input from '../../components/input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/textarea';
import Select from '../../components/select';

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
                    <Textarea name="bio" label="Biografia"></Textarea>

                </fieldset>


                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select
                        name="subject"
                        label="Matérias"
                        options={[
                            { value: 'Física', label: 'Física' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Matemática', label: 'Matemática' }
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora/aula" type="text"></Input>

                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                        <button type="button">+ Novo horário</button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            name="week_day"
                            label="Dia da"
                            options={[
                                { value: '0', label: 'Domingo' },
                                { value: '1', label: 'Segunda' },
                                { value: '2', label: 'Terça' },
                                { value: '3', label: 'Quarta' },
                                { value: '4', label: 'Quinta' },
                                { value: '5', label: 'Sexta' },
                                { value: '6', label: 'Sábado' }
                            ]}
                        />
                        <Input name="from" label="Das" type="time"></Input>
                        <Input name="to" label="Às" type="time"></Input>
                    </div>

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