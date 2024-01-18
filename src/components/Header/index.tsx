import LogoImg from "../../assets/logo-Flow Games.png";
import InstaImg from "../../assets/Instagram-32.svg";
import LinkedinImg from "../../assets/LinkedIn-32.svg";
import YoutubeImg from "../../assets/youtube-32.svg";
import TwitterImg from "../../assets/twitter.svg";
import TikTokImg from "../../assets/tiktok.svg";
import NV99Img from "../../assets/logo_1-1.svg";
import { Container, Content } from "./styles";

export function Header() {
    return(
        <Container>
            <Content>
                <img src={LogoImg} alt="Flow Games" className="logo" />
                <div className="social-media-box">
                    <div className="social-media">
                        <ul>
                            <li>
                            <img src={InstaImg} alt="instagram"/>
                            </li>
                            <li>
                            <img src={LinkedinImg} alt="Linkedin"/>
                            </li>
                            <li>
                            <img src={YoutubeImg} alt="Youtube"/>
                            </li>
                            <li>
                            <img src={TwitterImg} alt="Twitter"/>
                            </li>
                            <li>
                            <img src={TikTokImg} alt="TikTok"/>
                            </li>
                            <li>
                            <img src={NV99Img} alt="NV99"/>
                            </li>
                        </ul>
                    </div>
                    <div className="search-box act">
                        <form role="search" method="get" className="search-form" action="https://flowgames.gg/">
                            <input type="text" autoComplete="off" className="search-field" placeholder="O que você procura?" ></input>
                        </form>
                    </div>
                </div>
                <div className="menu">
                    <nav>
                        <ul id="menu-menu-principal" >
                            <li>Notícias</li>
                            <li>Reviews</li>
                            <li>Games</li>
                            <li>Esports</li>
                            <li>Cultura Pop</li>
                            <li>Podcasts e Vídeos</li>
                            <li>Especiais</li>
                        </ul>
                    </nav>
                </div>
                {/* <button type="button">
                    Botão
                </button> */}
            </Content>
        </Container>
    )
}