import { useState, useEffect } from "react";
import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";
import { getHabits } from "../api/habitApi";

function DashboardPage() {

  const [ habits, setHabits] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError ] = useState(null);
    
   useEffect(() => {
      getHabits()
        .then((response) => {
          setHabits(response);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        })
    }, [])
  
    function addHabit(name) { 
        let checkName =  name.trim();
        if(checkName.length === 0) {
          return;
        }
        
        let newHabit =  {
          id: Date.now(),
          name: checkName,
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


    function deleteHabit(id) {
      setHabits((prevHabits) => 
        prevHabits.filter((habit) => habit.id !== id)
      )
    }


    function editHabit(id, newName) {
      setHabits((prevHabits) => 
        prevHabits.map((habit) => {
          if(habit.id === id) {
           
            return {
              ...habit,
              name: newName 
            }
          } else {
            return habit;
          }
        })
      )
    }

  return (
    <div>
      <h1>Dashboard</h1>

      <HabitForm addHabit={addHabit} />
      <HabitList 
        habits={habits}
        toggleHabit={toggleHabit}
        deleteHabit={deleteHabit}
        editHabit={editHabit}
        
      />
    </div>
  );
}

export default DashboardPage;