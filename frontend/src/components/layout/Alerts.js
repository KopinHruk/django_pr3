import React, {Component, Fragment} from 'react'
import {withAlert} from 'react-alert';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
	static propTypes = {
		error: PropTypes.object.isRequired,
		message: PropTypes.object.isRequired
	}


	componentDidUpdate(prevProps) {
		if(this.props.error !== prevProps.error){
			if(this.props.error.msg.name){
				this.props.alert.error(`Name: ${this.props.error.msg.name.join()}`);
			}
			if(this.props.error.msg.email){
				this.props.alert.error(`Email: ${this.props.error.msg.email.join()}`);
			}
			if(this.props.error.msg.message){
				this.props.alert.error(`Email: ${this.props.error.msg.message.join()}`);
			}
		}
		if(this.props.message !== prevProps.message){
			if(this.props.message.deleteLead){
				this.props.alert.success(this.props.message.deleteLead);
			}
			if(this.props.message.addLead){
				this.props.alert.success(this.props.message.addLead);
			}
		}
	}

	render() {
		return 	<Fragment/>;
	}
}
const mapStateToProps = state => ({
	error: state.errors,
	message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));