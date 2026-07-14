import { useState } from "react";


function LoginPage () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email);
        console.log(password);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Страница входа</h1>
            
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <label>Пароль:</label>
            <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />

            <button type="submit">
                Войти
            </button>
        </form>
    )
}


export default LoginPage;