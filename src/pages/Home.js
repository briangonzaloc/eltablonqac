import React from 'react';
import Advertisements from '../components/Advertisements';
import { Card, ResponsiveEmbed, embed } from 'react-bootstrap';

class Home extends React.Component{
    render(){
        return (
            <React.Fragment>
                
                {/* <Card className="bg-dark text-white">
                    <Card.Img src="https://static.wixstatic.com/media/d255c3_c359b110b81346f0ac618bc8236dcdba~mv2.png/v1/fill/w_857,h_658,al_c,q_85,usm_0.66_1.00_0.01/Vitalicios.webp" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card> */}
                {/*<div className="embed-responsive embed-responsive-16by9">
                  <iframe title="Embeds Page" className="embed-responsive-item" src="https://www.youtube.com/embed/RusuqbhRK_U"
                    allowfullscreen></iframe>
                </div>
*/}
                <div style={{ width: 400, height: 'auto' }}>
                  <ResponsiveEmbed aspect="a16by9">
                    <embed src="https://www.youtube.com/embed/RusuqbhRK_U" />
                  </ResponsiveEmbed>
                </div>
                <Advertisements/>
            </React.Fragment>
        )
    }
}

export default Home;