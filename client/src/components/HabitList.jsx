import HabitItem from "./HabitItem";

function HabitList({ habits, toggleHabit, deleteHabit, editHabit }) {
    return (
        <ul>
        {habits.map((habit) => (
            <HabitItem 
                key={habit.id}
                habit={habit}
                toggleHabit={toggleHabit}
                deleteHabit={deleteHabit}
                editHabit={editHabit}
            />
        ))}
        </ul>
    )
}

export default HabitList;