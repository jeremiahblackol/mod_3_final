import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from "./App"
import '@testing-library/jest-dom'
import { postUrls, getUrls } from '/Users/jeremiahblack/mod_3_final/url-shortener-ui/src/apiCalls.js';

jest.mock('/Users/jeremiahblack/mod_3_final/url-shortener-ui/src/apiCalls.js')


// postUrls={postUrls}
describe ( 'App', () => {


  getUrls.mockResolvedValue({
      urls: [{
        urls: [{
          "id": 1,
          "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
          "short_url": "http://localhost:3001/useshorturl/1",
          "title": "A thing",
        }]
      }]
    })
  
  
   /*

  
  
  
  
  */

    it('Should render url form', () => {
        const { getByPlaceholderText, getByRole } = render(<App />)
        const titleInput = getByPlaceholderText("Title...")
        const urlInput = getByPlaceholderText("URL to Shorten...")
        const submitButton = getByRole("button")

        expect(titleInput).toBeInTheDocument()
        expect(urlInput).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()     
  });


});
