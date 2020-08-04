import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UrlContainer from "./UrlContainer"
// import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom'


// jest.mock('../ApiCalls')

describe ( 'UrlContainer', () => {

    let mockedProps;
    let mockedUrlsInState;
    beforeEach(() => {
        mockedProps = {
            urls: [
                 {
                    urls: [{
                      "id": 1,
                      "long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
                      "short_url": "http://localhost:3001/useshorturl/1",
                      "title": "A thing",
                    }]
                 }
            ]
         }
    })

  
  it('Should appropriately render headings and anchor tags', () => {
    const { getByText } = render(<UrlContainer {...mockedProps}/>)
    const headingFour = getByText("A thing")
    
    expect(headingFour).toBeInTheDocument();
  })
});