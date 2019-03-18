const storage_name = "events"
export const set = (data) => {
    data = JSON.stringify(data)
    data = localStorage.setItem(storage_name, data)
    return  data
}

export const get = () => {
    let data = localStorage.getItem(storage_name)
    data = JSON.parse(data)
    return  data
}

export const initalData = () => {
    let data = []
    return set(data)
}