import Button from "./Button";

function HabitItem ({ habit, toggleHabit, deleteHabit }) {
    return(
        
        <li>
            {habit.completed ? "✅" : "❌"} {habit.name}
                
                <Button 
                onClick={() => toggleHabit(habit.id)} 
                text="Выполнить"
                />
                <Button 
                onClick={() => deleteHabit(habit.id)} 
                text="Удалить"
                />
                


        </li>
        
    )
}

export default HabitItem;






               