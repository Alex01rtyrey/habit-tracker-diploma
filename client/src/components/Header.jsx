import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <h1>Habit Tracker</h1>
            <Link to="/">Главная</Link>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    )
}

export default Header;