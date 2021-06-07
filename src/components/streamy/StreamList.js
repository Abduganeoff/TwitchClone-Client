import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderList() {
		return this.props.streams.map((stream) => {
			return (
				<React.Fragment key={stream.id}>
					<ListItem>
						<ListItemAvatar>
							<Avatar>
								<OndemandVideoIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText
							primary={stream.title}
							secondary={stream.description}
						/>
					</ListItem>
					<Divider />
				</React.Fragment>
			);
		});
	}

	render() {
		return (
			<List>
				<Typography variant="h5" gutterBottom>
					Streams
				</Typography>
				{this.props.streams.length ? <Divider /> : null}
				{this.renderList()}
			</List>
		);
	}
}

const mapStateToProps = (state) => {
	return { streams: Object.values(state.streams) };
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
