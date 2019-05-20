import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

// api from unsplash api developer

class App extends React.Component {
    state = { images: [] }; 
    
    // 通过searchBar去找答案 然后 这个 call 传资料出去
    onSearchSubmit = async (term) => {
        // 把前面部分 和 第二参数里的header 搬去 unsplash.js了
        // axios 更改 去 unsplash
        const res = await unsplash.get('/search/photos', {
            // https://api.unsplash.com/search/photos？query=term
            params: {
                // search 的字
                query: term
            }
        })

        this.setState({ images: res.data.results });
    }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '50px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />  
                <ImageList images={this.state.images} />
            </div>
        ) 
    }
};

export default App;