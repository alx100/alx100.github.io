import React, {Component} from 'react';
import { connect } from 'react-redux';

import Navbar from './Navbar';
import Loader from './Loader';

import * as actions from '../actions';

class MainPage extends Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
	}

	handleInput(event){
		let searchQuery = event.target.value;
		this.props.setSearchValue(searchQuery);
	}

	componentDidUpdate(prevProps) {
		let prevValue = prevProps.searchValue;
		let searchQuery = this.props.searchValue;
		if (prevValue.length > 0 && searchQuery !== prevValue) {
			setTimeout(() => {
				this.props.getSearchedMovies(searchQuery);	
			}, 500);
		}
	}

	renderMovies(movies) {
		if(movies.length === 0) {
			return <Loader />
		} else {
			return movies.map(movie => {
				let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
				return (
					<div className="col-md-6 col-lg-3 mb-3" key={movie.id} >
						<div className="card">
							<img className="poster-image card-img-top" src={posterUrl} alt="Card cap"/>
							<div className="card-body">
								<h5 className="card-title">{movie.title}</h5>
								<p className="card-text text-muted text-truncate">{movie.overview}</p>
								<a href="" className="btn btn-success">Read more</a>
							</div>
						</div>
					</div>
				);
			}); 
		}
	}

	renderSearchedMovies(movies) {
		if(movies.length === 0) {
			return (
				<div className="alert alert-success mx-auto col-sm-6" role="alert">
					Nothing found	
				</div>
			);
		} else {
			return movies.map(movie => {
				let posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
				return (
					<div className="col-md-6 col-lg-3 mb-3" key={movie.id} >
						<div className="card">
							<img className="poster-image card-img-top" src={posterUrl} alt="Card cap"/>
							<div className="card-body">
								<h5 className="card-title">{movie.title}</h5>
								<p className="card-text text-muted text-truncate">{movie.overview}</p>
								<a href="" className="btn btn-success">Read more</a>
							</div>
						</div>
					</div>
				);
			}); 
		}
	}

	

	render() {
		
		let popularMovies = this.props.popularMovies.slice(0, 4);
		let upcomingMovies = this.props.upcomingMovies.slice(0, 4);
		let searchedMovies = this.props.searchedMovies.slice(0, 4);
		return (
			<div>
				<Navbar handleInput={this.handleInput}/>
				<div className="container mb-5">
					<h3 className="text-center section-title" >Searched Movies</h3>
					<div className="row text-center">
						{this.renderSearchedMovies(searchedMovies)}
					</div>
					<h3 className="text-center section-title" >Popular Movies</h3>
					<div className="row text-center">
						{this.renderMovies(popularMovies)}
					</div>
					<h3 className="text-center section-title" >Upcoming Releases</h3>
					<div className="row text-center">
						{this.renderMovies(upcomingMovies)}
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ popularMovies, upcomingMovies, searchedMovies, searchValue }) {
  return { 
		popularMovies,
		upcomingMovies,
		searchedMovies,
		searchValue
	};
}


export default connect(mapStateToProps, actions)(MainPage);