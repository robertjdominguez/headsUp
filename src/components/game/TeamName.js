import React from 'react';
import { Card, CardBody } from 'reactstrap';

const TeamName = (props) => {

    const { team } = props;

    return (
        <Card className='bg-dark text-white text-center shadow-lg'>
            <CardBody>
                <h3 className='card-title'>{ team }</h3>
            </CardBody>
        </Card>
    )

}

export default TeamName