import React from 'react';
import { Card, CardBody } from 'reactstrap';

const TeamScore = (props) => {

    const { score } = props;

    return (
        <Card className='bg-dark text-white text-center shadow-lg'>
            <CardBody>
                <h1 className='card-title'>{ score }</h1>
            </CardBody>
        </Card>
    )

}

export default TeamScore