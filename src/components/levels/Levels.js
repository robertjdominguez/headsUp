import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import levels from './levelMaster'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { levelPicker } from '../../store/actions/levelActions'
import { reactionPicker } from '../../store/actions/reactionActions'


class Levels extends Component {

    // Set state
    state = {
        levelChoice: ''
    }

    

    handleSubmit = (e) => {
        this.props.levelPicker(e.target.id);
        this.props.reactionPicker(e.target.id);
        this.props.history.push("fight");
    }

  render() {
    return (
      <div className='section h-100'>
        <div className='container-fluid'>
            <div className='row'>
                {levels.map(level => {
                    return (
                        <div className='col-sm-4'>
                            <Card className='my-3 zoom'>
                                <CardBody className='shadow-lg'>
                                    <Form onSubmit={this.handleSubmit}>
                                        <FormGroup>
                                            <h4>{level.name}</h4>
                                                <Button color='success' onClick={this.handleSubmit}  id={level.id} className='my-2'>Play This Map</Button>
                                        </FormGroup>
                                    </Form>
                                </CardBody>
                            </Card>     
                    </div>
                    )
                })}
            </div>
        </div>
      </div>
    )
  }
}

// Don't forget to connect the component to the redux store
const mapDispatchToProps = (dispatch) => {
    return {
        levelPicker: (level) => dispatch(levelPicker(level)),
        reactionPicker: (level) => dispatch(reactionPicker())
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Levels);