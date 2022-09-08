import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Job from "./Job";

const Favourites = () => {
    const companies = useSelector((state) => state.profile.favourites);

    return (
        <Container>
            <Row>
                <Col>
                    {companies.map((company) => (
                        <Job key={company._id} data={company} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default Favourites;
