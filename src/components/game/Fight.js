import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import TeamName from './TeamName'
import TeamScore from './TeamScore'
import Map from './Map'
import Controls from './Controls'
import { connect } from 'react-redux';
import { clearPoints } from '../../store/actions/scoreActions'
import { modalClose } from '../../store/actions/reactionActions'


class Fight extends Component {

      // Set state
    state = {
        scoreOne: 0,
        scoreTwo: 0
    }

    //   toggle() {
    //     this.setState(prevState => ({
    //       modal: !prevState.modal
    //     }));
    //   }

    handleClick = (e) => {
        this.props.clearPoints('bullshit');
        this.props.modalClose('bullshit');
        this.props.history.push('/');
    }

    handleSubmit = (e) => {
        console.log(this.state.scoreOne);
        console.log(this.state.scoreTwo);
    }

  render() {

    const { teams, scores } = this.props.state;

    return (
      <div className='section h-100'>
        <div className='container-fluid'>
            <div className='row my-3'>
            <Modal isOpen={this.props.state.reactions.modal} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Winner!</ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <img className='img img-fluid' src={this.props.state.reactions.winningReaction}/>
                        </div>
                    </div>
                </ModalBody>
                <ModalHeader toggle={this.toggle}>Loser...</ModalHeader>
                <ModalBody>
                    <div className='row'>
                        <div className='col-sm-12 text-center'>
                            <img className='img img-fluid' src={this.props.state.reactions.losingReaction}/>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" className='btn btn-sm'  onClick={this.handleClick}>Play Again</Button>
                </ModalFooter>
            </Modal>
                <div className='col-md-3'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {/* TeamOne NAME component will go here */}
                            <TeamName team={ teams.teamOne }/>
                        </div>
                    </div>
                    <div className='row my-2'>
                        <div className='col-sm-12'>
                            {/* TeamOne score component will go here */}
                            <TeamScore score={ scores.teamOneScore }/>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {/* Map image component will go here */}
                            <Map />
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            {/* TeamTwo NAME component will go here */}
                            <TeamName team={ teams.teamTwo }/>
                        </div>
                    </div>
                    <div className='row my-2'>
                        <div className='col-sm-12'>
                            {/* TeamTwo score component will go here */}
                            <TeamScore score={ scores.teamTwoScore }/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <div className='col-sm-3' />
                <div className='col-sm-6'>
                    {/* The current question info + input and buttons will go here */}
                    <Controls />
                </div>
                <div className='col-sm-3' />
            </div>
        </div>
      </div>
    )
  }
}

// Don't forget to connect the component to the redux store
const mapDispatchToProps = (dispatch) => {
    return {
        clearPoints: (level) => dispatch(clearPoints(level)),
        modalClose: (level) => dispatch(modalClose(level))
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fight);