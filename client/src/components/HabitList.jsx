function HabitList(props) {
    return (
        <ul>
        {props.habits.map((habit) => (
            <li key={habit.id}>
                {habit.completed ? "✅" : "❌"} {habit.name}

                <button onClick={() => props.toggleHabit(habit.id)}>
                    Выполнить
                </button>
            </li>
        ))}
        </ul>
    )
}

export default HabitList;