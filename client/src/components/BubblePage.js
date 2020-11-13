import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from "./Utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts

  const getColors = ()=>{
    axiosWithAuth()
    .get('/api/colors')
    .then(response=>{
      // set that data to the colorList state property
      setColorList(response.data)
    })
    .catch(error=>{
      console.log('THIS IS YOUR ERROR', error)
    })
  }

  useEffect(()=>{
    getColors()
  },[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
