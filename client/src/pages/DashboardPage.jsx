import { useState } from "react";
import HabitForm from "../components/HabitForm";

function DashboardPage() {

  const[habits, setHabits] = useState([]);

  function addHabit(name) {
    let newHabit =  {
      id: Date.now(),
      name: name,
      completed: false
    }
    
    setHabits((prevHabits) => [...prevHabits, newHabit]);


  }

  return (
    <div>
      <h1>Dashboard</h1>

      <HabitForm addHabit={addHabit} />

      <ul>
        {habits.map((habit) => (
          <li key={habit.id}>
            {habit.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardPage;