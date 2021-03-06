import Link from 'next/link'
import { HOME, ARTICLES, USERS } from '../../constants'

export default function index() {
  return (
    <nav>
      <Link href="/"><a>{HOME}</a></Link>
      <Link href="/users"><a>{USERS}</a></Link>
      <Link href="/articles"><a>{ARTICLES}</a></Link>

      <style jsx>{`
        nav{
          padding-top: 10px;
        }
        a{
          padding: 0 10px;
          text-decoration: none;
          color: black;
        }
      `}</style>
    </nav>
  )
}
