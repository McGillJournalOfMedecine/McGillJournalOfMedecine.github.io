var Home=React.createClass({
	getInitialState: function (){
		return {
			screen: "home"
		}
	},
	handleChange: function(stateName) {
		return function (event) {
			console.log(event.target.value);
			var state={};
			state[stateName]=event.target ? event.target.value : event;
			this.setState(state)
			}.bind(this);
	},
	render: function (){
		var B=ReactBootstrap,
		Carousel=B.Carousel,
		CarouselItem=B.CarouselItem,
		Col=B.Col,
		Row=B.Row,
		Tabs=B.Tabs,
		Tab=B.Tab,
		Panel=B.Panel;

		var screen={
			home: (
				<div>
			  <Carousel>
			    <CarouselItem>
			      <img style={{margin:"auto"}} width={450} height={600} alt="900x500" src="test.jpg"/>
			      <div className="carousel-caption">
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
			    <CarouselItem>
			      <img style={{margin:"auto"}} width={450} height={600} alt="900x500" src="test.jpg"/>
			      <div className="carousel-caption">
			        <h3>Second slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
		    </Carousel> </div>),
		};


		return (
			<Panel className="main">
				<Row style={{textAlign:"center"}}>
					<Col lg={12} md={12} xs={12}><img style={{width:"100%"}} id="banner" src="banner.jpg"></img></Col>
				</Row>
				<Tabs defaultActiveKey={1} animation={false}>
					<Tab eventKey={1} title="Tab 1">{screen [this.state.screen]}</Tab>
				</Tabs>
			</Panel>	
			)
	}

});
ReactDOM.render(<Home/>, document.getElementById('content'));
