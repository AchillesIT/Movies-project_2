import React from 'react';

function Movie(props) {
    const {
        Title,
        Year,
        imdbID,
        Type,
        Poster
    } = props;

    return <div id={"movie-" + imdbID} className="movie card">
        <div className="card-image waves-effect waves-block waves-light">
            {
                Poster === "https://m.media-amazon.com/images/M/MV5BOTUwOTY3Mjg1MF5BMl5BanBnXkFtZTcwODI2MTAyMQ@@._V1_SX300.jpg" ?
                <img className='activator' title='Нет картинки' src={'?text=${title}'} />
                :
                <img className='activator' src={Poster} />
            }
        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
                {Title}
            </span>
            <p>
                <span>{Year}, {Type}</span>
                <a href="#" className="right">Read more</a>
            </p>
        </div>
    </div>;
}

export { Movie };