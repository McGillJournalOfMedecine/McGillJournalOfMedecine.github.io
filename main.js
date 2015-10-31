var Home=React.createClass({
	getInitialState: function (){
		return {
			screen: 1,
			key:"main",
		}
	},
	//changes screen state
	handleScreen: function(stateName) {
			this.setState({screen:stateName})
			// location.hash = '#'+content;
	},
	denumerator: function(name){
		switch(name){
					case 2:
						return "news"						
						break;
					default:
						return "main";
				}

	},
	numerator: function(number){
		switch(number){
					case "news":
						return 2						
						break;
					default:
						return 1;
				}

	},
	//changes key state which handles the screen state which determines what you see
	handleSelect: function(event){
		console.log(event)
		var temp=this.denumerator(event)
		this.setState(
			{key: event, screen: temp}, 
			function(){
					var url = window.location.href.split("/")
					window.location.href=url[0]+"#"+this.state.screen
		})
	},
	//unused for now, this is a cookie cutter
	handleChange: function(stateName) {
		return function (event) {
			console.log(event.target.value);
			var state={};
			state[stateName]=event.target ? event.target.value : event;
			this.setState(state)
			}.bind(this);
	},
	//executes before anything appears on the screen. Looks at the URL and changes the state depending on the hashtag.
	componentDidMount: function() {
		var url = window.location.href.split("/")
		var path = (url [url.length-1]).replace(/[#]/,"")
		// if (! path){path = "main"}
		var temp=this.numerator(path)
		this.setState({
			screen:path, key:temp},
			function(){
				var url = window.location.href.split("/");
				window.location.href=url[0]+"#"+this.state.screen;
			// 	switch(this.state.screen){
			// 		case "news":
			// 			console.log(2)
			// 			console.log(this.state.screen)
			// 			this.setState({key:2})
			// 			break;
			// 		default:
			// 			console.log("failed")
			// 			this.setState({key:1});
			// }
		})
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
		var NEWS=[];
		$.ajaxSetup({
        async: false
    });
		//loads react components into the aray NEWS. The news page will display the contents of the array
		$.getJSON( "news.json", function() {
		})
		  .done(function( data ) {
		      $.each( data, function( key, val ) {
			        NEWS.push([<h1 id="title">{key}</h1>, <p>{val[2]}</p>, <i>{val[0]}</i>,<em>{val[1]}</em>])
		      });
		    })
		  .fail(function() {
		    console.log( "error" );
		  })
		  .always(function() {
		  });
		var screen={
			main: (
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
					test
					{NEWS}
				</div>
				),
		};

		return (
			<Panel className="main">
				<Row style={{textAlign:"center"}}>
					<Col lg={12} md={12} xs={12}><img style={{width: "100%"}}id="banner" src="banner.jpg"></img></Col>
				</Row>
				<Tabs className="tabs" onSelect={this.handleSelect}  activeKey={this.state.key} tabWidth={10} paneWidth={10} defaultActiveKey={this.state.key} animation={false}>
					<Tab eventKey={1} title={<div className="tab">Home</div>}>{screen [this.state.screen]}</Tab>
					<Tab eventKey={2} title={<div className="tab">News</div>}>{screen [this.state.screen]}</Tab>
					<Tab eventKey={3} title={<div className="tab">news</div>}>{screen [this.state.screen]}</Tab>
				</Tabs>
			</Panel>	
			)
	}

});
ReactDOM.render(<Home/>, document.getElementById('content'));
