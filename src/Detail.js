import React from 'react';
import { Query } from 'react-apollo';
import { MOVIE_DETAILS } from './queries';

const Detail = ({ match }) => (
    <Query query={MOVIE_DETAILS}>

        {({ loading, data, error }) => {
            console.log(1, match)
            if (loading) return <span>loading</span>
            if (error) return <span>error</span>
            return (
                <React.Fragment>
                    Detail
                </React.Fragment>
            )
        }}
    </Query>
)

export default Detail;