import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './piechart.css';

function PieCharts(){
    const data = [
        { name: 'React', value: 60   },
        { name: 'Java', value: 80 },
        { name: 'Laravel', value: 42 },
        { name: 'Python', value: 75 },
      ];
      
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };

    return(
        <div className='piechart'>
                <PieChart width={200} height={200   }>
                <Pie 
                data={data} 
                dataKey="value" 
                cx={100} 
                cy={100}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80} 
                fill="#8884d8" >

                {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                </Pie>
                <Tooltip />
                </PieChart>
            
        </div>
        
    )
}

    


export default PieCharts;