var NEWS=[];
var CAROUSEL=[];
var STAFF=[];
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
$.getJSON( "Data/news.json"+'?'+milliseconds, { cache: false},function() {
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
		CarouselItem=B.CarouselItem,
		Col=B.Col;
		$.ajaxSetup({
			async: false,
			cache: false
		});
		$.getJSON( "Data/pictureCarousel.json"+'?'+milliseconds, {cache: false},function() {})
		.done(function( data ) {
			$.each( data, function( key, val ) {
				var temp="../Pictures/"+val[0]
				CAROUSEL.push([
					<CarouselItem	key={key}>
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

		$.getJSON( "Data/staff.json"+'?'+milliseconds, { cache: false},function() {})
				.done(function( data ) {
						$.each( data, function( key, val ) {


							STAFF.push([
								<Col key={key} lg={6} md={6} sm={12} xs={12} className="staffCol">
									<h3 id="staffTitle">{key}</h3>
									<ul>{val.map(function(el, i){return	<li key={i}>{el}</li>})}</ul>
								</Col>])
						});
					})
				.fail(function() {
					console.log( "error" );
				})
				.always(function() {
				});
	},
	organizeGroups: function(list, rowLength){
		var b = [];var c = [];
		for (var i = 1; i<= list.length;i++){
			b=b.concat(list[i-1])
			if(i%rowLength === 0||i === list.length){
				c = c.concat([b]);  
				b = [];
			}
		}
		console.log(c)
		return c;
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
		var staff=(this.organizeGroups(STAFF, 2)).map(function(el,i) {return <Row key={i} className="staffRow">{el}</Row>})
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
					Not finished.
				</div>
				),
			aboutUs: (
				<div>
					<h1> About Us </h1>
					<p>The McGill Journal of Medicine (MJM) is a scholarly scientific journal providing an international forum for health sciences university students to publish a variety of literature and artwork. Established in May 1994, MJM is published and produced entirely by medical students and graduate students in the Faculty of Medicine at McGill and is driven by principles of student excellence and education. At the outset the MJM was the first student-run medical journal devoted to publish the original research of students exclusively, on an international scale.</p>
					<p>This journal focuses on the disciplines of clinical medical, biomedical sciences as well as issues surrounding medical education and medical ethics. </p>
					<h2>Executive Team</h2>
					{staff}
				</div>
				),
			latestIssue: (
				<div>
					<h1>Latest Issue</h1>
					Not finished.
				</div>
				),
			contactUs: (
				<div>
					<h1> Contact Us</h1>
					Not finished.
				</div>
				),
			represent: (
				<div>
					<h1>Represent the MJM at your university!</h1>
					<p>The MJM’s editorial staff is comprised of students in the Faculty of Medicine at McGill University. Our goal is to publish high-quality work composed by students around the world. If you would like to represent the MJM at your university and help us promote opportunities for students to publish and facilitate discussion between students on the topic of medicine, join our volunteer staff today! </p>
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
								<Row id ="headerText">	
									<Col className="banner" lg={12} md={12} sm={12} xs={12}>
										<h1 ><b id="headTitle">McGill Journal of Medecine</b></h1>
									</Col>
									<Col lg={12} md={12} xs={12}>	
										<Navbar toggleNavKey={0} >
											<NavBrand><a href="#main" onClick = {this.handleScreen.bind(null,'main')}>Home</a></NavBrand>
											<Nav className="nana" eventKey={0}>
												<NavItem eventKey={1} href="#latestIssue" onClick = {this.handleScreen.bind(null,'latestIssue')}>Latest Issue</NavItem>
												<NavItem eventKey={2} href="#news" onClick = {this.handleScreen.bind(null,'news')}>News</NavItem>
												<NavItem eventKey={3} href="#archives" onClick = {this.handleScreen.bind(null,'archives')}>Archives</NavItem>
												<NavItem eventKey={4} href="#aboutUs" onClick = {this.handleScreen.bind(null,'aboutUs')}>About Us</NavItem>
												<NavItem eventKey={5} href="#submissions" onClick = {this.handleScreen.bind(null,'submissions')}>Submissions</NavItem>
												<NavDropdown eventKey={6} title="Contact" id="basic-nav-dropdown">
													<MenuItem eventKey="1" href="#contactUs" onClick = {this.handleScreen.bind(null,'contactUs')}>Contact Us</MenuItem>
													<MenuItem eventKey="2" href="#represent" onClick = {this.handleScreen.bind(null,'represent')}>Become a Representative</MenuItem>
													<MenuItem divider />
													<MenuItem eventKey="4">All</MenuItem>
												</NavDropdown>	
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
