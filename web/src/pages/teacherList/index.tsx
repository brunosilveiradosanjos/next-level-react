import React from 'react';
import './styles.css'
import PageHeader from '../../components/pageHeader';
import TeacherItem from '../../components/teacherItem'
import Input from '../../components/input'

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">

                    <Input name="subject" label="Matéria" type="text"></Input>
                    <Input name="week_day" label="Dia da Semana" type="text"></Input>
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