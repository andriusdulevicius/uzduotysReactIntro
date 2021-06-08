import React, { Component } from 'react';

class VacationList extends Component {
  state = {
    vacSpots: ['London', 'Bali', 'USA', 'Philipines', 'Spain'],
  };

  render() {
    return (
      <div className='vacationList'>
        <h2>My top vacations destinations!</h2>
        <ul className='main-ul'>
          {this.state.vacSpots.length === 0 && (
            <p className='alert alert-warning'>There are no vacation spots to show.</p>
          )}
          {this.renderList()}
        </ul>
      </div>
    );
  }

  renderList() {
    return this.state.vacSpots.map((spot) => (
      <li key={spot} className='li-elements'>
        {spot}
      </li>
    ));
  }
}

export default VacationList;
