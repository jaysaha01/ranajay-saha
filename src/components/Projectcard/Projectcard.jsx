import React from 'react'
import project2 from "../../assets/thumbnil.png"
import arrow from '../../assets/arrow.png'
import './Projectcard.css'


const Projectcard = (project) => {


    const { resData } = project;

    const { categroy, link, name,thumbnil } = resData;


    return (
        <div>
            <div className="projectCard">

                <div className="prosiceone">
                    <h5>{categroy}</h5>

                    <p>{name}</p>

                    <a href={link}>

                        <div className="arrowbx">

                            <img src={arrow} alt="" />

                        </div>


                    </a>

                </div>
                <div className="prosicetwo">

                    <img src={thumbnil} alt="" />

                </div>
            </div>

        </div>
    )
}




export default Projectcard
