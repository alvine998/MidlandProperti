import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { hargasw, perum2, perumahan, sky1, speksw, sw470, sw570 } from '../../assets';
import Sidebars from '../../components/Sidebar';
import './style.css';

class Swasembada extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Sidebars/>
                <div className="main">
                    <img src={sky1} alt="swasembada" className="responsive-img"/>
                    <h2 style={{textAlign:'center'}}>Swasembada Project</h2>
                    <hr/>
                    <div style={{padding:50}}>
                        <h2 style={{textAlign:'center', color:'blue'}}>Swasembada Tahap 2</h2>
                        <CardGroup>
                            <Card>
                                <Card.Img src={sw470} alt="swasembada 470" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Swasembada 4x10</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={sw570} alt="swasembada 570" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Swasembada 5x10</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardGroup>

                        <CardGroup>
                            <Card>
                                <Card.Img src={speksw} alt="swasembada spesifikasi" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Spesifikasi Swasembada</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={hargasw} alt="harga" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>List Harga Swasembada</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Swasembada;