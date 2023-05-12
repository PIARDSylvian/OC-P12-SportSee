import styles from '@/styles/Navbar.module.scss'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export const StyledNav = styled.nav`
  ${(props) =>
    props.column
      ? `width: 117px;`
      : `padding-left: 25px; box-shadow: 5px 5px 5px 0px gray;`};

  ul {
    ${(props) =>
      props.column &&
      `
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      `};

    ${(props) =>
      !props.column &&
      `
        a {
          padding: .5em;
        }
      `};
  }
`
/**
 * create navbar
 *
 * @param {{children :React.ReactElement}}
 * @param {{column :boolean}}
 * @returns {React.ReactElement}
 */
export default function Navbar({ children, column }) {
  return (
    <StyledNav column={column} className={styles.nav}>
      {children}
    </StyledNav>
  )
}

Navbar.propTypes = {
  children: PropTypes.node,
  column: PropTypes.bool,
}
