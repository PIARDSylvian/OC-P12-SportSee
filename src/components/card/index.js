import styles from '@/styles/Card.module.scss'
import Image from 'next/image'
import lipides from '../../../public/lipides.png'
import calories from '../../../public/calories.png'
import proteins from '../../../public/proteins.png'
import glucides from '../../../public/glucides.png'

function CardType(type, value) {
  switch (type) {
    case 'calories':
      return (
        <>
          <Image src={calories} className={styles.calories} alt="calories" />
          <div>
            <p>
              {(value / 1000).toFixed(3).toString().replace(/\./g, ',')}kCal
            </p>
            <p className={styles.type}>Calories</p>
          </div>
        </>
      )
    case 'proteins':
      return (
        <>
          <Image src={proteins} className={styles.proteins} alt="proteins" />
          <div>
            <p>{value}g</p>
            <p className={styles.type}>Proteines</p>
          </div>
        </>
      )
    case 'glucides':
      return (
        <>
          <Image src={glucides} className={styles.glucides} alt="glucides" />
          <div>
            <p>{value}g</p>
            <p className={styles.type}>Glucides</p>
          </div>
        </>
      )
    default:
      return (
        <>
          <Image src={lipides} className={styles.lipides} alt="lipides" />
          <div>
            <p>{value}g</p>
            <p className={styles.type}>Lipides</p>
          </div>
        </>
      )
  }
}

export default function Card({ type, value }) {
  return <div className={styles.card}>{CardType(type, value)}</div>
}
