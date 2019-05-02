import React, { Component } from 'react';
import { Card, CardBody, Media } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Map extends Component {
    constructor(props) {
        super(props);
      }

    render() {

        if(this.props.state.level.levelChoice == null) return <Redirect to='/' />
        
        const imgStyle = {
            maxWidth: 600,
        }

        return (
            <Card className='bg-dark text-white text-center shadow-lg'>
                <CardBody>
                    <img className='img img-fluid' style={imgStyle} src={this.props.state.level.levelObject.path} alt={this.props.state.level.levelObject.name} />
                </CardBody>
            </Card>
        )
    
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, null)(Map)