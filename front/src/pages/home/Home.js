import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../../components/navbar/Navbar'

import "./home.css"
import {Link} from "react-router-dom"
import Sidebar from '../../components/sidebar/Sidebar'
import logo from "../../images/logo.png"
import Post from '../../components/post/Post'


const Home = () => {

  return (
    <div className="m-2">
      <Post />
    </div>
  )
}

export default Home