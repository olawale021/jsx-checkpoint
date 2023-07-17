import Card from 'react-bootstrap/Card';

import Price from './Price';
import Description from './Description';
import Name from './Name';
import Images from './image';



function cardsComp() {
    return (
        <Card style={{ width: '18rem' }}>
            <Images />
                <Card.Body>
                    <Card.Title>
                        <Name />
                    </Card.Title>
                    <Card.Text>
                        <Description />
                    </Card.Text>
                    <Card.Text>
                        <Price />
                    </Card.Text>
                </Card.Body>
        </Card>
    );
}

export default cardsComp;