var NEWS=[];
var CAROUSEL=[];
var today=new Date();
var milliseconds=today.getMilliseconds();
$(document).ready(function() {
  $.ajaxSetup({ cache: false });
});
$.ajaxSetup({
      async: false,
      cache: false
  });
//loads react components into the aray NEWS. The news page will display the contents of the array

// $('body').css('background-image', 'Pictures/pen.png)');
$.getJSON( "Data/news.json"+'?'+milliseconds, function() {
})
  .done(function( data ) {
      $.each( data, function( key, val ) {
      	console.log(data)
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
	//unused for now, this is a cookie cutter
	handleChange: function(stateName) {
		return function (event) {
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
		this.setState({screen:path})
		// console.log(/.+?(?=\#)/.exec(url))
		// this.setState({})
		
		var B=ReactBootstrap,
		CarouselItem=B.CarouselItem;
		$.ajaxSetup({
      async: false,
      cache: false
  	});
		$.getJSON( "Data/pictureCarousel.json"+'?'+milliseconds, function() { 
			})
	  	.done(function( data ) {
	      $.each( data, function( key, val ) {
	      	var temp="../Pictures/"+val[0]
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
		Panel=B.Panel,
		Navbar=B.Navbar,
		NavBrand=B.NavBrand,
		Nav=B.Nav,
		NavItem=B.NavItem,
		NavDropdown=B.NavDropdown,
		MenuItem=B.MenuItem,
		Jumbotron=B.Jumbotron;

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
// <Tabs className="tabs" onSelect={this.handleSelect}  activeKey={this.state.key} tabWidth={10} paneWidth={10} defaultActiveKey={this.state.key} animation={false}>
// 									<Tab eventKey={1} title={<div className="tab">Home</div>}>{screen [this.state.screen]}</Tab>
// 									<Tab eventKey={2} title={<div className="tab">News</div>}>{screen [this.state.screen]}</Tab>
// 									<Tab eventKey={3} title={<div className="tab">Submissions</div>}>{screen [this.state.screen]}</Tab>
// 									<Tab eventKey={4} title={<div className="tab">Archives</div>}>{screen [this.state.screen]}</Tab>
// 									<Tab eventKey={5} title={<div className="tab">About Us</div>}>{screen [this.state.screen]}</Tab>
// 								</Tabs>
		return (
			<div>
				<Panel className="encompass" >
					<div className="header">
						<Row style={{textAlign:"center"}}>
							<Col lg={1} md={12} xs={12} className="bottom-column">
								<img style={{width: "100px"}}id="pen" src="Pictures/pen.png"></img>
							</Col>
							<Col lg={11} md={12} xs={12} className="bottom-column">
								<Row>	
									<Col className="banner" lg={12} md={12} sm={12} xs={12}>
										<h1 ><b id="headTitle">McGill Journal of Medecine</b></h1>
									</Col>
									<Col lg={12} md={12} xs={12}>	
										<Navbar toggleNavKey={0} >
									    <NavBrand><a href="#main" onClick = {this.handleScreen.bind(null,'main')}>Home</a></NavBrand>
									    <Nav className="nana" eventKey={0}>
									      <NavItem eventKey={1} href="#news" onClick = {this.handleScreen.bind(null,'news')}>News</NavItem>
									      <NavItem eventKey={2} href="#submissions" onClick = {this.handleScreen.bind(null,'submissions')}>Submissions</NavItem>
									      <NavDropdown eventKey={3} title="Archives" id="basic-nav-dropdown">
									        <MenuItem eventKey="1" href="#archives" onClick = {this.handleScreen.bind(null,'archives')}>Old Stuff</MenuItem>
									        <MenuItem eventKey="2">Really Old Stuff</MenuItem>
									        <MenuItem eventKey="3">A Canadian discovered insulin</MenuItem>
									        <MenuItem divider />
									        <MenuItem eventKey="4">All</MenuItem>
									      </NavDropdown>	
									      <NavItem eventKey={2} href="#aboutUs" onClick = {this.handleScreen.bind(null,'aboutUs')}>About Us</NavItem>
									    </Nav>
									  </Navbar>
									</Col>	
								</Row>	
							</Col>
						</Row>
						<Row className="main">
							<Col lg={12} md={12} xs={12}>
								{screen [this.state.screen]}
							</Col>	
						</Row>	
					</div>
				</Panel>	
				<Panel className="footer">
					<p>All Copyrights goes to McGill Journal of Medicine ©</p>
				</Panel>
			</div>	
			)
	}

});
ReactDOM.render(<Home/>, document.getElementById('content'));
