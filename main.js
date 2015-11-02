var NEWS=[];
var CAROUSEL=[];
$.ajaxSetup({
      async: false
  });
//loads react components into the aray NEWS. The news page will display the contents of the array
$.getJSON( "Data/news.json", function() {
})
  .done(function( data ) {
      $.each( data, function( key, val ) {
	        NEWS.push([<h1 id="title">{key}</h1>, <p>{val[2]}</p>, <i>Posted by {val[0]}</i>,<em> on {val[1]}</em>])
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
					case 3:
						return "submissions"
						break;
					case 4:
						return "archives"
						break;
					case 5:
						return "aboutUs"
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
					case "submissions":
						return 3
						break;
					case "archives":
						return 4
						break;
					case "aboutUs":
						return 5
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
	carousellify: function(){

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
		if (! path){path = "main"}
		var temp=this.numerator(path)
		console.log(temp)
		this.setState({
			screen:path, key:temp},
			function(){
				var url = window.location.href.split("/");
				window.location.href=url[0]+"#"+this.state.screen;
		})
		var B=ReactBootstrap,
		CarouselItem=B.CarouselItem;
		$.getJSON( "Data/carousel.json", function() {
			})
	  	.done(function( data ) {
	      $.each( data, function( key, val ) {
	      	var temp="Pictures/"+val[0]
	      	CAROUSEL.push([
	      		<CarouselItem>
				      <img style={{margin:"auto"}} width={450} height={600} alt="900x500" src={temp}/>
				      <div className="carousel-caption">
				        <h3>{key}</h3>
				        <p>{val[1]}</p>
				      </div>
				    </CarouselItem>])
	      });
	    })
	  .fail(function() {
	    console.log( "error" );
	  })
	  .always(function() {
	  });
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
			  <Carousel>
			    	{CAROUSEL}
		    </Carousel>),
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
					<Col lg={12} md={12} xs={12}><img style={{width: "100%"}}id="banner" src="Pictures/banner.jpg"></img></Col>
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
