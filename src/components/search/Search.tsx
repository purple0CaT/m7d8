import  { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
import "./style.css";

interface MatchParams {
  Squery: string;
}
interface Params extends RouteComponentProps<MatchParams> {
  setQuery: (val: string) => void;
}

function Search({ match, setQuery }: Params) {
  const [Search, setSearch] = useState<any>([]);
  const [Loading, setLoading] = useState(true);
  //
  const fetchSearch = async (value: string) => {
    setLoading(true);
    const url = `${process.env.REACT_APP_URLFETCH}/search?q=${value}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const data: any = await res.json();
        setSearch(data);
        setLoading(false);
      } else {
        setLoading(false);
        alert("Error");
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchSearch(match.params.Squery);
  }, [match.params.Squery]);
  useEffect(() => {
    if (match.params.Squery) {
      setQuery(match.params.Squery);
    }
  }, []);
  return (
    <Container>
      <br />
      <h5 className="text-muted">...search by: {match.params.Squery}</h5>
      <br />
      <Row>
        {!Loading ? (
          Search.data.map((t: any) => (
            <Col xs="12" md="3" className="my-1" key={t.id}>
              <div className="search-card">
                <Link to={`/track/${t.id}`} onClick={() => setQuery("")}>
                  {" "}
                  <img className="w-100" src={t.album.cover_big} alt="" />
                  <div className="card-body">
                    <h6>{t.title}</h6>
                    <div className="d-flex justify-content-between">
                      <span className="text-muted">
                        {" "}
                        <small>Artist: </small>
                        {t.artist.name}
                      </span>
                      <img
                        style={{
                          width: "30px",
                          aspectRatio: "1/1",
                          objectFit: "cover",
                          borderRadius: "50%",
                        }}
                        src={t.artist.picture_medium}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
          ))
        ) : (
          <Spinner animation="border" className="mx-auto" />
        )}
      </Row>
    </Container>
  );
}

export default Search;
