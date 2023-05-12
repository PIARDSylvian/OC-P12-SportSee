import useSWR from 'swr'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
} from 'recharts'
import { fetcher, getApiRoute } from '@/utils'
import PropTypes from 'prop-types'

/**
 * Create LineChartComponent with id of user
 *
 * @param {{id: number}}
 * @returns {React.ReactElement}
 */
export default function LineChartComponent({ id }) {
  const { data, error } = useSWR(getApiRoute(id, 'average-sessions'), fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  /**
   * Render Tooltip if is active & payload length > 0
   *
   * @param {{active :boolean}} active
   * @param {{active :object}} payload
   *
   * @returns {HTMLElement}
   */
  const renderTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: '#fff',
            borderRadius: '5px',
            color: 'black',
          }}
        >
          <p
            className="label"
            style={{ padding: '10px' }}
          >{`${payload[0].value} min`}</p>
        </div>
      )
    }

    return null
  }

  /**
   * Render legend
   *
   * @returns {React.ReactElement}
   */
  const renderLegend = () => {
    return (
      <p
        style={{
          padding: '10% 0 0 10%',
          fontSize: '14px',
          color: '#fff',
        }}
      >
        Durée moyenne des sessions
      </p>
    )
  }

  /**
   * custom cursor effect
   *
   * @param {{ width :number }}
   * @param {{ height :number }}
   * @param {{ points :object }}
   * @returns {React.ReactElement}
   */
  const CustomCursor = ({ width, height, points }) => {
    return (
      <Rectangle
        fill="#E60000"
        width={width + 15}
        height={width + height}
        viewBox="0 0 100 100"
        x={points[0].x}
      />
    )
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data.sessions}
        margin={{
          top: 15,
          left: 15,
          right: 15,
          bottom: 15,
        }}
        style={{
          backgroundColor: '#FF0000',
          color: '#FFF',
          borderRadius: '5px',
        }}
      >
        <Tooltip content={renderTooltip} cursor={<CustomCursor />} />
        <XAxis
          dataKey={'day'}
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#fff' }}
        />
        <YAxis hide={true} />
        <Legend verticalAlign="top" align="right" content={renderLegend} />
        <Line
          type="monotone"
          dataKey="sessionLength"
          dot={false}
          stroke="#fff"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

LineChartComponent.propTypes = {
  id: PropTypes.number.isRequired,
}

LineChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    }).isRequired
  ),
}
