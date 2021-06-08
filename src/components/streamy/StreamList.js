import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';

class StreamList extends Component {
	componentDidMount() {
		this.props.fetchStreams();
	}

	renderAdminAccess(stream) {
		if (
			stream.userId === this.props.currentUserId &&
			this.props.isSignedIn
		) {
			return (
				<ListItemSecondaryAction>
					<Button
						style={{ marginRight: '4px' }}
						to={`/streams/edit/${stream.id}`}
						component={Link}
						variant="contained"
						color="primary"
					>
						Editc
					</Button>
					<Button variant="contained" color="secondary">
						Delete
					</Button>
				</ListItemSecondaryAction>
			);
		}
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
						{this.renderAdminAccess(stream)}
					</ListItem>
					<Divider />
				</React.Fragment>
			);
		});
	}

	renderCreateStreamButton() {
		if (this.props.isSignedIn) {
			return (
				<ListItem style={{ marginTop: '30px' }}>
					<ListItemSecondaryAction>
						<Button
							to="/streams/new"
							component={Link}
							style={{ textAlign: 'right' }}
							variant="contained"
							color="primary"
						>
							Create Stream
						</Button>
					</ListItemSecondaryAction>
				</ListItem>
			);
		}
	}

	render() {
		return (
			<List>
				<Typography variant="h5" gutterBottom>
					Streams
				</Typography>
				{this.props.streams.length ? <Divider /> : null}
				{this.renderList()}
				{this.renderCreateStreamButton()}
			</List>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn
	};
};
export default connect(mapStateToProps, { fetchStreams })(StreamList);
