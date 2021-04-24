import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Bahari2, Bahari22, hargasw, perum, perum2, perumahan, sky1, speksw, sw470, sw570 } from '../../assets';
import Footers from '../../components/Footer';
import Sidebars from '../../components/Sidebar';
import './style.css';

class Bahari extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Sidebars/>
                <div className="main">
                    <img src={sky1} alt="bahari" className="responsive-img"/>
                    <h2 style={{textAlign:'center'}}>Bahari Project</h2>
                    <hr/>
                    <div style={{padding:50}}>
                        <h2 style={{textAlign:'center', color:'green'}}>Bahari Tahap 2</h2>
                        <CardGroup>
                            <Card>
                                <Card.Img src={Bahari2} alt="bahari 470" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Bahari Project</Card.Title>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img src={Bahari22} alt="bahari 570" />
                                <Card.Body>
                                    <Card.Title style={{textAlign:'center'}}>Bahari Project</Card.Title>
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
 
export default Bahari;