import React from 'react';
import MainVideo from './main_video_container';
import AllMovies from './all_movies';

class MoviesIndex extends React.Component {
  constructor(props){
    super(props);
  }
  
  componentWillMount() {
    if(this.props.movies.length === 0){
      this.props.fetchMovies()
      .then(() => 
        this.props.fetchListItems()
      );
    }
  }

  removeAllStylings() {
    const allSpinners = document.getElementsByClassName("spinner");
    const allCarets = document.getElementsByClassName("expand-down");
    for (let i = 0; i < allSpinners.length; i++) {
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.remove("buffed");
      allCarets[i].style.display = "none";
    }
  }

  render(){

    this.removeAllStylings();

    if(this.props.movies.length === 0){
      return (<div></div>);
    }

    const mainMovie = this.props.selectMovie(this.props.movies, "Game of Thrones");
    const indices = this.props.list_items.map(item => item.movie_id);
    // debugger
    const filtered = indices.map(i => {
      for(let j = 0; j < this.props.movies.length; j++){
        if(this.props.movies[j].id === i){
          return this.props.movies[j];
        }
      }
      // this.props.movies[i - 1]
    });
    // alert(filtered);
    return (
      <div>
        <div className="movies-index">
          <MainVideo video={mainMovie} />
          <AllMovies list_movies={filtered} movies={this.props.movies} />
        </div>
      </div>
    );
  }
}

export default MoviesIndex;