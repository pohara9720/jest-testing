import React from 'react'
import NewMovie from '../NewMovie'
import { render, cleanup, fireEvent } from 'react-testing-library'

// Unmount dom after each test for clean slate
afterEach(cleanup)

test('<NewMovie />', () => {
    const { getByTestId, queryByTestId, container, getByText } = render(<NewMovie />)
    const title = getByTestId('page-title')
    const submit = getByText('Submit')

    expect(title.textContent).toBe('New Movie')
    //Query by test id looks for whether or not the id exists. You can assert conditions based on result
    expect(queryByTestId('movie-form')).toBeTruthy()
    //Creates a snapshot of the html structure and will fail if snapshot does not match current structure
    expect(container.firstChild).toMatchSnapshot()

    fireEvent.click(submit)

})