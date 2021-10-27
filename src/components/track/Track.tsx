import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import "./style.css";
interface MatchParams {
  trackId: string;
}

function Track({ match }: RouteComponentProps<MatchParams>) {
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
      <br />
      <Row>
        {!Loading ? (
          <>
            <Col xs="12" md="6" className="px-5">
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
            {/* INFO ARTIST */}
            <Col xs="12" md="6" className="px-5 pt-3">
              <div>
                <div>
                  <div
                    className="d-flex justify-content-between"
                    style={{
                      borderBottom: "1px solid rgba(128, 128, 128, 0.4)",
                    }}
                  >
                    <h4>{Track.title}</h4>
                    <span>
                      <small className="text-muted font-weight-bold">
                        Duration:{" "}
                      </small>
                      0{Math.floor(Track.duration / 60)}:{Track.duration % 60}
                    </span>
                  </div>
                  {/* artist */}
                  <br />
                  <a
                    href={Track.link}
                    className="d-flex justify-content-between align-items-center"
                  >
                    <span className="font-weight-bold">
                      <small className="text-muted font-weight-bold">
                        Artist:{" "}
                      </small>
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
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="font-weight-bold">
                      <small className="text-muted font-weight-bold">
                        Album:{" "}
                      </small>
                      {Track.album.title}
                    </span>
                    <div className="mt-3">
                      <img
                        src={Track.album.cover}
                        alt=""
                        style={{
                          width: "50px",
                          aspectRatio: "1/1",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  </div>
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
        ) : (
          <Spinner animation="border" className='mx-auto'/>
        )}
      </Row>
    </Container>
  );
}

export default Track;
