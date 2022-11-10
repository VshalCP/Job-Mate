import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

    const newArticle = (heading, subtitle) => (
        <div className="widgets_article">
            <div className="widgets_left">
            <FiberManualRecordIcon />
            </div>

            <div className="widgets_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );



  return (
    <div className="widgets">
         <div className="widgets_header">
            <h2>Job-Mate News</h2>
            <InfoIcon />
         </div>
         {newArticle("Layoff & Termination", "Top-News - Twitter CEO Elon Musk Terminate 50% Employees")}
         {newArticle("Internships & Job", "Top-News - Amazon,Microsoft,Google hiring intern from 2023 batch")}
         {newArticle("Redux and Flux", "Redux is better way to represent more functionality in Web-App")}
         {newArticle("Stock Market", "Bitcoin Break records reach $22 Ahead compare to other crypto")}
         {newArticle("Gujarat Elections", "The rate of Petrol and diesel are decresing due to Elections")}
         {newArticle("Government Jobs", "Due to recent recession many people prefer Govt jobs instead private sector")}
         {newArticle("Redux and Flux", "Redux is better way to represent more functionality in Web-App")}
         {newArticle("Redux and Flux", "Redux is better way to represent more functionality in Web-App")}
         
    </div>
  )
}

export default Widgets