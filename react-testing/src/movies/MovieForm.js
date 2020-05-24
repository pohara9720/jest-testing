import React, { Component } from 'react'

export default class MovieForm extends Component {
    state = {
        text: ''
    }

    onChange = e => this.setState({ text: e.target.value })

    render() {
        const { submitForm } = this.props
        const { text } = this.state
        return (
            <form data-testid='movie-form' onSubmit={() => submitForm({ text })}>
                <label htmlFor='text'>
                    Text
                    <input type='text' id='text' onChange={this.onChange} />
                </label>
                <button>Submit</button>

            </form>
        )
    }
}
