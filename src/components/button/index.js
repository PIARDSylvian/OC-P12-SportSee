import styles from '@/styles/Button.module.scss'
import PropTypes from 'prop-types'

/**
 * Create button
 *
 * @param {{children :React.ReactElement}} children
 * @returns {React.ReactElement}
 */
export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}
