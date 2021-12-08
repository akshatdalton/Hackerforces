import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import "./problemcard.css";

const ProblemCard = ({ id, name, code }) => {
    return (
        <div className="problem">
            <Card color="dark" inverse>
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        {code}
                    </CardSubtitle>
                    {/* <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </CardText> */}
                    <Button href={"problems/" + id}>Open</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default ProblemCard;
