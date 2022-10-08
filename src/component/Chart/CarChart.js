import './carchart.css';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import {data} from '../../ChartData'

function CarChart(){
    return(
        <div className='carChart'>
            <div className = 'chartTitle'><h3>User Analytics </h3></div>
            <ResponsiveContainer width="100%" aspect = {4/1}>
                <LineChart data={data}>
                    <XAxis dataKey="month" stroke='green' />
                    <Line type='monotone' dataKey="employes" stroke='#5550bd' />
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default CarChart;