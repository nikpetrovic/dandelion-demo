var Button = ReactBootstrap.Button,
		Grid = ReactBootstrap.Grid,
		Row = ReactBootstrap.Row,
		Col = ReactBootstrap.Col;

var App = React.createClass({
	render: function() {
		return(
				<Grid>
					<ButtonGroup />
				</Grid>
		);
	}
});

var ButtonGroup = React.createClass({
	render: function() {
		return(
				<Grid>
					<Row className="showGrid">
						<Col xs={2}>
							<Button block>Button</Button>
						</Col>
						<Col xs={2}>
							<Button bsStyle="primary" block>Button</Button>
						</Col>
						<Col xs={2}>
							<Button bsStyle="success" block>Button</Button>
						</Col>
						<Col xs={2}>
							<Button bsStyle="danger" block>Button</Button>
						</Col>
						<Col xs={2}>
							<Button bsStyle="warning" block>Button</Button>
						</Col>
						<Col xs={2}>
							<Button bsStyle="info" block>Button</Button>
						</Col>
					</Row>
				</Grid>
		);
	}
});

React.render(<App />, document.getElementById('example'));