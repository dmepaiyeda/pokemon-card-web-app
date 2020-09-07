import React from 'react';
import {Row, Container, Col, Form} from "react-bootstrap";
import DisplayCard from "../components/DisplayCard"

/**
 * This component handles the search functionality by
 * fetching card data from the database, filtering the data 
 * and displaying the filtered results.
 */
class SearchBackup extends React.Component {

    constructor(props){
        super(props);
        this.state={
            cardData: [],
            filterData: [],
        }
    }

    componentDidMount(){
        Promise.all([
            fetch(
                "https://api.pokemontcg.io/v1/cards"
            ),
        ])
        .then((responses) => 
            Promise.all(responses.map((response) => response.json()))
        )
        .then((data) => {
            console.log(data[0].cards);
            this.setState({
                cardData: data[0].cards,
                filterData: data[0].cards,
            });
        })
        .catch((error) => console.log(error));
    }

    filterList = e => {
        const searchTerm = e.target.value.toLowerCase();
        const updatedList = this.state.cardData.filter(cardInfo => 
            (cardInfo.name && cardInfo.name.toLowerCase().includes(searchTerm)) || 
            (cardInfo.rarity && cardInfo.rarity.toLowerCase().includes(searchTerm)) || 
            (cardInfo.hp && cardInfo.hp.includes(searchTerm))
        );

        this.setState({filterData: updatedList});

    };

    render(){
        const searchBox = (
            <div>
                <Form>
                    <Col md={8} sm={5}>
                        <Form.Control className="search-box" type="text" onChange={this.filterList} placeholder="Search for a card"/>
                    </Col>
                </Form>
            </div>
        );

        return(
            <div>
                <h3 className="search-heading"> Pokemon Card Search </h3>
              {searchBox}
                <Container>
                    <Col>
                        <Row>
                            {this.state.filterData.map((value) => {
                                return(
                                    <DisplayCard
                                    imageLink={value && value.imageUrl}
                                    />
                                )
                            })}
                        </Row>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default SearchBackup;