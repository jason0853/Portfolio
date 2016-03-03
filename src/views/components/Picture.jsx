var React = require('react');

var Picture = React.createClass({

	render: function() {

		return (
			<div className="row pictureLIst">
			{this.props.images.map(function (image) {
				return (
					<div className="col-xs-12 col-sm-4">
					    	<a className="thumbnail no-padding">
					     		<img src={image.koreatcs} alt="" width="100%" />
					    	</a>
					</div>
				);
			})}
			</div>
		);
	}

});

module.exports = Picture;