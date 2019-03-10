import React from 'react';
import { Query } from "react-apollo";
import { HOME_PAGE } from './queries'

// const Home = () => <Query query={HOME_PAGE}></Query>

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, data, error }) => {
            if (loading) return <span>loading</span>
            if (error) return <span>something happend</span>
            if (data) {
                console.log('data..', data)
                return <span>yay!!</span>
            }
        }}

    </Query>
)

export default Home;