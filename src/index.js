import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './vacation.css';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
// import VacationList from './components/vacationList';
// import VacationWithImages from './components/vacationWithImages';
import VacationTable from './components/vacationTable';

ReactDOM.render(
  <React.StrictMode>
    <VacationTable />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
