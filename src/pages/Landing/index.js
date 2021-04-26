import React, { Component } from 'react';
import Sidebars from '../../components/Sidebar';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Instagram from '@material-ui/icons/Instagram';
import YouTube from '@material-ui/icons/YouTube';
import { CardDeck, Card, CardGroup, Carousel } from 'react-bootstrap';
import './style.css';
import Footers from '../../components/Footer';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

// import image
import {
	home1,
	logo,
	perum,
	perum2,
	perumahan,
	pricelist,
	promo1,
	banner3m,
	sw470,
	sw570,
	warakas300,
	warakas500,
	award1
} from '../../assets';
import StickyWhatsapp from '../../components/Whatsapp';
import axios from 'axios';
import ArtikelDataService from '../../services/artikel.service';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.retriveArtikel = this.retriveArtikel.bind(this);
	}

	retriveArtikel() {
		ArtikelDataService.getAll()
			.then((res) => {
				this.setState({
					artikel: res.data
				});
				console.log(res.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}

	componentDidMount() {
		// this.retriveArtikel();
	}

	render() {
		return (
			<div>
				<Sidebars />
				<div class="main">
					<StickyWhatsapp />
					{/* <img
						className="responsive-img"
						src={home1}
						alt="banner"
						// style={{ height: 660, width: "100%" }}
					/> */}
					{/* <h2 style={{ textAlign: "center" }}>PROMO</h2>
          <div className="padd">
            <CardDeck>
              <Card>
                <Card.Img variant="top" src={perumahan} />
                <Card.Body>
                  <Card.Title>Swasembada Residence</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={perumahan} />
                <Card.Body>
                  <Card.Title>Priok Permai</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant="top" src={perumahan} />
                <Card.Body>
                  <Card.Title>Grand Bekasi</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div> */}

					{/* Ini News */}
					{/* <div style={{ paddingTop: 20, paddingBottom: 20 }}>
            <h2 style={{ textAlign: "center" }}>BERITA</h2>
            <div style={{ padding: 20 }}>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={perumahan} />
                  <Card.Body>
                    <Card.Title>Grand Bekasi</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={perumahan} />
                  <Card.Body>
                    <Card.Title>Grand Bekasi</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src={perumahan} />
                  <Card.Body>
                    <Card.Title>Grand Bekasi</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </Card.Footer>
                </Card>
              </CardDeck>
            </div>
          </div> */}

					{/* Carousel Promo */}
					<div style={{ paddingTop: 0 }}>
						{/* <div style={{ paddingBottom: 20 }}>
							<h2 style={{ textAlign: 'center' }}>INFORMATION</h2>
						</div> */}
						<Carousel interval={2000}>
							<Carousel.Item>
								<img className="d-block w-100" src={promo1} alt="First slide" style={{ height: 900 }} />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={pricelist}
									alt="First slide"
									style={{ height: 900 }}
								/>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={award1} alt="First slide" style={{ height: 900 }} />
								<Carousel.Caption>
									<h3>The Golden Award 2021</h3>
									<h3 style={{color:'white'}}>Midland Property Terpilih sebagai #1 Best Of The Best di Tahun 2021</h3>
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100 okImage" src={banner3m} alt="First slide" />
							</Carousel.Item>
						</Carousel>
					</div>

					{/* Project card */}
					<div style={{ paddingTop: 20, paddingBottom: 20 }}>
						<h2 style={{ textAlign: 'center' }}>OUR PROJECT</h2>

						<div style={{ padding: 20 }}>
							<center style={{ paddingBottom: 20 }}>
								<a href="/" style={{ fontSize: 24, color: 'green' }}>
									Warakas
								</a>
							</center>
							<CardGroup>
								<Card>
									<Card.Img id="myImg" variant="top" src={warakas300} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas 3x9,5</Card.Title>
									</Card.Body>
								</Card>
								<Card>
									<Card.Img variant="top" src={warakas500} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas 5x10</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
						</div>
						<center style={{ paddingTop: 20, paddingBottom: 20 }}>
							<a className="toblue" href="/ourproject/warakas" style={{ fontSize: 24, color: 'black' }}>
								Lihat Project Lainnya
							</a>
						</center>
						<hr/>

						<div style={{ padding: 20 }}>
							<center style={{ paddingBottom: 20 }}>
								<a href="/" style={{ fontSize: 24 }}>
									Swasembada
								</a>
							</center>
							<CardGroup>
								<Card>
									<Card.Img id="myImg" variant="top" src={sw470} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Swasembada 4x10</Card.Title>
									</Card.Body>
								</Card>
								<Card>
									<Card.Img variant="top" src={sw570} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Swasembada 5x10</Card.Title>
									</Card.Body>
								</Card>
							</CardGroup>
						</div>

						<center style={{ paddingTop: 20, paddingBottom: 20 }}>
							<a className="toblue" href="/ourproject/swasembada" style={{ fontSize: 24, color: 'black' }}>
								Lihat Project Lainnya
							</a>
						</center>
					</div>

					{/* Ini Footer */}
					<Footers />
				</div>
			</div>
		);
	}
}

export default Landing;
