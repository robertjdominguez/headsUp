import React, { Component } from 'react';
import { Card, CardBody, FormGroup, Form, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addPoints } from '../../store/actions/scoreActions'
import { modalPop } from '../../store/actions/reactionActions'
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'


class Controls extends Component {
    constructor(props) {
        super(props);
        this.answerRef = React.createRef();
      }

    // set state
    state = {
        userAnswer: '',
        currentQuestion: 0
    }


    // Check an answer and award points
    handleClick = (e) => {
        if(this.state.userAnswer == this.props.state.level.levelObject.questions[this.state.currentQuestion].answer) {
            // Really needed that plus-1 there...
            if(this.state.currentQuestion + 1 < this.props.state.level.levelObject.questions.length) {
                this.setState({
                    currentQuestion: this.state.currentQuestion + 1,
                    userAnswer: ''
                })
            } else  {
                this.setState({
                    currentQuestion: 0,
                    userAnswer: ''
                })
                this.props.modalPop('bullshit');
                // this.props.history.push("/");
            }

            // TODO: add points!
            this.props.addPoints(e.target.id);
            

        } else {
            // TODO: subtract points ?
        }
        
    }

    // Handler for input into fields
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        this.props.history.push("levels");
    }

    render() {
        const { teams, level } = this.props.state;

        if(level.levelChoice == null) return <Redirect to='/' />

        return (
            <div>
                <div className='row'>
                    <div className='col-sm-12 text-white'>
                        <p>Q: {level.levelObject.questions[this.state.currentQuestion].letter}?</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                            <Card className='my-1 shadow-lg bg-dark text-white'>
                                <CardBody>
                                    <Input type="text" onChange={this.handleChange} ref={this.answerRef} autoComplete='off' className='mb-4' name="userAnswer" id="userAnswer" placeholder="Answer..." value={this.state.userAnswer}/>
                                    <Button color='success' id='teamOneScore' onClick={this.handleClick} className='float-left mx-2'>{teams.teamOne}'s Answer</Button>
                                    <Button color='success' id='teamTwoScore' onClick={this.handleClick} className='float-right mx-2'>{teams.teamTwo}'s Answer</Button>
                                </CardBody>
                            </Card>
                    </div>
                </div>
            </div>
        )
    }
    

}

const mapDispatchToProps = (dispatch) => {
    return {
        addPoints: (team) => dispatch(addPoints(team)),
        modalPop: (level) => dispatch(modalPop(level))
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Controls))