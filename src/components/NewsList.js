import React, {Component} from 'react'
import Article from './Article'
import '../css/article.css'

class NewsList extends Component {
    state = {
    SearchBar: '',
    Articles: []
    }
    
    SearchInput = (e) => {
        this.setState({SearchBar: e.target.value})
        
    }
    clearQuery = () => {
        this.setState({SearchBar: ''});
    }
    fetchNewsList = (e) => {
        e.preventDefault();
        var URL = 'https://hn.algolia.com/api/v1/search?query='
        fetch(URL + this.state.SearchBar)
        .then(response => response.json())
        .then(data => {this.setState({Articles: data.hits});
            this.clearQuery()})
    }
    render()  {
        
        return (
            <div>
                <form>
                    <input placeholder='Search for article' name='search' onChange={this.SearchInput}></input>
                    <button name='submit' onClick={this.fetchNewsList}>Submit</button>
                </form>
                {this.state.Articles.map(story => <Article article={story} />)}
                
            </div>
        )
    }
    }
    export default NewsList;