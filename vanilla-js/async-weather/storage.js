class Storage {
  constructor() {
    this.city;
    this.state;
    this.defaultCity = 'Kharkiv';
    this.defaultState = 'Ukraine';
  }

  getLocationData() {
    let cityFromStorage = localStorage.getItem('city'); 
    let stateFromStorage = localStorage.getItem('state');

    if(cityFromStorage === null) {
      this.city = this.defaultCity;
    } else {
      this.city = cityFromStorage;
    }

    if(stateFromStorage === null) {
      this.state = this.defaultCity;
    } else {
      this.state = cityFromStorage;
    }

    return {
      city: this.city,
      state: this.state
    }
  }
  
  setLocationData(city, state) {
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
  }
}