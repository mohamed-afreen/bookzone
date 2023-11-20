import React from 'react'
import "./About.css"
import aboutImg from "../../images/about.jpg"


const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt='' />
          </div>

          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookZone</h2>
            <p className='fs-17'>BookZone is a collection of books, and possibly other materials and media,
             that is accessible for use by its members and members of allied institutions. Libraries provide physical (hard copies) or digital access (soft copies) materials,
              and may be a physical location or a virtual space, or both. A library's collection normally includes printed materials which can be borrowed,
             and a reference section of publications which are not permitted to leave the library and can only be viewed inside the premises</p>

             <p className='fs-17'>An online bookstore software project that serves as a central database for all of the books
              in stock, as well as their title, author, and price. The goal of this project is to create a
              website that serves as a central book store. This website was built with php on the front
              end and SQL on the back end. Various book-related details are stored in the SQL database.
              A user visiting the website will find a wide selection of books organized by category. The
              user can choose a book and see its price. The user can even utilize the website to look for
              certain books. After the user chooses a book, he/she must fill out a form before the book
              is booked for the user.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About