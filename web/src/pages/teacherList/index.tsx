import React from 'react';
import './styles.css'
import PageHeader from '../../components/pageHeader';

function TeacherList() {
    return (
        <div className="container" id="page-teacher-list">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject" className="subject">Matérias</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day" className="subject">Dia da semana</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time" className="subject">Hora</label>
                        <input type="text" id="subject" />
                    </div>

                </form>
            </PageHeader>
        </div>
    )
}

export default TeacherList;