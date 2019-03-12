import React from 'react';
import { Query } from 'react-apollo';
import { HOME_PAGE } from './queries';

const Home = () => {
    return (
        <Query query={HOME_PAGE}>
            {({ loading, data, error }) => {
                if (loading) return <span>loading</span>            
                if (error) return <span>error</span>
                console.log(data.movies)
                return data.movies.map((movie) => {
                    return (
                        <div key={movie.id}>
                            {movie.id} / {movie.rating} / {movie.title}
                        </div>
                    )
                })
            }}
        </Query>
    )
}

export default Home;