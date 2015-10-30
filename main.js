var Home = React.createClass({
	getInitialState: function (){
		return {
			screen: "main"
		}
	},
	render: function (){
		var B = ReactBootstrap,
		Carousel = B.Carousel,
		CarouselItem = B.CarouselItem,
		Col = B.Col,
		Row = B.Row,
		Tabs = B.Tabs,
		Tab = B.Tab;

		var screen = {
			home: (
				<div className = "main">
				<Row style = {{textAlign:"center"}}>
					<Col lg = {12} md = {12} xs = {12}><img src = "banner.jpg"></img></Col>
				</Row>
			  
			  <Carousel>
			    <CarouselItem>
			      <img width={100} height={10} alt="100x250" src="test.jpg"/>
			      <div className="carousel-caption">
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
			    <CarouselItem>
			      <img width={100} height={10} alt="100x250" src="test.jpg"/>
			      <div className="carousel-caption">
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
		    </Carousel> 
		  </div> ),
		},

		return (
			{screen [this.state.screen]}
			
			)
	}

});
ReactDOM.render(<Home/>, document.getElementById('content'));
