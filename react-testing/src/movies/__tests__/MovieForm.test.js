import React from 'react'
import MovieForm from '../MovieForm'
import { render, cleanup, fireEvent } from 'react-testing-library'

// Unmount dom after each test for clean slate
afterEach(cleanup)

const onSubmit = jest.fn()

test('<MovieForm />', () => {
    const { queryByTestId, getByText, getByLabelText } = render(<MovieForm submitForm={onSubmit} />)
    const submit = getByText('Submit')
    const input = getByLabelText('Text')

    //Get onChange state of input
    // You're not testing if state is being updated correctly you test if the onChange value is being passed correctly to onSubmit
    fireEvent.change(input, { target: { value: 'hello' } })

    //Query by test id looks for whether or not the id exists. You can assert conditions based on result
    expect(queryByTestId('movie-form')).toBeTruthy()

    fireEvent.click(submit)

    //Mocking function can now add testing to the onSubmit function
    expect(onSubmit).toHaveBeenCalledTimes(1)
    expect(onSubmit).toHaveBeenCalledWith({ text: 'hello' })

})