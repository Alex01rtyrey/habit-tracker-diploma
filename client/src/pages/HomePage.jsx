import Button from "../components/Button";
import { Link } from "react-router-dom";


function HomePage () {
    return (
        <div>
            <h1>Habit Tracker</h1>
            <Button text="Добавить привычку"/>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    )
}

export default HomePage;