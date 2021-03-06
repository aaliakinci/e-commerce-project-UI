import React from 'react'

export default function ProductDetail() {
	return (
		<section className="portfolio-details">
      <div className="container">
        <div className="portfolio-details-container">
          <div className="owl-carousel portfolio-details-carousel">
            <img src="assets/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt=""/>
            <img src="assets/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="portfolio-info">
            <h3>Project information</h3>
            <ul>
              <li><strong>Category</strong>: Web design</li>
              <li><strong>Client</strong>: ASU Company</li>
              <li><strong>Project date</strong>: 01 March, 2020</li>
              <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
            </ul>
          </div>
        <div className="portfolio-description">
          <h2>This is an example of portfolio detail</h2>
          <p>
            Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
          </p>
        </div>
      </div>
			</div>
    </section>
	)
}
