import styles from '@/styles/Navbar.module.scss'
import styled from 'styled-components'

export const StyledNav = styled.nav`
  ${(props) => (props.column ? `width: 117px;` : `padding-left: 25px;`)};

  ul {
    ${(props) =>
      props.column &&
      `
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      `};
  }
`

export default function Navbar({ children, column }) {
  return (
    <StyledNav column={column} className={styles.nav}>
      {children}
    </StyledNav>
  )
}
