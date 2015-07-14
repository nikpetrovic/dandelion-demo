var data = [
  {author: "Pete Hunt", text: "This is one comment"},
  {author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
	loadCommentsFromServer : function() {
		$.ajax({
			url: this.props.url,
			dataType: "json",
			cache: false,
			success: function(data) {
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	getInitialState: function() {
		return {data: []};
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render: function() {
		return (
				<div className="commentBox">
					<h1>Comments</h1>
					<CommentList data={this.state.data} />
				</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		var commentNodes = this.props.data.map(function(comment) {
			return (
					<Comment author={comment.author}>
						{comment.text}
					</Comment>
			);
		});
		return (
				<div className="commentList">
					{commentNodes}
				</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
				<div className="commentForm">
					<Comment author="Pate Hunt">This is one comment.</Comment>
					<Comment author="Jordan Walke">This is *another* comment.</Comment>
				</div>
		);
	}
});

var Comment = React.createClass({
	render: function() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return (
				<div className="comment">
					<h2 className="commentAuthor">
						{this.props.author}
					</h2>
					<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
				</div>
		);
	}
});

React.render(
		<CommentBox url="json/comments.json" pollInterval={2000} />,
		document.getElementById('example')
);
