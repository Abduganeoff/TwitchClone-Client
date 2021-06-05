import React, { Component } from 'react';
import GoogleAuth from './GoogleAuth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { withStyles } from '@material-ui/styles';

const styles = {
	header_right: {
		display: 'flex',
		justifyContent: 'space-around'
	},
	header_auth: {
		marginLeft: '15px'
	}
};

class Header extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<AppBar>
					<Toolbar>
						<Typography variant="h6">Streamy</Typography>
						<ListItemSecondaryAction
							className={classes.header_right}
						>
							<Typography variant="h6">All Streams</Typography>
							<div className={classes.header_auth}>
								<GoogleAuth />
							</div>
						</ListItemSecondaryAction>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles)(Header);
