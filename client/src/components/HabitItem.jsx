import Button from "./Button";
import { useState } from "react";



function HabitItem ({ habit, toggleHabit, deleteHabit, editHabit }) {

    const [isEditing, setIsEditing] = useState(false);
    const [newName, setNewName] = useState(habit.name);

    return(
        <div>{isEditing ?
            <div>
                <input
                    value={newName}
                    onChange={(event) => setNewName(event.target.value)}
                />
                <Button
                    onClick={() => {
                        editHabit(habit.id, newName) 
                        setIsEditing(false)}
                    }
                    text="Сохранить"
                />
            </div> 
            :
                 
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
                        <Button
                            onClick={() => setIsEditing(true)}
                            text="Редактировать"
                        />
                        


                </li>    

            }
        </div>
    )
}

export default HabitItem;






               