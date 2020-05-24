import React from 'react'
import MoviesList from '../MoviesList'
import { MemoryRouter } from 'react-router-dom'
import { render, cleanup, waitForElement } from 'react-testing-library'

global.fetch = require('jest-fetch-mock')


afterEach(() => {
    cleanup()
    console.error.mockClear()
})

console.error = jest.fn()

const movies = {
    results: [{
        id: '1',
        poster_path: 'asdaksd.jpg',
        title: 'Jest Testing'
    }, {
        id: '2',
        poster_path: 'asd23aksd.jpg',
        title: 'Testing'
    }, {
        id: '3',
        poster_path: 'asda44ksd.jpg',
        title: 'Jest'
    }]
}

const movie = movies.results[0]



test('<MoviesList />', async () => {
    fetch.mockResponseOnce(JSON.stringify(movies))

    const { getByTestId, queryByTestId, getAllByTestId } = render(
        <MemoryRouter>
            <MoviesList />
        </MemoryRouter>
    )
    expect(getByTestId('loading')).toBeTruthy() //This will fail because I dont have an api key
    await waitForElement(() => getByTestId('movie-link'))
    expect(queryByTestId('loading')).toBeFalsy() //Use query because loading will not exist when state is not loading. query searches and get will assume it exists

    const movieLink = getByTestId('movie-link')
    const allMovieLinks = getAllByTestId('movie-link')
    expect(movieLink.getAttribute('href')).toBe(`/${movie.id}`)
    expect(allMovieLinks.length).toBe(movies.results.length)
})
