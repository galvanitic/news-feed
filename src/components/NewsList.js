import React, {Component} from 'react'
import Article from ',/Article'

class NewsList extends Component {
    state = {
      SearchBar: '',
      Articles: []
    }
    
   SearchInput = (e) => {
            this.setState({SearchBar: e.target.value})
   }
   
    fetchNewsList = () => {
        var URL = 'https://hn.algolia.com/api/v1/search?query='
        fetch(URL + this.state.SearchBar)
            .then(response => response.json())
            .then(data => {console.log(data)
                this.setState({Articles: data})
            })
     }
      render()  {
        
        return (
            <div>
                <form>
                    <input placeholder='Search for article' name='search' onChange={SearchInput}></input>
                    <button name='submit' onClick={fetchNewsList}>Submit</button>
                </form>
                
            </div>
        )
    }
    }
    export default NewsList;