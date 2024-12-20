import React from 'react';

const GitHubCommits = () => {
  return (
    <div className='git'>
      <div className='git__header'>
        <h2 className='git__title'>GitHub Commits</h2>
        <a href='https://www.github.com/prasadshaswat' className='git__link'>View all</a>
      </div>
      <div className='git__commits'>
        <div className='git__commit'>
          <div className='git__commit-info'>
            <h3 className='git__commit-title'>Commit Title</h3>
            <p className='git__commit-message'>Commit Message</p>
          </div>
          <div className='git__commit-date'>Date</div>
        </div>
        <div className='git__commit'>
          <div className='git__commit-info'>
            <h3 className='git__commit-title'>Commit Title</h3>
            <p className='git__commit-message'>Commit Message</p>
          </div>
          <div className='git__commit-date'>Date</div>
        </div>
      </div>
    </div>
  );
}

export default GitHubCommits;
