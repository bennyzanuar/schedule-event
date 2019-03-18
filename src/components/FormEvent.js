import React from "react"
import dateFns from "date-fns"
import nanoid from 'nanoid'
import { Formik } from 'formik';

class FormEvent extends React.Component {
    
    submitForm(values){
        const { addEvent, editEvent, day, isEdit } = this.props
        let formatDay = dateFns.format(
            day,
            'DD-MM-YYYY'
        )
        let data = Object.assign(values, { day : formatDay })
        if (isEdit) {
            editEvent(data)
        }else{
            addEvent(data)
        }
    }
    onDelete(id){
        const { removeEvent } = this.props
        removeEvent(id)
    }
    
    render(){
        const { events, isEdit } = this.props

        var event_name, event_time, event_invite_email, event_id = ''
        event_id = nanoid()
        
        if (typeof events.event_name !== 'undefined') {
            event_name = events.event_name
            event_time = events.event_time
            event_invite_email = events.event_invite_email
            event_id = events.event_id
        }
        return(
            <Formik
                initialValues={
                    { 
                        event_id: event_id || '',
                        event_name: event_name || '',
                        event_time: event_time || '',
                        event_invite_email: event_invite_email || ''
                    }
                }
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        this.submitForm(values)
                        setSubmitting(false);
                    }, 500);
                }}
            >
                {props => {
                    const {
                        values,
                        dirty,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset,
                } = props;
                return (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="desc">Name</label>
                            <div>
                                <input 
                                    id="event_name"
                                    className="field text fn form-control"
                                    placeholder="Name"
                                    type="text"
                                    value={values.event_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="desc">Time</label>
                            <div>
                                <input 
                                    id="event_time"
                                    className="field text fn form-control"
                                    placeholder="Time"
                                    type="text"
                                    value={values.event_time}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="desc">Email</label>
                            <div>
                                <input 
                                    id="event_invite_email"
                                    className="field text fn form-control"
                                    placeholder="Email"
                                    type="text"
                                    value={values.event_invite_email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                            </div>
                        </div>
                        <button
                            type="button"
                            className="outline btn btn-primary"
                            onClick={handleReset}
                            disabled={!dirty || isSubmitting}
                            >
                            Reset
                        </button>
                        &nbsp;
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            Submit
                        </button>
                        &nbsp;
                        <span>
                            {
                                isEdit &&
                                <button type="button" 
                                    onClick={() => this.onDelete(values.event_id)}
                                    className="btn btn-delete">
                                    Delete
                                </button>
                            }
                        </span>
                    </form>
                    );
                }}
            </Formik>
        )
    }
}

export default FormEvent;