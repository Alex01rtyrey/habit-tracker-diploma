import { useState } from "react";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

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
      <HabitList habits={habits} />
    </div>
  );
}

export default DashboardPage;