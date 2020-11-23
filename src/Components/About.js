import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Isabel Tripp Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p style={{ color: "#d3d3d3"}}>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Feel free to reach out!</h2>
                  <p className="address" style={{ color: "#d3d3d3"}}>
						   <span>{phone}</span><br />
                     <span>{email}</span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} target="_blank" className="button"><i className="fa fa-download"></i>Single-page Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
