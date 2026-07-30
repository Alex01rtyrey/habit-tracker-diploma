
export const getHabits = () => {
    return fetch('/api/habits', {
        method: "GET"
    })
    .then(response => {
        if(!response.ok ) {
            throw new Error("Сервер вернул ошибку");
        } 
        return response.json();    
    })
};

export const getHabitById = (id) => {
    return fetch(`/api/habits/${id}`, {
        method: "GET"
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Ошибка при загрузке привычки!');
        }

        return response.json();
    })
};

export const deleteHabit = (id) => {
    return fetch(`/api/habits/${id}` , {
        method: "DELETE",
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Ошибка при удалении');
        }

        return true;
    })
};

export const updateHabit = (id, data) => {
    return fetch(`/api/habits/${id}`, { 
        method: "PATCH",
        headers:{ 
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Ошибка при обновлении привычки');
        }

        return response.json();
    })
};

export const createHabit = (data) => {
    return fetch('/api/habits', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error ("Ошибка создания привычки")
        } 

        return response.json();
    })
};





