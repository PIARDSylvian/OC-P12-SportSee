import styles from '@/styles/Button.module.scss'
import PropTypes from 'prop-types'

export default function Button({ children }) {
  return <button className={styles.button}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
}
