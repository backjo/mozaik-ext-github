import React from 'react';


export default React.createClass({
    displayName: 'PullRequest',

    render() {
        return (
            <div className="list__item github__pull-request">
                <span className="github__pull-request__avatar">
                    <img src={this.props.pullRequest.user.avatar_url} />
                </span>
                {this.props.pullRequest.title}
                <a href={this.props.pullRequest.html_url}><i className="fa fa-external-link fa-lg" style={{color: "#e0c671", float: "right"}}/></a>
            </div>
        );
    }
});
