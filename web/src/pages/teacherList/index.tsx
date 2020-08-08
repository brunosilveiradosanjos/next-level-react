import React from 'react';
import './styles.css'
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem'
import Input from '../../components/input'
import Select from '../../components/select';

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">
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
                    <Input name="time" label="Hora" type="time"></Input>

                </form>
            </PageHeader>
            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;