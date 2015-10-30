var Home = React.createClass({
	render: function (){
		var B = ReactBootstrap;
		var Carousel = B.Carousel;
		var CarouselItem = B.CarouselItem;
		return (
			 <Carousel>
		    <CarouselItem>
		      <img width={900} height={500} alt="900x500" src="test.jpg"/>
		      <div className="carousel-caption">
		        <h3>First slide label</h3>
		        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
		      </div>
		    </CarouselItem>
		   </Carousel> 

			)
	}

});

React.renderComponent(Home(), document.getElementById('content'));