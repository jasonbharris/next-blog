import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
      <ul>
      <li>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        ul {
          list-style: none;
          padding: 0;
          display: flex;
          gap: 0.75rem;
        }
        li a {
          color: darkblue;
        }
      `}</style>
    </nav>
  )
}
