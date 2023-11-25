import React from 'react';
import { Movies } from '../components/Movies';
import { Preloader } from '../components/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

// don't change the Component name "App"
class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    };

    componentDidMount() {
        //fetch('http://www.omdbapi.com/?apikey=176f76d5&s=matrix')
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&`)
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            );
        console.log(this.state.movies);
    }

    //'&type=${type}'

    searchMovies = (e, type = 'all') => {
        this.setState({ loading: true });
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${e}`;
        if (type !== 'all') {
            url = url + `&type=${type}`;
        }
        fetch(
            url
            //`http://www.omdbapi.com/?apikey=176f76d5&s=${e}${
            //     type !== 'all' ? '&type=${type}' : ''
            //  }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )
            .catch((err) => {
                console.error(err);
                this.setState({ loading: false });
            });
    };

    render() {
        const { movies, loading } = this.state;
        // TODO: implement component
        //<Search />
        //<button onClick={handleEnter}>Search</button>
        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}

export { Main };
