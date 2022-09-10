import React from 'react';
import styled from 'styled-components'
import ModalEditTask from "./ModalEditTask/ModalEditTask";
import MyInput from "./CustomEl/input/MyInput";
import MyButton from "./CustomEl/button/MyButton";
import removeImage from "./assets/remove_icon.svg";
import { useState } from "react";
import moment from "moment";

const EventList = styled('div')`
color: #f5f5dc ;
  background-color: #313133;
  cursor: pointer;
  //margin: 15px 0;
  width: 100%;
  //border: 1px solid white;
`
const CellCard = styled('div')`
    //display: flex;
    align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  
`
const Cell = ({ number, style, weekDay, tasks, dataLocal, key }) => {
    const [modalEdit, setModalEdit] = useState(false)



    const [titleEdit, setTitleEdit] = useState(tasks.title)
    const [bodyEdit, setBodyEdit] = useState(tasks.body)



    const editTask = (ev) => {
        ev.preventDefault()
        setModalEdit(false)


    }

    return (
        <>
            <ModalEditTask visible={modalEdit} setVisible={setModalEdit}>
                <form className="form-content">
                    <h2>Edit idea item</h2>

                    <h4>Title*</h4>
                    <MyInput
                        type='text'
                        placeholder='Task title...'
                        value={titleEdit}
                        onChange={e => setTitleEdit(e.target.value)} />
                    <h4>Description</h4>
                    <MyInput
                        type='text'
                        placeholder='Task description...'
                        style={{ height: '100px' }}
                        value={bodyEdit}
                        onChange={e => setBodyEdit(e.target.value)}
                    />
                    <h4>Date</h4>
                    <div>{tasks.date}</div>
                    <div className="modal-btn__block">
                        {/*<MyButton  onClick={remoteTaskFields} style={{backgroundColor: "red", width:'60px'}}><img alt='img' style={{width: "40px"}} src={removeImage}/></MyButton>*/}
                        <MyButton onClick={editTask}>Save</MyButton>
                    </div>


                </form>
            </ModalEditTask>

            <CellCard style={style}>
                <div style={{ display: 'flex', justifyContent: "space-between", }}>{number.format('D')} {weekDay.format('ddd')}</div>
                <EventList onClick={() => setModalEdit(true)}>
                    {tasks.filter(task => (((task.date) >= number.format('x')) && ((task.date) <= number.clone().endOf('day').format('x')))).map(task => (
                        <div >{task.title}</div>

                    ))}
                </EventList>
            </CellCard>
        </>


    );
};

export default Cell;