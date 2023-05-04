import Navbar from '../navbar'
import Footer from '../footer'
import Button from '../button'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/logo.png'
import yoga from '../../../public/yoga.png'
import swim from '../../../public/swim.png'
import cicle from '../../../public/cicle.png'
import haltere from '../../../public/haltere.png'

export default function Layout({ children }) {
  const router = useRouter()
  return (
    <>
      <Navbar>
        <Link href="/" className="logo">
          <Image src={logo} alt="SportSee-logo" priority="false" />
        </Link>
        {router.query.id && children.props.statusCode !== 404 && (
          <ul>
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/">Profil</Link>
            </li>
            <li>
              <Link href="/">Réglages</Link>
            </li>
            <li>
              <Link href="/">Communauté</Link>
            </li>
          </ul>
        )}
      </Navbar>
      <main>
        <div>
          <Navbar column>
            {router.query.id && children.props.statusCode !== 404 && (
              <ul>
                <li>
                  <Link href="/">
                    <Button>
                      <Image src={yoga} alt="SportSee-logo" priority="false" />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Button>
                      <Image src={swim} alt="SportSee-logo" priority="false" />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Button>
                      <Image src={cicle} alt="SportSee-logo" priority="false" />
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <Button>
                      <Image
                        src={haltere}
                        alt="SportSee-logo"
                        priority="false"
                      />
                    </Button>
                  </Link>
                </li>
              </ul>
            )}
          </Navbar>
          <Footer />
        </div>
        {children}
      </main>
    </>
  )
}
