import React from 'react'
import Counter from '../Counter'
import { render, cleanup, fireEvent } from 'react-testing-library'

// Unmount dom after each test for clean slate
afterEach(cleanup)

test('<Counter />', () => {
    //Renders component
    const {
        // debug, 
        getByTestId
    } = render(<Counter />)

    const counterButton = getByTestId('counter-button')

    //debug() //Outputs dom as string

    //Asserts counter-button is a button
    expect(counterButton.tagName).toBe('BUTTON')
    //Assets counter-button starts at 0
    expect(counterButton.textContent).toBe('0')
    //Click the counter component
    fireEvent.click(counterButton)
    //Verify state has changed
    expect(counterButton.textContent).toBe('1')
})