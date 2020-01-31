import React, { Component } from 'react';
// import '../css/article.css'
import Moment from 'react-moment';


class Article extends Component {
    render() {
        return (
            <div class='article'>
              <div className='content'>
                <div className="header">
                    <h1>{this.props.article.title}</h1>
                </div>
                    <a href={this.props.article.url}>{this.props.article.url}</a>
                <div className="info">
                    <p>{this.props.article.author}</p>
                    <p>{this.props.article.points} points</p>
                    <p>{this.props.article.num_comments} comments</p>
                    <p>Posted <Moment fromNow>{this.props.article.created_at}</Moment></p>
                </div>
              </div>
            </div>
        );
    }
}

export default Article;