import React from 'react';
import styleModal from './ModalAddTask.module.css'
const ModalAddTask = ({children, visible, setVisible}) => {
const mainstaly = [styleModal.myModal]
    if (visible){
        mainstaly.push(styleModal.active)
    }
    return (
        <div className={mainstaly.join(' ')} onClick={()=>setVisible(false)}>
            <div className={styleModal.myModalContent} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default ModalAddTask;
