import React from 'react'
import { tours } from '../data'
import Title from './Title'



export default function Tours() {
  return (
    <>
        <section className="section" id="tours">
          <Title title='Featured' subTitle='Tours'/>
      
      <div className="section-center featured-center">
        {
          tours.map((tour)=>{
            const {id, imgsrc, info, date, place, tourtitle, days, price} = tour
            return(
              <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={imgsrc} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{tourtitle}</h4>
                </div>
                <p>
                  {info}
                </p>
                <div className="tour-footer">
                  <p>
                    <span><i className="fas fa-map"></i></span> {place}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
    </>
  )
}
