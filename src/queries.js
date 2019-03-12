import gql from 'graphql-tag';

export const HOME_PAGE = gql`
    { 
        movies(limit:40, rating:7) {
            id
            title
            genres
            rating
        }
    }
`;

export const MOVIE_DETAILS = gql`
    query($movieId: Int!) {
        movie(id: $movieId) {
            id
            medium_cover_image
            title
        }
        suggestions(id: $movieId) {
            title
            rating
        }
    }
`;