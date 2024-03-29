import React from "react";
import Search from "./Search"
import Logo from "./Logo";
import {Link} from "react-router-dom";
import {FaFileAlt, FaHome, FaComments, FaDraftingCompass, FaPen } from "react-icons/fa";

//The css for the icons exist in the index.css file. I gave it a class name "sidebar-icon" and applied the styles via @apply in tailwind!
function Navbar ({setSearchTerm}) {

    return (
    <div className="">
     <Logo />
     <Search setSearchTerm={setSearchTerm} /> 
     <HomeIcon homeIcon={<FaHome size="40" />}/>
     <ReviewIcon reviewIcon={<FaFileAlt size="40" />} />
     <GuidesIcon guidesIcon={<FaDraftingCompass size="40" />}/>
     <DiscussionsIcon discussionsIcon={<FaComments size="40"/>} />
     <FormIcon formIcon={<FaPen size="40" />} />
    </div>
    )
}

//This is our Home Icon Component
function HomeIcon ({homeIcon}) {
    
    return (
        <Link to={'/'}><div className="sidebar-icon" title="Home"> {homeIcon} </div></Link>

    )
}

function ReviewIcon ({reviewIcon}) {
    return (
        <div>
            
            <Link to={'review-list'}><div className="sidebar-icon" title="View Reviews"> {reviewIcon} </div></Link>
           
        </div>

    )
}

function GuidesIcon ({guidesIcon}) {
    return (
        <div>
            
            <Link to={'guide-list'}><div className="sidebar-icon" title="View Guides"> {guidesIcon} </div></Link>
           
        </div>

    )
}

function DiscussionsIcon ({discussionsIcon}) {
    return (
        <div>
            
            <Link to={'discussionslist'}><div className="sidebar-icon" title="View Discussions"> {discussionsIcon} </div></Link>
           
        </div>

    )
}

function FormIcon ({formIcon}) {
    return (
        <div>
            
            <Link to={'form'}><div className="sidebar-icon" title="Submit!"> {formIcon} </div></Link>
           
        </div>

    )
}

export default Navbar