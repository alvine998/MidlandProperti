import React, { Component } from 'react';
import Sidebars from '../../components/Sidebar';
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
	award1,
	warakasdepan,
	warakasbelakang
} from '../../assets';
import StickyWhatsapp from '../../components/Whatsapp';
import axios from 'axios';
import ArtikelDataService from '../../services/artikel.service';

class Landing extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image1:'https://lh3.google.com/u/0/d/1WUfckD67lR5QYmdoIsNZa9Trd3_2LpAw=w1366-h625-iv1',
			image2:'https://lh3.google.com/u/0/d/12HtT0EbgTxB97XOI15ztcQX0ZuNn9xPI=w1366-h625-iv1',
			image3:'https://lh3.google.com/u/0/d/1vZo70AT-vaA0CYx3YFs4tFM7pVgQdzdL=w1366-h625-iv1',
			image4:'https://lh3.google.com/u/0/d/103KgLBo9mvknEf9OjAh7P8Gnb9HSjYiW=w1366-h625-iv1'
		};
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
								<img className="d-block w-100" src={this.state.image1} alt="First slide" style={{ height: 900 }} />
							</Carousel.Item>
							<Carousel.Item>
								<img
									className="d-block w-100"
									src={this.state.image3}
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
									<Card.Img id="myImg" variant="top" src={this.state.image1} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas Tahap 7</Card.Title>
									</Card.Body>
								</Card>
								<Card>
									<Card.Img variant="top" src={this.state.image2} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Warakas Tahap 7</Card.Title>
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
									<Card.Img id="myImg" variant="top" src={this.state.image3} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Swasembada Tahap 4</Card.Title>
									</Card.Body>
								</Card>
								<Card>
									<Card.Img variant="top" src={this.state.image4} style={{ height: 700 }} />
									<Card.Body>
										<Card.Title style={{textAlign:'center'}}>Swasembada Tahap 4</Card.Title>
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
