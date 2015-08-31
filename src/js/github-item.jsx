import React from 'react';

class GithubItem extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    
  }

  render() {
    return  <div className='row github--item'>
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
              
            </div>;
  }
}

export default GithubItem;


