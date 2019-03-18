import React, { Fragment } from "react"
import dateFns from "date-fns"
import ReactModal from 'react-modal'
import FormEvent from './FormEvent'
import { loadEvent, addEvent, editEvent, removeEvent } from "../actions"
import { connect } from 'react-redux'
import nanoid from 'nanoid'

ReactModal.setAppElement('#root')

class Calendar extends React.Component {
    constructor () {
        super();
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date(),
            showModal: false,
            selectedEvent: ''
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    }
    
    componentDidMount(){
        this.props.loadEvent()
    }
    
    handleOpenModal () {
        this.setState({ showModal: true });
    }

    onCloseModal () {
        this.setState({ showModal: false });
    }
    
    renderModal () {
        const { addEvent, editEvent, removeEvent } = this.props
        const { selectedDate, selectedEvent } = this.state

        let isEdit = typeof selectedEvent.event_name !== 'undefined' ? true : false
        
        return (
            <div>
                <ReactModal 
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                    >
                        <button className="btn button-close" onClick={this.onCloseModal}>X</button>
                        <FormEvent addEvent={addEvent} editEvent={editEvent} removeEvent={removeEvent} day={selectedDate} events={selectedEvent} isEdit={isEdit} />
                </ReactModal>
            </div>
        );
    }

    renderHeader() {
        const dateFormat = "MMMM YYYY";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
                    </div>
                </div>
                <div className="col col-center">
                    <span>{dateFns.format(this.state.currentMonth, dateFormat)}</span>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "dddd";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
        }

        return <div className="days row">{days}</div>;
    }
    
    renderBgEvent(day, groupingEvent){
        let eventCount = groupingEvent.length

        let color = ["#f3d250", "#90ccf4", "#5da2d5"]
        let heightFill = 0
        let heightFree = 100
        if (eventCount === 1 ) {
            heightFill = 50
            heightFree = 50
        }else if (eventCount < 3 && eventCount > 1) {
            heightFill = 25
            heightFree = 50
        }else{
            heightFree = 100
            heightFill = 100/eventCount
        }
        
        const itemBg = []
        // is fill event
        for (let i = 0; i < eventCount; i++) {
            let style = {
                background: color[i],
                width: "100%", 
                height: heightFill+"%", 
                display: "block",
                padding: "3px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontWeight: "500"
            }
            itemBg.push(
                <div 
                    key={groupingEvent[i].event_id} 
                    style={style}
                    onClick={() => this.onEditClick(day, groupingEvent[i])}
                >
                { groupingEvent[i].event_name  }
                </div>
            )
        }
                
        if (eventCount < 3) {
            let style = {
                width: "100%", 
                height: heightFree+"%", 
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontWeight: "500"
            }
            
            itemBg.push(
                <div 
                    key={nanoid()} 
                    style={style}
                    onClick={() => this.onAddClick(day)}
                >
                </div>
            )
        }
        
        return (
            <Fragment>
                {itemBg}
            </Fragment>
        )
    }

    renderCells() {
        const { events } = this.props
        const { currentMonth, selectedDate } = this.state;

        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "D";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
            for (let i = 0; i < 7; i++) {
                
                let newDay = dateFns.format(day, "DD-MM-YYYY")
                let groupingEvent = []
                
                if (events.length > 0) {
                    events.map(evt =>{
                        if (newDay === evt.day) {
                            groupingEvent.push(evt)
                        }
                    })
                }

                formattedDate = dateFns.format(day, dateFormat)
                const cloneDay = day;
                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                            ? "disabled"
                            : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                        }`}
                            key={day}
                        >
                        <span className="number">{formattedDate}</span>
                        <span className="bgEvent">{this.renderBgEvent(dateFns.parse(cloneDay), groupingEvent)}</span>
                    </div>
                );
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>;
    }
    
    onEditClick = (day, events) => {
        this.setState({
            selectedDate: day,
            selectedEvent: events
        });
        this.handleOpenModal();
    }

    onAddClick = (day, events) => {
        this.setState({
            selectedDate: day,
            selectedEvent: ''
        });
        this.handleOpenModal();
    };

    nextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
                {this.renderModal()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { 
        events: state.events
    }
}

export default connect(mapStateToProps, {loadEvent, addEvent, editEvent, removeEvent})(Calendar);