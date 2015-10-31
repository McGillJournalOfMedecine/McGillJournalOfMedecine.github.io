var NEWS=[];
//loads react components into the aray NEWS. The news page will display the contents of the array
$.getJSON( "news.json", function() {
})
  .done(function( data ) {
      $.each( data, function( key, val ) {
        // $( "<img>" ).attr( "src", val.media.m ).appendTo( "#images" );
        // NEWS.concat([<div><h1>{key}</h1><p>{val}</p></div>])
        NEWS.push([<h1 id="title">{key}</h1>, <p>{val[2]}</p>, <i>Posted by {val[0]}</i>,<em> on {val[1]}</em>])
        // console.log([<div><h1>{key}</h1><p>{val}</p></div>])
      });
    })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
  });
 

var Home=React.createClass({
	getInitialState: function (){
		return {
			screen: "main",
			key:"1",
		}
	},
	//changes screen state
	handleScreen: function(stateName) {
			this.setState({screen:stateName})
			// location.hash = '#'+content;
	},
	//changes key state which handles the screen state which determines what you see
	handleSelect: function(event){
		// console.log(event)
		this.setState({
			key: event}, function(){var url = window.location.href.split("/")
			window.location.href=url[0]+"#"+this.state.screen})
		switch(event){
			case 1:
				this.setState({screen:"main"})
				break;
			case 2:
				this.setState({screen:"news"})
				break;
			case 3:
				this.setState({screen:"submissions"})
				break;
			case 4:
				this.setState({screen:"archives"})
				break;
			case 5:
				this.setState({screen:"aboutUs"})
				break;
			default:
				this.setState({screen:"main"});
		}
		
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
	componentWillMount: function() {
		var url = window.location.href.split("/")
		var path = (url [url.length-1]).replace(/[#]/,"")
		if (! path){path = "main"}
		this.setState({
			screen:path},
			function(){
				console.log('test')
				var url = window.location.href.split("/");
				window.location.href=url[0]+"#"+this.state.screen;
				switch(this.state.screen){
					case "main":
						console.log(1)
						this.setState({key:1})
						break;
					case "news":
						console.log(2)
						this.setState({key:2})
						break;
					case "submissions":
						console.log(3)
						this.setState({key:3})
						break;
					case "archives":
						console.log(4)
						this.setState({key:4})
						break;
					case "aboutUs":
						console.log(5)
						this.setState({key:5})
						break;
					default:
						this.setState({key:1});
			}
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

		var screen={
			main: (
				<div>
			  <Carousel>
			    <CarouselItem>
			      <img style={{margin:"auto"}} width={450} height={600} alt="900x500" src="test4.jpg"/>
			      <div className="carousel-caption">
			        <h3>First slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
			    <CarouselItem>
			      <img style={{margin:"auto"}} width={450} height={600} alt="900x500" src="test6.jpg"/>
			      <div className="carousel-caption">
			        <h3>Second slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
			    <CarouselItem>
			      <img style={{margin:"auto"}} width={450} height={600} alt="900x500" src="test5.jpg"/>
			      <div className="carousel-caption">
			        <h3>Third slide label</h3>
			        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
			      </div>
			    </CarouselItem>
		    </Carousel> </div>),
			news: (
				<div>
					<h1> Latest News </h1>
					{NEWS}
				</div>
				),
			submissions: (
				<div>
					<h1> Contact Our Editors </h1>
					<a href="mailto:chuong.francois.trinh@gmail.com">Kanye West</a>
				</div>
				),
			archives: (
				<div>
					<h1> Archives </h1>
				</div>
				),
			aboutUs: (
				<div>
					<h1> About Us </h1>
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
					<Tab eventKey={3} title={<div className="tab">Submissions</div>}>{screen [this.state.screen]}</Tab>
					<Tab eventKey={4} title={<div className="tab">Archives</div>}>{screen [this.state.screen]}</Tab>
					<Tab eventKey={5} title={<div className="tab">About Us</div>}>{screen [this.state.screen]}</Tab>
				</Tabs>
			</Panel>	
			)
	}

});
ReactDOM.render(<Home/>, document.getElementById('content'));
