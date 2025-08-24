import { useState } from 'react';
import './inputitem.css'
function Inputitem(props){ // props.onaddtodo(inputvalue)
    const [inputvalue, setinputvalue] = useState('')
    const isinputempty = () => { // input이 비었는지 여부
        if (inputvalue === '')
            return true;
        else return false
    }

    return (
        <div className='inputitem'>
            <input type='text'
            value={inputvalue}
            onChange={(event)=>{
                setinputvalue(event.target.value)
            }} ></input>
            <button className='inputbutton' onClick={()=>{
                props.onaddtodo(inputvalue)
                setinputvalue('')}} 
                disabled={isinputempty()}>추가</button>
        </div>
    )
}

export default Inputitem;