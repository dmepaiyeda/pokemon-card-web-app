import React from "react";
import { Button, Container, Col, Row, Image } from "react-bootstrap";
import cover from "../images/pokemon.jpg";
import BackupButton from "./CreateBackup";
import PurgeButton from "./PurgeBackup";

/**
 * This component creates home page the 
 * Search Backup button
 */

const SearchBackupButton = () => {
    return(
        <Button size="lg" className="home-pg-btn" onClick={(event) => (window.location.href = "/search")}> Search Backup</Button>
    )
}

const HomePage = () => {
  return (
    <div>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <Image className="home-img" fluid src={cover}/>
                <h1 class="display-5">Pokemon Card Backup</h1>
                <p class="lead">This is a web application that backs up pokemon card 
                data and allows you to search pokemon cards</p>
                <p>Pick a button to get started</p>
                <Container>
                    <Row md="auto">
                        <Col md="auto">
                            <BackupButton/>
                        </Col>
                        <Col md="auto">
                            <PurgeButton/>
                        </Col>
                        <Col md="auto">
                            <SearchBackupButton/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    </div>
  );
};

export default HomePage;

