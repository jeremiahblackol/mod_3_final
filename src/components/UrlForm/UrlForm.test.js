import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UrlForm from "./UrlForm"
import '@testing-library/jest-dom'
import { postUrls } from '/Users/jeremiahblack/mod_3_final/url-shortener-ui/src/apiCalls.js';

jest.mock('/Users/jeremiahblack/mod_3_final/url-shortener-ui/src/apiCalls.js')


// postUrls={postUrls}
describe ( 'UrlForm', () => {

    it('Should render two inputs and a button', () => {
        const { getByPlaceholderText, getByRole } = render(<UrlForm />)
        const titleInput = getByPlaceholderText("Title...")
        const urlInput = getByPlaceholderText("URL to Shorten...")
        const submitButton = getByRole("button")

        expect(titleInput).toBeInTheDocument()
        expect(urlInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()     
  });

  it('Should call post urls when button is clicked', () => {
    const { getByRole } = render(<UrlForm postUrls={postUrls}/>)
    const submitButton = getByRole("button")
 
    fireEvent.click(submitButton)

    expect(postUrls).toBeCalledTimes(1)
  })
});