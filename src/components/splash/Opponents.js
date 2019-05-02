import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';
import { connect } from 'react-redux';
import { teamNames } from '../../store/actions/teamActions'


class Opponents extends Component {

    // Set state
    state = {
        teamOne: '',
        teamTwo: ''
    }

    // Handler for input into fields
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {
        this.props.teamNames(this.state);
        console.log(this.props);
        this.props.history.push("levels");
    }

  render() {

    const style = {
        minHeight: 600
    }

    return (
      <div className='section h-100'>
        <div className='container'>
            <div className='row align-items-center' style={style}>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Card className='my-3'>
                            <CardBody className='shadow-lg'>
                                <Label for="teamOne">Opponent One</Label>
                                <Input type="text" onChange={this.handleChange} className='mb-4' autoComplete='off'  name="teamOne" id="teamOne" placeholder="Enter name" />
                                <Label for="teamTwo">Opponent Two</Label>
                                <Input type="text" onChange={this.handleChange} autoComplete='off' name="teamTwo" id="teamTwo" placeholder="Enter name" />
                                
                                <Button color='success' className='float-right my-2'>Level Select >></Button>
                            </CardBody>
                        </Card>
                    </FormGroup>
                    </Form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
      </div>
    )
  }
}


// Don't forget to connect the component to the redux store
const mapDispatchToProps = (dispatch) => {
    return {
        // This makes this method available via props to the component
        // so, we can call `this.createProject` in the component and 
        // it will accept the `project` object we've created and then
        // pass it into the dispatch method which is calling `createProject`
        // from our `projectActions` file
        teamNames: (teams) => dispatch(teamNames(teams))
    }
}
// Null is passed in as the first parameter because it should be
// `mapStateToProps` but that's not needed here. For a component
// that needs to pass in state, this would NOT be null.
export default connect(null, mapDispatchToProps)(Opponents)