import './header.scss'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link to={'/'}>
                <section>
                        <h1>
                            GamerHub D-S
                        </h1>
                </section>
            </Link>
                <nav>
                    <ul>
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <a href="https://github.com/RafaelD-S" target='blank_'>
                            <li>GitHub</li>
                        </a>
                        <a href="">
                            <li>FeedBack</li>
                        </a>
                    </ul>
                </nav>
        </header>
    )
}