import React, { useState, FormEvent } from 'react';
import './styles.css'
import PageHeader from '../../components/pageHeader';
import TeacherItem, { Teacher } from '../../components/teacherItem'
import Input from '../../components/input'
import Select from '../../components/select';
import api from '../../service/api';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        const res = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })
        console.log(res.data);
        setTeachers(res.data);


    }

    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers" onSubmit={searchTeachers}>
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
                    <Select
                        name="week_day"
                        label="Dia da"
                        value={week_day}
                        onChange={(e) => { setWeek_day(e.target.value) }}
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
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }} type="time"
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList;