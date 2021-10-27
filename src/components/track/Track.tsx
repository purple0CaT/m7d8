import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import "./style.css";
interface MatchParams {
  trackId: string;
}
interface Props extends RouteComponentProps<MatchParams> {}

function Track({ match }: Props) {
  const [Track, setTrack] = useState<any>({});
  const [Loading, setLoading] = useState<boolean>(true);
  //
  const fetchTrack = async (val: string) => {
    setLoading(true);
    const url = `${process.env.REACT_APP_URLFETCH}/track/${match.params.trackId}`;
    const res = await fetch(url);
    if (res.ok) {
      const track = await res.json();
      setTrack(track);
      setLoading(false);
    } else {
      setLoading(false);
    }
    try {
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  //
  useEffect(() => {
    fetchTrack(match.params.trackId);
  }, []);
  return (
    <Container>
      <br />
      <Row>
        {!Loading && (
          <>
            <Col xs="12" md="6" className="p-5">
              <img
                src={Track.album.cover_big}
                alt=""
                style={{
                  width: "100%",
                  aspectRatio: "1/1",
                  borderRadius: "20px",
                  boxShadow: "0 5px 10px grey",
                }}
              />
            </Col>
            <Col xs="12" md="6" className="p-5">
              <div>
                <div>
                  <h5>{Track.title}</h5>
                  <a
                    href={Track.link}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span>
                      <small className="text-muted">Artist: </small>
                      {Track.artist.name}
                    </span>
                    <div>
                      <img
                        src={Track.artist.picture}
                        alt=""
                        style={{
                          width: "50px",
                          aspectRatio: "1/1",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </a>
                </div>
                <br />
                <div className="w-100">
                  <audio
                    className="w-100 audioP"
                    controls
                    src={Track.preview}
                  ></audio>
                </div>
              </div>{" "}
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Track;
