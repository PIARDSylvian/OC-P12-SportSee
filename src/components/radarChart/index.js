import useSWR from 'swr'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import { fetcher, getApiRoute } from '@/utils'
import PropTypes from 'prop-types'

export default function RadarChartComponent({ id }) {
  const { data, error } = useSWR(getApiRoute(id, 'performance'), fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  console.log(data)

  function customTick({ payload, x, y, textAnchor, fill, radius }) {
    return (
      <g className="recharts-layer recharts-polar-angle-axis-tick">
        <text
          radius={radius}
          fill={fill}
          x={x}
          y={y}
          className="recharts-text recharts-polar-angle-axis-tick-value"
          textAnchor={textAnchor}
        >
          <tspan
            dy="3"
            style={{
              fontSize: '.8rem',
            }}
          >
            {payload.value}
          </tspan>
        </text>
      </g>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        data={data.sessions}
        outerRadius={'60%'}
        style={{
          backgroundColor: '#282D30',
          borderRadius: '5px',
        }}
      >
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          tickLine={false}
          tick={customTick}
        />
        <PolarGrid radialLines={false} stroke="white" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

RadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ),
}
