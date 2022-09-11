
import React from 'react';
import Cell from "./Cell";
import moment from "moment";
// import  '/src/App.css'
import { styles } from "./styles";
import styled from 'styled-components'
// import {Day} from "@julienvanbeveren/react-datetime-picker/src/components/general/date-selector/Day";
const ContentCellBlock = styled.div`
        color: ${props => props.isSelectedMonth ? 'black' : '#d3d9d3'};
        background-color: ${props => props.isCurrentData ? '#4FD1C5' : 'beige'};`


const SpaceCal = ({ startMonthDay, now, tasks }) => {
    const totalMaxDayMonth = 42
    const someDay = startMonthDay.clone().subtract(1, 'day');
    const arrayMaxDayMonth = [...Array(totalMaxDayMonth)].map(() => someDay.add(1, 'day').clone());
    // const today = moment()
    const isCurrentData = (someDay) => moment('day').isSame(someDay, 'day');
    const isSelectedMonth = (someDay) => now.isSame(someDay, 'month');
    // проблемы с отображением текущей даты
    // console.log(someDay)
    // console.log(isCurrentData)

    // const getLocaleStore = ()=>{
    //     const keys = [];
    //     for (let key in localStorage) {
    //         if (key.indexOf(" GMT+0300") > -1)
    //             keys.push(key);
    //     }
    //     const dataArray = keys.map(function(key) {
    //         return JSON.parse(localStorage.getItem(key));
    //     });
    //     console.log(dataArray[dataArray.length-1])
    // }
    // getLocaleStore()

    const keys = [];
    for (let key in localStorage) {
        if (key.indexOf(" GMT+0300") > -1)
            keys.push(key);///all keys is locale
    }
    // console.log(keys)
    // const dataLocal = keys[keys.length-1].map((key)=> {
    //     JSON.parse(localStorage.getItem(key));
    // });
    const dataLocal = JSON.parse(localStorage.getItem(keys[keys.length - 1]))
    console.log(dataLocal)

    return (
        <div className='content-block'>
            {arrayMaxDayMonth.map((currentData) => (
                // key=moment().unix()

                < >{(currentData.day() === 6 || currentData.day() === 0)
                    ?
                    <ContentCellBlock isSelectedMonth={isSelectedMonth(currentData)} isCurrentData={isCurrentData(currentData.format('DD'))}>
                        <Cell
                            // daysWeek={daysWeek}
                            number={currentData}
                            // isCurrentData={isCurrentData}
                            key={currentData.unix()}
                            style={styles.Holiday}
                            weekDay={moment().day(currentData.day())}
                            tasks={tasks}
                            dataLocal={dataLocal}
                        />
                    </ContentCellBlock>
                    :
                    <ContentCellBlock isSelectedMonth={isSelectedMonth(currentData)} isCurrentData={isCurrentData(currentData.format('DD'))}>
                        <Cell
                            // daysWeek={daysWeek}
                            number={currentData}
                            isCurrentData={isCurrentData}
                            key={currentData.unix()}
                            style={styles.EveryDay}
                            tasks={tasks}
                            dataLocal={dataLocal}
                            weekDay={moment().day(currentData.day())}
                        />
                    </ContentCellBlock>
                }</>
            ))}
        </div>

    );
};

export default SpaceCal;

