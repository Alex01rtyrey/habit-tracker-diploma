import HabitItem from "./HabitItem";

function HabitList({ habits, toggleHabit }) {
    return (
        <ul>
        {habits.map((habit) => (
            <HabitItem 
                key={habit.id}
                habit={habit}
                toggleHabit={toggleHabit}
            />
        ))}
        </ul>
    )
}

export default HabitList;