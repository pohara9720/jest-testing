import React from 'react'
import Movie, { POSTER_PATH } from '../Movie'
import { MemoryRouter } from 'react-router-dom' //Router container for testing
import { render, cleanup, getByTestId } from 'react-testing-library'

afterEach(() => {
    cleanup()
    console.error.mockClear() //Need to clear the mock as it will keep record of being called if used in multiple tests and can become unreliable
})

console.error = jest.fn()

test('<Movie />', () => {
    render(<Movie />)
    expect(console.error).toHaveBeenCalled()
})

//Mocked data
const movie = {
    id: '1',
    poster_path: 'asdaksd.jpg',
    title: 'Jest Testing'
}

test('<Movie movie={movie} />', () => {
    const { getByTestId } = render(
        <MemoryRouter>
            <Movie movie={movie} />
        </MemoryRouter>
    )
    const movieLink = getByTestId('movie-link')
    const movieImage = getByTestId('movie-img')

    expect(console.error).not.toHaveBeenCalled()
    expect(movieLink.getAttribute('href')).toBe(`/${movie.id}`) // get attribute href instead of href as direct .href might change depending on environment
    expect(movieImage.src).toBe(`${POSTER_PATH}${movie.poster_path}`)
})