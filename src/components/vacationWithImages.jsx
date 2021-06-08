import React, { Component } from 'react';

class VacationWithImages extends Component {
  state = {
    holidayData: [
      {
        id: 1,
        title: 'London',
        imgUrl:
          'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      },
      { id: 2, title: 'Spain', imgUrl: 'https://cdn.cnn.com/cnnnext/dam/assets/170706113411-spain.jpg' },
      { id: 3, title: 'Bali', imgUrl: 'https://media.timeout.com/images/105240189/image.jpg' },
      {
        id: 4,
        title: 'Philipines',
        imgUrl:
          'https://lp-cms-production.imgix.net/features/2019/08/shutterstock_1127874026-32c12e090f4f.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850',
      },
      {
        id: 5,
        title: 'USA',
        imgUrl:
          'https://i2.wp.com/movingtips.wpengine.com/wp-content/uploads/2017/04/los-angeles.jpg?fit=1024%2C682&ssl=1',
      },
    ],
  };

  render() {
    return (
      <div className='vacationList'>
        <h2>My top vacations destinations!</h2>
        <div className='cards'>
          {this.state.holidayData.length === 0 && (
            <p className='alert alert-warning'>There are no vacation destinations to show.</p>
          )}
          {this.renderList()}
        </div>
      </div>
    );
  }

  renderList() {
    const { holidayData } = this.state;
    return holidayData.map((spot) => (
      <div key={spot} className='one-card'>
        <h3>Destination: {spot.title}</h3>
        <img src={spot.imgUrl} alt={spot.title} />
      </div>
    ));
  }
}

export default VacationWithImages;
