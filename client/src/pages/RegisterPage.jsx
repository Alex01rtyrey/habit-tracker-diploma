import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function RegisterPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        if(!email || !password) {
            setError("Заполните все поля!");
            return;
        }

       setError("");

        console.log(email);
        console.log(password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Страница регистрации</h1>

            <Input
                label="email"
                type="email"
                value={email}
                placeholder="Введите email"
                onChange={(event) => setEmail(event.target.value)}
            />

            <Input
                label="Пароль"
                type="password"
                value={password}
                placeholder="Введите пароль"
                onChange={(event) => setPassword(event.target.value)}
            />

            {error && <p>{error}</p>}

            <Button
                text="Регистрация"
                type="submit"
            />
        </form>
    )
}

export default RegisterPage;