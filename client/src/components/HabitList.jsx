function HabitList(props) {
    return (
        <ul>
        {props.habits.map((habit) => (
            <li key={habit.id}>
                {habit.name}
            </li>
        ))}
        </ul>
    )
}

export default HabitList;