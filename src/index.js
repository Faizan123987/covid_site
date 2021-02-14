import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/App';

const App = function() {
    return (
        <div> 
           <MainApp />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));