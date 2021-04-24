import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { hargawar, perum2, sky1, spek300, warakas300, warakas4, warakas4_2, warakas500, warakasbelakang, warakasdepan } from '../../assets';
import Footers from '../../components/Footer';
import Sidebars from '../../components/Sidebar';
import './style.css';

class Warakas extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Sidebars/>
                <div className="main">
                    <img
                        src={sky1}
                        alt="Warakas"
                        className="responsive-img"
                    />

                    <h2 style={{textAlign:'center'}}>Warakas Project</h2>
                    <hr/>
                    <div style={{padding:50}}>
                        <h2 style={{textAlign:'center', color:'green'}}>Warakas Tahap 2</h2>
                        <CardGroup>
                            <Card>
                                <Card.Img src={warakas300} alt="warakas 300"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas 4x9,5</Card.Title>
								</Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={warakas500} alt="warakas 500"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas 5x10</Card.Title>
								</Card.Body>
                            </Card>
                        </CardGroup>
                        <CardGroup>
                            <Card>
                                <Card.Img src={spek300} alt="warakas spesifikasi"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Spesifikasi</Card.Title>
								</Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={hargawar} alt="warakas harga"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>List Harga</Card.Title>
								</Card.Body>
                            </Card>
                        </CardGroup>
                    </div>

                    <hr/>
                    <div style={{padding:50}}>
                        <h2 style={{textAlign:'center', color:'red'}}>Warakas Tahap 3</h2>
                        <CardGroup>
                            <Card>
                                <Card.Img src={warakasdepan} alt="warakas 300"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas Tahap 3</Card.Title>
								</Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={warakasbelakang} alt="warakas 500"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas Tahap 3</Card.Title>
								</Card.Body>
                            </Card>
                        </CardGroup>
                    </div>

                    <hr/>
                    <div style={{padding:50, paddingBottom:50}}>
                        <h2 style={{textAlign:'center', color:'gray'}}>Warakas Tahap 4</h2>
                        <CardGroup>
                            <Card>
                                <Card.Img src={warakas4} alt="warakas 300"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas Tahap 4</Card.Title>
								</Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={warakas4_2} alt="warakas 500"  />
                                <Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas Tahap 4</Card.Title>
								</Card.Body>
                            </Card>
                        </CardGroup>
                    </div>

                    {/* footer */}
                    <Footers/>
                </div>
            </div>
         );
    }
}
 
export default Warakas;