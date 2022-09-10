

import './App.css';
import moment from 'moment'
// import NavigationCal from "./components/NavigationCal";
import SpaceCal from "./components/SpaceCal";
import React, { useState, useEffect } from 'react';
import ModalAddTask from "./components/ModalAddTask/ModalAddTask";

import FindDate from "./components/FindDate";
// import TaskAddForm from "./components/TaskAddForm";
import MyInput from "./components/CustomEl/input/MyInput";
import MyButton from "./components/CustomEl/button/MyButton";
import removeImage from "./components/assets/remove_icon.svg";
import ModalEditTask from "./components/ModalEditTask/ModalEditTask";
function App() {
    const [nowMoment, setNowMoment] = useState(moment())

    moment.updateLocale('en', { week: { dow: 1 } })
    const startMonthDay = nowMoment.clone().startOf('month').startOf('week')

    const prevMonth = () => { setNowMoment(prev => prev.clone().subtract(1, 'month')) }
    const nextMonth = () => { setNowMoment(prev => prev.clone().add(1, 'month')) }
    const [modal, setModal] = useState(false)

    /////
    const [tasks, setTasks] = useState(
        [{ id: 1, title: 'task1', body: 'body1', date: 11111111221 },
            { id: 2, title: 'task2', body: 'body2', date: 1111111112 },]
    )


    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [date, setDate] = useState(1111111111)


    const addNewTask = (ev) => {
        ev.preventDefault()
        const newTask = {
            id: moment().day(),
            title,
            body,
            date: new Date(String(date).split(".").join(".")).getTime(),
        }
        setTasks([...tasks, newTask])

        setModal(false)


    }


    // console.log(tasks[tasks.length-1])
    ///DATA SET TO LOCALSTOREGE
    useEffect(() => {
        localStorage.setItem(`${moment()}`, JSON.stringify(tasks));
    }, [tasks]);



    const remoteTaskFields = (e) => {
        e.preventDefault()
        // setTasks({id: 1, title: '', body: '', date: ''}, { })
        setModal(false)

    }
    return (
        <div >
            <div className='navigation'>

                <div className="wrap_addTask" style={{ marginBottom: '20px' }} onClick={() => setModal(true)}>
                    <button className="button_addTask">+</button>
                </div>
                <ModalAddTask visible={modal} setVisible={setModal}>
                    <form className="form-content">
                        <h2>Add new idea item</h2>
                        <span>Create at </span>
                        <h4>Title*</h4>
                        <MyInput
                            type='text'
                            placeholder='Task title...'
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                        <h4>Description</h4>
                        <MyInput
                            type='text'
                            placeholder='Task description...'
                            style={{ height: '100px' }}
                            value={body}
                            onChange={e => setBody(e.target.value)}
                        />
                        <h4>Date</h4>
                        <MyInput style={{ width: '100px' }}
                                 type='date'
                                 value={date}
                                 onChange={e => setDate(e.target.value)}
                        />
                        <div className="modal-btn__block">
                            <MyButton onClick={remoteTaskFields} style={{ backgroundColor: "red", width: '60px' }}><img alt='img' style={{ width: "40px" }} src={removeImage} /></MyButton>
                            <MyButton onClick={addNewTask}>Save</MyButton>
                        </div>


                    </form>
                </ModalAddTask>

                <FindDate prevMonth={prevMonth} nextMonth={nextMonth} now={nowMoment} />

            </div>
            <SpaceCal startMonthDay={startMonthDay} now={nowMoment} tasks={tasks} />
        </div>
    );
}

export default App;
