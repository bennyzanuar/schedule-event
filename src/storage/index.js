import nanoid from 'nanoid'

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
    let data = [
        {    
            event_id: nanoid(),
            day: "07-03-2019",
            event_invite_email: "zanuar19@gmail.com",
            event_name: "Meeting with CTO",
            event_time: "10:00 PM"
        },
        {    
            event_id: nanoid(),
            day: "07-03-2019",
            event_invite_email: "benny@gmail.com",
            event_name: "Meeting with CTO",
            event_time: "10:00 PM"
        }
    ]
    return set(data)
}