import React from 'react';

class GithubItem extends React.Component {
  constructor() {
    super();
  }

  showDetails(elem) {
    $(elem.target).parents('.github--item').toggleClass('isOpen');
  }

  render() {
    return  <div className='row github--item' onClick={this.showDetails.bind(this)}>
              <div className='col-md-8'>{this.props.name}</div>
              <div className='col-md-4'>
                <div className='github--stat'>
                  <i className="fa fa-star"></i>
                  {this.props.stargazers_count}
                </div>
                <div className='github--stat'>
                  <i className="fa fa-eye"></i>
                  {this.props.watchers_count}
                </div>
                <div className='github--stat'>
                  <i className="fa fa-code-fork"></i> 
                  {this.props.forks}
                </div>
              </div>

              <div className='github--details'>
                
                  <p>{this.props.description}</p>
                  <p>
                    <a href='{this.props.html_url}'>{this.props.html_url}</a>
                  </p>
                
              </div>
              
            </div>;
  }
}

export default GithubItem;


