import './item.css'
function Item(props){
    return(
        <div className='item'>
            할일 : {props.data}
            <button onClick={() => {
                props.ondeltodo()}}>삭제</button>
        </div>
    )

}
export default Item;