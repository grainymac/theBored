const getAllTasks = () => {
    const url = 'http://www.boredapi.com/api/activity/'
    fetch(url)
        .then(response => response.json())
}

export default getAllTasks