import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <>
      <footer class="fixed-bottom p-0  foot">
      <div class="text-light ">
        <div class="row">
          <div class="pt-1 col-12 col-sm-4 text-center text-sm-start my-2 d-none d-sm-block px-sm-5">
            PICT IEEE Student Branch
          </div>

          <div class="col-12 col-sm-4 text-center my-2 pt-1">PISB Web Team</div>

          <div class="col-12 col-sm-4 text-center text-sm-end my-2 d-none d-sm-block px-sm-5">
            <i class="bi bi-linkedin mx-2"></i>
            <i class="bi bi-instagram mx-2"></i>
            <i class="bi bi-facebook mx-2"></i>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer