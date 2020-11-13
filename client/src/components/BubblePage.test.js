import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import {fetchBubbles as mockAPI} from './Utils/MOCKAPI'
import App from '../App'

jest.mock('./MOCKAPI')

const mockAPI = {data:[
  {
    color:'aliceblue',
    code:{
      hex: '#f0f8ff'
    },
    id:1
  },

  {
    color:'blueviolet',
    code:{
      hex: '#8a2be2'
    },
    id:11
  },
  

]}

test("render without errors", async() => {
  render(<App/>)
});
test("Fetches data and renders the bubbles", async() => {
  render(<App/>)
  mockAPI.mockResolvedValueOnce(mockAPI)

  const button = screen.getAllByTestId('test')
  fireEvent.click(button)
  
  await waitFor(()=>{
    const bubbles = screen.getAllByText(/bubbles/i)
    expect(bubbles).toBeVisible
  })
  //Finish this test
});
