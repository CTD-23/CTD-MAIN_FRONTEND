import React from 'react'
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className='fade-in'>
      <div className="container text-center  p-sm-0 p-4  pb-sm-1 text-white">

        <img className="img-fluid ctd-logo py-5 " src="https://i.postimg.cc/yNMmy6CD/ctdlogo.png" alt="" />


          <div className="content">
            <p><strong> Credenz Tech Dayz </strong>is an intra-college annual techfest organized by the PICT IEEE
              Student Branch where the brightest minds of PICT compete in technical as well as non-technical events.
              Participants get a chance to test their logical aptitute and problem solving skills in events like like
              National Computing Contest and Reverse Coding. The Network Treasure Hunt is an online cryptic hunt that
              challenges you to use every tool at your disposal and piece together every bit of the puzzle.
              Inquisitive is a mind-boggling test to question your wits and test your general knowledge. This is a
              chance for the students to go beyond the traditional spheres of academics and make the most of their
              potential.</p>
          </div>
      </div>

      <div className="container text-center mt-lg-5 p-4 mt-sm-0 text-white">

        <h1 className="mb-sm-3 mb-lg-5">ABOUT US</h1>

        <div className="row my-5 py-3 py-sm-1">
          <div className="col d-flex justify-content-center col-12 col-lg-6 mb-sm-5 mb-3">
            <img className="img-fluid" src="https://ctd.pictieee.in/static/media/ieee.afc7672e5bd9b388828d.png" alt="" style={{"max-width" : "50%" }} />
          </div>

          <div className="col col-12 col-lg-6 content">
            <h2 className="text-center">Institute of Electrical and Electronics Engineering</h2>
            <p>The Institute of Electrical and Electronics Engineering (IEEE) is an international organization, which has been the nexus for propagating scientific expertise among people all over the globe. IEEE continues to attract students, faculty and professionals from various fields all around the world and is committed to incorporate diversity in thoughts which is essential for scientific development. IEEE currently has Student Branches at thousands of universities and colleges in hundreds of countries throughout the world.</p>
          </div>

        </div>

        <div className="row d-flex flex-row-reverse my-5 py-3">

          <div className="col d-flex justify-content-center col-12 col-lg-6">
            <img className="img-fluid" src="https://ctd.pictieee.in/static/media/credenz.027d8cf4726375a177d8.jpg" alt="" style={{"max-width": "65%", "max-height": "85%"}} />
          </div>

          <div className="col col-12 col-lg-6 content">
            <h2 className="text-center">PICT IEEE Student Branch (PISB)</h2>
            <p>PISB was established in the year 1998 with the aim of inculcating the sense of technical awareness amongst its student members. PISB endeavers to escalate the knowledge and trends in the diverse field of technologies amongst its members. PISB upholds two major events every year, Credenz and Credenz Tech Dayz with the first one being conducted in the even semester and the second one in the odd semester. PISB is also marked by its Women in Engineering (WIE) chapter, an initiative for impowerment of women in the technical domain. PISB has been awarded the Best Student Branch of IEEE in Pune section.</p>
          </div>



        </div>

        <div className="row my-5 py-3">

          <div className="col d-flex justify-content-center col-12 col-lg-6">
            <img className="img-fluid" src="https://ctd.pictieee.in/static/media/ping.94d36c92d02619928114.jpg" alt="" style={{"max-width": "50%", "max-height": "85%"}} />
          </div>

          <div className="col col-12 col-lg-6 content">
            <h2 className="text-center">PICT IEEE NEWSLETTER GROUP (P.I.N.G.)</h2>
            <p>P.I.N.G. (PICT IEEE Newsletter Group) is the official technical magazine of PISB. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. P.I.N.G. serves as a platform for individuals to portray their technical ingenuity. It highlights articles on cutting-edge technologies from technocrats all around the globe including students, industrialists and faculty members. It also features interviews of distinguished personalities in various technical domains.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default AboutUs