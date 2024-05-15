import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../assets/Rectangle 11 (1).png";
import img2 from "../../assets/Rectangle 11 (2).png";
import img3 from "../../assets/Rectangle 11 (3).png";
import img4 from "../../assets/Rectangle 11 (4).png";



export default function TopSelling() {
   /* global $ */
  $('.products-widget-slick').each(function() {
		var $this = $(this),
				$nav = $this.attr('data-nav');

		$this.slick({
			infinite: true,
			autoplay: true,
			speed: 300,
			dots: false,
			arrows: true,
			appendArrows: $nav ? $nav : false,
		});
	});
  return <div>
  <div class="section">
			
			<div class="container">
				
				<div class="row">
					<div class="col-md-4 col-xs-6">
						<div class="section-title">
							<h4 class="title">Top selling</h4>
							<div class="section-nav">
								<div id="slick-nav-3" class="products-slick-nav"></div>
							</div>
						</div>

						<div class="products-widget-slick" data-nav="#slick-nav-3">
							<div>
								
								<div class="product-widget">
									<div class="product-img">
										<img src={img1} alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src={img2} alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src={img3} alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								
							</div>

							<div>
								
								<div class="product-widget">
									<div class="product-img">
										<img src={img4} alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product02.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product03.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								
							</div>
						</div>
					</div>

					<div class="col-md-4 col-xs-6">
						<div class="section-title">
							<h4 class="title">Top selling</h4>
							<div class="section-nav">
								<div id="slick-nav-4" class="products-slick-nav"></div>
							</div>
						</div>

						<div class="products-widget-slick" data-nav="#slick-nav-4">
							<div>
								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product04.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product05.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product06.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								
							</div>

							<div>
								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product07.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product08.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product09.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								
							</div>
						</div>
					</div>

					<div class="clearfix visible-sm visible-xs"></div>

					<div class="col-md-4 col-xs-6">
						<div class="section-title">
							<h4 class="title">Top selling</h4>
							<div class="section-nav">
								<div id="slick-nav-5" class="products-slick-nav"></div>
							</div>
						</div>

						<div class="products-widget-slick" data-nav="#slick-nav-5">
							<div>
								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product01.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product02.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								

								
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product03.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
								
							</div>

							<div>
				
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product04.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
			
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product05.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
							

					
								<div class="product-widget">
									<div class="product-img">
										<img src="./img/product06.png" alt=""/>
									</div>
									<div class="product-body">
										<p class="product-category">Category</p>
										<h3 class="product-name"><Link to="#">product name goes here</Link></h3>
										<h4 class="product-price">$980.00 <del class="product-old-price">$990.00</del></h4>
									</div>
								</div>
						
							</div>
						</div>
					</div>

			
			</div>
		
		</div>
  </div>
  </div>

}
