import  './card.css'

function Card(props){

    return(
        <div className="card">
            <img src={props.img} alt="image" className='cardImg' />
            <div className="stats">
                <img src='./image/Star.png' alt='star' className='star'/>
                <span>{props.name} </span>
                <span className="gray">{props.designation}.</span>
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default Card;