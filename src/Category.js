import { Link, useLocation } from "react-router-dom";

function Category(props) {
    // let url = useLocation();

    const catItem = props.cat.nav.map(item => <li key={item.name} ><Link to={item.name}>{item.text}</Link></li>)
    
    return (
        <>
            <h1>Category</h1>
                <ul>
                    {catItem}
                </ul>
            
            {/* <ul>
                <li><Link to={`${url.pathname}/notebook`}>Ноутбуки</Link></li>
                <li><Link to={`${url.pathname}/monitor`}>Мониторы</Link></li>
                <li><Link to={`${url.pathname}/cellphone`}>Мобильные телефоны</Link></li>
            </ul> */}
        </>

    )
}



export default Category;