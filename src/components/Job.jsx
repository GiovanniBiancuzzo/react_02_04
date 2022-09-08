import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Job = ({ data }) => {
    const dispatch = useDispatch();
    const [favourited, setFavourited] = useState(false);

    return (
        <Row
            className="mx-0 mt-3 p-3"
            style={{ border: "1px solid #00000033", borderRadius: 4 }}
        >
            <Col xs={1}>
                {!favourited ? (
                    <BsHeart
                        onClick={() => {
                            console.log(
                                "set 'preferito',dispatch aggiungi preferiti e cambio icona"
                            );
                            setFavourited(!favourited);
                            dispatch({
                                type: "ADD_TO_FAVOURITES",
                                payload: data,
                            });
                        }}
                    />
                ) : (
                    <BsHeartFill
                        onClick={() => {
                            console.log(
                                "set 'non preferito', dispatch rimuovi preferiti e cambio icona"
                            );
                            setFavourited(!favourited);
                            dispatch({
                                type: "DELETE_FROM_FAVOURITES",
                                payload: data.company_name,
                            });
                        }}
                    />
                )}
            </Col>
            <Col xs={3}>
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={8}>
                <a href={data.url} target="_blank" rel="noreferrer">
                    {data.title}
                </a>
            </Col>
        </Row>
    );
};

export default Job;
