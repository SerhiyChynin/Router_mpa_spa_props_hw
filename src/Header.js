import { Link, NavLink } from "react-router-dom";

function Header(props) {
    let headerItem = props.header.nav.map(item => <li key={item.name}><Link to={item.name}>{item.text}</Link></li>)
    return (
        <ul>
            {headerItem}
        </ul>

        // <nav>
        //     <ul>
        //         <li><Link to="/">Главная</Link></li>
        //         <li><Link to="/about">О сайте</Link></li>
        //         <li><Link to="/cat">Категории</Link></li>
        //     </ul>
        // </nav>
    )
}

export default Header;