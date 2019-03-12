import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';

const Detail = () => {
    return (
        <Query query={MOVIE_DETAILS}>
            {({ loading, error, data}) => {
                if (loading) return <span>loading</span>
                if (error) return <span>error</span>
                return <span>data</span>
            }}
        </Query>
    )
}

export default Detail;