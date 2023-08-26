import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../components/Menu'
import Geko from "../img/geko.jpg"
import User from "../img/user.jpeg"
import Edit from "../img/edit.png"
import Delete from "../img/delete.png"

const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src={Geko} alt="" />
                <div className="user">
                    <img src={User} alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}><img src={Edit} alt="" /></Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>Lorem, Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellen
                   <br /> <br />dus numquam ab vel perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!</p>
            </div>
            <Menu />
        </div>
    )
}

export default Single