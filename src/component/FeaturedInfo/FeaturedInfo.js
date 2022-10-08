import { useState } from 'react';
import './featuredInfo.css'
import { AddTaskOutlined, EventRepeatOutlined, AssignmentOutlined } from '@mui/icons-material';
import PieCharts from '../Chart/PieChart';



function FeaturedInfo(){
    return(
        <div className="featuredInfo">
            <div className="featuredItem">
                <span className="featuredTitle">Projects</span>
                <div className="featuredContainer">
                    <p className="featuredProjects"> 
                     <AssignmentOutlined /> Projects <span className='projectItem'>300+</span>  </p>
                     <p className="featuredProjects"> 
                    <EventRepeatOutlined /> In progress<span className='projectItem'>121+</span>  </p>
                    <p className="featuredProjects"> 
                    <AddTaskOutlined />Completed <span className='projectItem'> 170+</span>  </p>
                </div> 
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Work Progress </span>
                <div className="featuredContainer">
                    {<PieCharts />}
                </div> 
            </div>
            <div className="featuredItem">
                <div className='notificationContainer'>
                    <span className="featuredTitle">
                        Attendance</span>

                    <span className="featuredTitle">Late</span>
                    <span className="featuredTitle">Absent</span>
                </div>
                <div className="container">
                    <h1 className="featuredNum">30</h1>
                    <h1 className="featuredNum">7</h1>
                    <h1 className="featuredNum">5</h1>
                </div>
                 
                </div> 
            </div>
            )
}

export default FeaturedInfo;