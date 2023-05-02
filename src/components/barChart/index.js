import useSWR from 'swr'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { fetcher, getApiRoute } from '@/utils'

export default function BarChartComponent({ id }) {
  const { data, error } = useSWR(getApiRoute(id, 'activity'), fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const renderTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: `${payload[1].fill}`,
            color: '#fff',
          }}
        >
          <p
            className="label"
            style={{ padding: '20px' }}
          >{`${payload[0].value} kg`}</p>
          <p
            className="label"
            style={{ padding: '20px' }}
          >{`${payload[1].value} kCal`}</p>
        </div>
      )
    }

    return null
  }

  const getLegend = (legend) => {
    if (legend == 'kilogram') return 'Poids (kg)'
    return 'Calories brûlées (kCal)'
  }

  const renderLegend = (props) => {
    const { payload } = props

    return (
      <ul
        style={{
          paddingRight: '25px',
          display: 'flex',
          gap: '15px',
        }}
      >
        <li key={`item`} style={{ marginRight: 'auto' }}>
          Activité quotidienne
        </li>
        {payload.map((entry, index) => (
          <li key={`item-${index}`} style={{ color: '#74798c' }}>
            <div
              style={{
                display: 'inline-block',
                borderRadius: '6px',
                width: '12px',
                height: '12px',
                backgroundColor: entry.color,
                marginLeft: '40px',
                marginRight: '5px',
              }}
            ></div>
            {getLegend(entry.value)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data.sessions}
        title="Chart of PU x UV"
        margin={{
          top: 35,
          left: 40,
          right: 10,
          bottom: 10,
        }}
        barSize={10}
        style={{ backgroundColor: '#FBFBFB' }}
      >
        <CartesianGrid strokeDasharray="2" vertical={false} />
        <XAxis
          dataKey={'step'}
          tickLine={false}
          scale="point"
          padding={{ left: 10, right: 10 }}
        />
        <YAxis yAxisId="left" dataKey="calories" hide={true} />
        <YAxis
          yAxisId="right"
          dataKey="kilogram"
          orientation="right"
          tickLine={false}
          axisLine={false}
          domain={['dataMin-1', 'dataMax']}
        />
        <Tooltip content={renderTooltip} />
        <Legend
          verticalAlign="top"
          align="right"
          height={'20%'}
          iconType="circle"
          content={renderLegend}
        />
        <Bar
          yAxisId="right"
          dataKey="kilogram"
          fill="#282D30"
          radius={[5, 5, 0, 0]}
        />
        <Bar
          yAxisId="left"
          dataKey="calories"
          fill="#E60000"
          radius={[5, 5, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
