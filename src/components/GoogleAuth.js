import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

class GoogleAuth extends Component {
	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId:
						'698472229851-cc67v45sreiuj9gjs8hrjhhnovq19lkv.apps.googleusercontent.com',
					scope: 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn(this.auth.currentUser.get().getId());
		} else {
			this.props.signOut();
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<Button
					onClick={this.onSignOutClick}
					variant="contained"
					color="secondary"
					startIcon={<VpnKeyIcon />}
				>
					Sign Out
				</Button>
			);
		} else {
			return (
				<Button
					onClick={this.onSignInClick}
					variant="contained"
					color="secondary"
					startIcon={<VpnKeyIcon />}
				>
					Sign In
				</Button>
			);
		}
	}
	render() {
		return <div> {this.renderAuthButton()}</div>;
	}
}
const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
