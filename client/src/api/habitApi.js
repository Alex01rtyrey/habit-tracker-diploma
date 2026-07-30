
export const getHabits = () => {
    return fetch('/api/habits', {
        method: "GET"
    })
    .then(response => response.json())
};

export const getHabitById = (id) => {

};

export const deleteHabit = (id) => {
    
};

export const updateHabit = (id, data) => {

};

export const createHabit = (data) => {

};





