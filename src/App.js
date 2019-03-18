import React from "react";
import { Provider } from 'react-redux'
import store from './store'
import Calendar from "./components/Calendar";

import "./App.css";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <main>
                        <Calendar />
                    </main>
                </div>
            </Provider>
        )
    }
}

export default App;
//
