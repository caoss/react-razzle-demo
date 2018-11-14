import React from 'react';
import DefaultImg from './icon_default.gif';
class HtImage extends React.Component {
    constructor(props){
        super(props);
        this.onError = this.onError.bind(this);
    }
    onError(){
		this.refs.img.src = DefaultImg;
	    return true;
	}
    render(){
		return (
				<img ref="img" onError={this.onError} src={this.props.src ? this.props.src : DefaultImg}>
				</img>
			)
	}
}

export default HtImage;
