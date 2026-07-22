
function HabitItem ({ habit, toggleHabit }) {
    return(
        
        <li>
            {habit.completed ? "✅" : "❌"} {habit.name}
             <button onClick={() => toggleHabit(habit.id)}>
                    Выполнить
                </button>
        </li>
        
    )
}

export default HabitItem;






               