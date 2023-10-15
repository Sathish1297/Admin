import './chart.css'
// import '../../dummyData'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { grid } from '@mui/system';

export default function Chart({title, data, dataKey}) {

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line type="monotone" dataKey={dataKey} stroke="#8884d8"/>
                <Tooltip/>
                <Legend/>
                { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
