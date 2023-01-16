const getAllActivities = () => {
    return fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
}

export default getAllActivities