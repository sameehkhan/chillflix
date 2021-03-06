import React from 'react';
import { Link } from 'react-router-dom';

class SpinnerItem extends React.Component {
  
  constructor(props){
    super(props);

    this.expand = this.expand.bind(this);
    this.handleList = this.handleList.bind(this);
  }

  expand(e){
    const allSpinners = document.getElementsByClassName("spinner-item");
    const allCarets = document.getElementsByClassName("expand-down");
    for(let i = 0; i < allSpinners.length; i++){
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.add('enlarge');
      allCarets[i].style.display = "none";
    }
    const current = document.getElementById(`spinner-${this.props.order}-${this.props.movie.id}`);
    current.style.border = "4px solid white";
    current.classList.remove('enlarge');
    const caret = document.getElementById(`expand-${this.props.order}-${this.props.movie.id}`);
    caret.style.display = "block";
    

    //for styling info drop down

    // const currDrop = document.getElementById(`info-drop-container-${this.props.order}`);
    // currDrop.classList.add('info-drop-shown');

    const currSpinner = document.getElementById(`spinner-${this.props.order}`);
    currSpinner.classList.add('buffed');
 
    const allPopups = document.getElementsByClassName(`movie-info-container`);
    for (let i = 0; i < allPopups.length; i++) {
      allPopups[i].style.visibility = "visible";
      allPopups[i].style.opacity = "1";
      allPopups[i].style.height = "100%";
    }
  }

  removeAllStylings() {
    const allSpinners = document.getElementsByClassName("spinner-item");
    for (let i = 0; i < allSpinners.length; i++) {
      allSpinners[i].style.border = "0";
      allSpinners[i].classList.add('enlarge');
      allCarets[i].style.display = "none";
    }
  }

  handleList() {
    if (this.props.onlist) {
      let itemId;
      for (let i = 0; i < this.props.list_items.length; i++) {
        if (this.props.list_items[i].movie_id === this.props.movie.id) {
          itemId = this.props.list_items[i].id;
        }
      }
      this.props.deleteListItem(itemId);
    } else {
      const list_id = this.props.list_id;
      const movie_id = this.props.movie.id;
      this.props.createListItem({
        list_item: {
          list_id,
          movie_id
        }
      });
    }
  }

  renderButton() {
    if (this.props.onlist) {
      return <span>-</span>;
    } else {
      return <span>+</span>;
    }
    // if (this.props.onlist) {
    //   return (<i className="fa fa-check" />);
    // } else {
    //   return (<i className="fa fa-plus" />);
    // }
  }

  render() {


    return (
      <div id={`spinner-${this.props.order}-${this.props.movie.id}`} className="spinner-item enlarge">
        <img className="movie-tn" src={this.props.movie.thumbnail} />
        {/* <img className="movie-tn" src={window.oldtn} /> */}

        <Link to={`/watch/${this.props.movie.id}`}>
          <div className="play-area"></div>
        </Link>

        <div className="tn-info">
            <Link to={`/watch/${this.props.movie.id}`}>
          <p className="round-button">
            <i className="fa fa-play fa-2x"></i>
          </p>
          </Link>
          <p className="tn-title">{this.props.movie.title}</p>
        </div>


        <div className="list-adder" onClick={this.handleList}>
          <div className="tn-plus-wrapper">
            {/* <span>+</span> */}
            {this.renderButton()}
          </div>
        </div>
        
        <div className="info-down">
          <Link to={`/browse/${this.props.order}/${this.props.movie.id}`}>
            <i className="fa fa-angle-down" onClick={this.expand}></i>
          </Link>
        </div>

        <div id={`expand-${this.props.order}-${this.props.movie.id}`} className="expand-down">
          <div className="expand-arrow-container">
            <i className="fa fa-caret-down info"></i>
          </div>
        </div>
        
      </div>
    )
  }
};

export default SpinnerItem;