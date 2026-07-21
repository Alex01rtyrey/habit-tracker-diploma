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


    function toggleHabit(id) {
      setHabits((prevHabits) => 
        prevHabits.map((habit) => {
          if(habit.id === id) {
            return {
              ...habit,
              completed: !habit.completed
            };
          } else {
            return habit;
          }
        })
      );
    }

  return (
    <div>
      <h1>Dashboard</h1>

      <HabitForm addHabit={addHabit} />
      <HabitList 
        habits={habits}
        toggleHabit={toggleHabit}  
      />
    </div>
  );
}

export default DashboardPage;