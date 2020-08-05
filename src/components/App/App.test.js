import React from 'react'
import App from './App'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
import {getUrls, postUrls } from '../../apiCalls'
jest.mock('../../apiCalls');

getUrls.mockResolvedValue({
  urls: [
    {
      id: 1,
      long_url: 'https://images.unsplash.com/480b7090470f?ixlib=auto=format&fit=crop&w=934&q=80',
      short_url: 'http://localhost:3001/useshorturl/1',
      title: 'A thing'
    },
    {
      id: 2,
      long_url: 'https://images.unsplash.com/xlib=rb-1.2.1&ixid=eyfit=crop&w=934&q=80',
      short_url: 'http://localhost:3001/useshorturl/2',
      title: 'Another thing'
    }]
})


describe('App', () => {

  it('Should render app header', () => {
    const { getByText } = render(<App />)
    const header = getByText('URL Shortener')

    expect(header).toBeInTheDocument();
  })

  it('Should render urls on load', async () => {
    const { getByText } = render(<App />)

    const title = await waitFor(() => getByText('A thing'))
    const title2 = await waitFor(() => getByText('Another thing'))

    expect(title).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
  })

  it('Should render submitted urls', async () => {
    
    const { getByRole, getByPlaceholderText, getByText } = render(<App />)

    const titleInput = getByPlaceholderText('Title...')
    const urlInput = getByPlaceholderText('URL to Shorten...')


    fireEvent.change(titleInput, { target: {value:"Hello all"}})
    fireEvent.change(urlInput, {target: {value:"aaaaeeeeiiiioooouuuu.org"}})

    expect(titleInput.value).toBe("Hello all")
    expect(urlInput.value).toBe("aaaaeeeeiiiioooouuuu.org")

    // console.log("title input b4", titleInput.value)
    const submitButton = getByRole('button')
    fireEvent.click(submitButton)

    // console.log("title input after", titleInput.value)
    expect(postUrls).toBeCalledTimes(1)

    // const newTitle = await waitFor(() => getByText("Hello all"))

    // expect(newTitle).toBeInTheDocument();
    })
  })








