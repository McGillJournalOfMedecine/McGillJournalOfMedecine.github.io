var NEWS=[];

$.getJSON( "news.json", function() {
})
  .done(function( data ) {
      $.each( data, function( key, val ) {
        // $( "<img>" ).attr( "src", val.media.m ).appendTo( "#images" );
        // NEWS.concat([<div><h1>{key}</h1><p>{val}</p></div>])
        console.log(typeof key)
        NEWS.push([<h1 id="title">{key}</h1>, <p>{val[2]}</p>, <i>{val[0]}</i>,<em>{val[1]}</em>])
        // console.log([<div><h1>{key}</h1><p>{val}</p></div>])
      });
    })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( NEWS );
  });
 

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
			news: (
				<div>
					{NEWS}
				</div>
				),
		};


		return (
			<Panel className="main">
				<Row style={{textAlign:"center"}}>
					<Col lg={12} md={12} xs={12}><img style={{width:"100%"}} id="banner" src="banner.jpg"></img></Col>
				</Row>
				<Tabs className="tabs" tabWidth={10} paneWidth={10} defaultActiveKey={1} animation={false}>
					<Tab eventKey={1} title="Tab 1">{screen ["home"]}</Tab>
					<Tab eventKey={2} title="Tab 2">{screen ["news"]}</Tab>
				</Tabs>
			</Panel>	
			)
	}

});
ReactDOM.render(<Home/>, document.getElementById('content'));
