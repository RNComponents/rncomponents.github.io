import React from 'react';
import request from 'superagent';

export default class Repo extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loaded: false,
      data: []
    }
  }

  componentDidMount () {
    this.fetchData();
  }

  fetchData () {
    request.get('https://api.github.com/orgs/RNComponents/repos')
      .end((err, res) => {
        if (res.statusCode === 200) {
          this.setState({
            loaded: true,
            data: res.body
          });
        }
      });
  }

  render () {
    if (!this.state.loaded) {
      return <p style={{textAlign:'center'}}>Loading...</p>;
    }

    return (
      <table className="repo-table">
        <thead>
          <tr>
            <th>Repo</th>
            <th>Description</th>
            <th>Star</th>
            <th>Issues</th>
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((repo, i) => {
            if (repo.fork === false && repo.name !== 'rncomponents.github.io') {
              return (
                <tr key={`repo-${i}`}>
                  <td><a href={repo.html_url} target="_blank">{repo.name}</a></td>
                  <td>{repo.description}</td>
                  <td>{repo.stargazers_count}</td>
                  <td><a href={`${repo.html_url}/issues`}>{repo.open_issues_count}</a></td>
                </tr>
              );
            } else {
              return null;
            }
          })}
        </tbody>
      </table>
    )
  }

}
