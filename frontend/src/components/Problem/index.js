import React from "react";
import { Card, CardBody, CardTitle, Button } from "reactstrap";

import "./problem.css";

const Problem = ({ id, title, accepted }) => {
    return (
        <div className="problem">
            <Card color="dark" inverse>
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    {/* <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Card subtitle
                    </CardSubtitle> */}
                    {/* <CardText>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </CardText> */}
                    <Button>Open</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default Problem;
