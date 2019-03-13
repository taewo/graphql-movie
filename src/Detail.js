import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';

const Detail = ({match}) => {
    let { movieId } = match.params;
    return (
        <Query
            query={MOVIE_DETAILS}
            variables={{movieId}}
        >
            {({ loading, error, data}) => {
                if (loading) return <span>loading</span>
                if (error) return <span>error</span>
                console.log('data', data)
                return (
                <span>
                    123
                </span>
                )
            }}
        </Query>
    )
}

export default Detail;