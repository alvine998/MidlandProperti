import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Bahari2, Bahari22, hargasw, papanggo1, papanggo2, perum, perum2, perumahan, speksw, sw470, sw570 } from '../../assets';
import Footers from '../../components/Footer';
import Sidebars from '../../components/Sidebar';
import './style.css';

class Papanggo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Sidebars/>
                <div className="main">
                    <img src={perum2} alt="bahari" className="responsive-img"/>
                    <h2 style={{textAlign:'center'}}>Mini Town House : Papanggo Project</h2>
                    <hr/>
                    <div style={{padding:50}}>
                        <h2 style={{textAlign:'center', color:'green'}}>Papanggo Tahap 1</h2>
                        <CardGroup>
                            <Card>
                                <Card.Img src={papanggo1} alt="papanggo 470" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Papanggo Project</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={papanggo2} alt="papanggo 570" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Papanggo Project</Card.Title>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>

                    <Footers/>
                </div>
            </div>
         );
    }
}
 
export default Papanggo;