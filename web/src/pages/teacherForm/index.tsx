import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom'
import PageHeader from '../../components/pageHeader';
import Input from '../../components/input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/textarea';
import Select from '../../components/select';
import './styles.css'
import api from '../../service/api';

function TeacherForm() {
    const history = useHistory();

    // useState, principio da imutabilidade, 
    // nao podemos alterar o valor de uma variavel
    // sempre criamos outra variavel com as devidas atualizacoes
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([

        {
            week_day: 7,
            from: '',
            to: ''
        }

    ]);

    function addNewSchelueItem() {
        setScheduleItems([
            // copiando a informação já existente para criar um novo Array
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);

    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        // prevenir comportamento padrao do submit
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            // Envia usuário para landing page
            history.push('/');
        }).catch(() => {
            alert('Erro no cadastro!')
        })

        console.log({
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            scheduleItems
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrível que vc quer dar aulas."
                description="O primeira passo é preencher esse formulário de inscrição." />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome Completo"
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />

                        <Input
                            name="avatar"
                            label="Avatar"
                            type="text"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />

                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            type="text"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />

                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />

                    </fieldset>


                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matérias"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Física', label: 'Física' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Matemática', label: 'Matemática' }
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo da sua hora/aula"
                            type="text"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                        <button type="button" onClick={addNewSchelueItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da Semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    <Input
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input
                                        name="to"
                                        label="Às"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)} />
                                </div>
                            );
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante!" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </form>
            </main>


        </div>
    )
}

export default TeacherForm;