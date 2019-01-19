import React, { Component } from 'react';


class ListProfiles extends Component {
  
	getName = id => Object.values(this.props.users).find(u => u.id == id);

	getMovie = id => Object.values(this.props.movies).find(m => m.id == id);

	render(){
      return (
        <div>
        	<ol>
        		 {this.props.profiles.map( profile => {
         			const name = this.getName(profile.userID).name
      				const movie = this.getMovie(profile.favoriteMovieID).name
                 	return <li key={profile.id}> {name}`s  favorite movie is {movie} </li>
                })}
        	</ol>
        </div>
      );
    }
}

export default ListProfiles;