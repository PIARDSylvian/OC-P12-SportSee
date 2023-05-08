import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  Legend,
} from 'recharts'
import PropTypes from 'prop-types'

export default function RadialBarChartComponent({ score, todayScore }) {
  const data = score ? score : todayScore

  const renderLegend = () => {
    return <p style={{ padding: '1em 0 0 2em' }}>Score</p>
  }

  const renderCustomizedLabel = ({ value, viewBox }) => {
    return (
      <g>
        <circle cx="50%" cy="50%" r={viewBox.innerRadius} fill="white" />
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          <tspan x="50%" dy="-1em" fontSize={'1.5em'}>
            {value}%
          </tspan>
          <tspan x="50%" dy="2em" fontSize={'.8em'}>
            de votre
          </tspan>
          <tspan x="50%" dy="1.2em" fontSize={'.8em'}>
            objectif
          </tspan>
        </text>
      </g>
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        cx="50%"
        cy="50%"
        innerRadius="80%"
        data={data}
        startAngle={90}
        endAngle={-270}
        barSize={2}
        style={{ backgroundColor: '#FBFBFB', borderRadius: '5px' }}
      >
        <Legend verticalAlign="top" align="left" content={renderLegend} />
        <RadialBar
          dataKey="value"
          fill={'transparent'}
          data={[{ value: 100 }]}
        />
        <RadialBar
          cornerRadius={8}
          barSize={13}
          fill={'red'}
          dataKey="value"
          data={[{ value: data * 100 }]}
          label={renderCustomizedLabel}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  )
}

RadialBarChartComponent.propTypes = {
  score: PropTypes.number.isRequired,
  todayScore: PropTypes.number.isRequired,
}

RadialBarChart.propTypes = {
  data: PropTypes.number.isRequired,
}
