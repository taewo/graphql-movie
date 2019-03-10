import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    { 
        movies(limit:40, rating:7) {
            id
            title
            genres
            rating
            medium_cover_image
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query($movieId: Int!) {
        movie(id: $movieId) {
            id
            medium_cover_image
            title
            rating
            genres
        }
        suggestions(id: $movieId) {
            title
            rating
        }
    }

`