import React from 'react'
import MovieDetail from '../MovieDetail'
import { render, cleanup, waitForElement } from 'react-testing-library'

global.fetch = require('jest-fetch-mock')


afterEach(cleanup)

//The component is relying on props to function so here we mock the props it expects with the same shape 
const match = {
    params: {
        id: '1'
    }
}

const movie = {
    id: '1',
    title: 'Jest testing'
}

test('<Movie />', async () => {
    fetch.mockResponseOnce(JSON.stringify(movie))

    const { getByTestId } = render(<MovieDetail match={match} />)

    await waitForElement(() => getByTestId('movie-title'))

    expect(getByTestId('movie-title').textContent).toBe(movie.title)

})
