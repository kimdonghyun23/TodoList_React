import Item from "../Item/item"
import './itemlist.css'
function Itemlist(props){ // props.todos 배열, props.ondeltodo 함수
    return(
        
        <div className="Itemlist">
            {props.todos.map((todo, index) =>{
                return (
                <Item key={index} data={todo} ondeltodo={() => {props.ondeltodo(index)}}></Item>
                )
            })}
        </div>
    )
}

export default Itemlist;