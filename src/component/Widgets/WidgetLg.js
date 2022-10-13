import Card from '../Card/Card';
import './widgetlg.css'
import cardData from '../../cardData';

function WidgetLg(){
    const items = cardData.map((item) => {
        return <Card
        key = {item.id}
        img = {item.img}
        name = {item.name}
        designation = {item.designation}
        title = {item.title}
        price = {item.price} 
        />
      })
        return(
           <div className='widgetlg'>
             {items}
           </div> 
        );
}

export default WidgetLg;    