import React from 'react';
import _ from 'underscore';
import GithubItem from './github-item';


class GithubViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      username : 'usse',
      repositories : []
    };
  }

  componentDidMount() {
    // var URL = "http://api.github.com/users/" + this.props.username + "/repos";
    var URL = 'repos.json';
    $.get(URL, function(data) {
      this.setState({
        repositories : _.sortBy(data, 'stargazers_count').reverse().slice(0, 20)
      });
    }.bind(this));
  }

  render() {

    var repositories = '';
    if(this.state.repositories){
      repositories = this.state.repositories.map(function (repo) {
        return (
          <GithubItem 
            name = {repo.name}
            stargazers_count = {repo.stargazers_count} 
            watchers_count = {repo.watchers_count}
            forks = {repo.forks} 
            description = {repo.description}
            html_url = {repo.html_url} />
        );
      });
    }



    return  <div className='github--viewer'>
              { repositories }
            </div>;
  }
}

export default GithubViewer;


