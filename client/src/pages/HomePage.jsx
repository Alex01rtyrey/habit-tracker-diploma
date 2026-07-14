import Button from "../components/Button";
import { Link } from "react-router-dom";


function HomePage () {
    return (
        <div>
            <h1>Добро пожаловать в приложение трекинга привычек</h1>
            <Button text="Добавить привычку"/>
            <Link to="/login">Войти</Link>
            <Link to="/register">Регистрация</Link>
        </div>
    )
}

export default HomePage;