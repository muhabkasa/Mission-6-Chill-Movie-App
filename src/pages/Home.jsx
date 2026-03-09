import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import MovieCard from '../components/MovieCard';

import miniLogo from '../assets/images/mini-logo.png';
import chillLogo from '../assets/images/logo.png'; 
import avatar from '../assets/images/Vector/avatar.png';
import arrowDown from '../assets/images/Vector/arrow-down.png';
import profileIcon from '../assets/images/Vector/profile-ector.jpg';
import starIcon from '../assets/images/Vector/star-vector.png';
import logoutIcon from '../assets/images/Vector/login-vector.png';
import infoIcon from '../assets/images/Vector/Vector Info.png';
import volumeIcon from '../assets/images/Vector/vector-volume.png';
import arrowRight from '../assets/images/Vector/arrow-right.png';

import dutyPoster2 from '../assets/images/Poster/duty-after-school2.png';
import dontLookUp from '../assets/images/Poster/dont-look-up.png';
import allOfUs from '../assets/images/Poster/all-of-us-are-dead.png';
import blueLock from '../assets/images/Poster/blue-lock.png';
import otto from '../assets/images/Poster/a-man-called-otto.png';
import suzume from '../assets/images/Poster/callmebyyourname.png';
import jurassic from '../assets/images/Poster/jurassicworld.png';
import allOfUs2 from '../assets/images/Poster/all-of-us-are-dead-2.png';
import antMan from '../assets/images/Poster/ant-man-quantumania.png';
import sonic from '../assets/images/Poster/sonic.png';
import tomorrow from '../assets/images/Poster/the-tomorrow-war.png';
import missing from '../assets/images/Poster/missing.png';
import bigHero from '../assets/images/Poster/bighero6.png';
import mermaid from '../assets/images/Poster/littlemermaid.png';
import guardian from '../assets/images/Poster/guardians-of-the-galaxy-vol-3.png';
import ottov from '../assets/images/Poster/a-man-called-otto-ver.png';
import avatar2 from '../assets/images/Poster/avatar-land.png';
import alice from '../assets/images/Poster/alice-ver.png';
import megan from '../assets/images/Poster/megan-ver.png';
import spider from '../assets/images/Poster/spider-ver.png';

const Home = ({ onAdd }) => {
  return (
    <div className="home-wrapper">
        
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo-container">
                    <img src={miniLogo} alt="Logo Chill" className="logo-mobile" />
                    <img src={chillLogo} alt="Logo Chill" className="logo-desktop" />
                </div>
                <ul className="nav-menu">
                    <li><a href="#!">Series</a></li>
                    <li><a href="#!">Film</a></li>
                    <li><Link to="/mylist">Daftar Saya</Link></li>
                </ul>
            </div>
            
            <div className="nav-right"> 
                <div className="avatar-container">
                    <img src={avatar} alt="Avatar" className="avatar-img" /> 
                    <img src={arrowDown} alt="arrow" className="arrow-icon" />
                </div>

                <div className="dropdown-menu">
                    <div className="menu-item">
                        <img src={profileIcon} alt="Profil" className="menu-icon" />
                        <span>Profil Saya</span>
                    </div>
                    <div className="menu-item">
                        <img src={starIcon} alt="Premium" className="menu-icon" />
                        <span>Ubah Premium</span>
                    </div>
                    <div className="menu-item">
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <img src={logoutIcon} alt="Keluar" className="menu-icon" />
                            <span>Keluar</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

        <main className="content-wrapper">
            <section className="hero">
                <div className="hero-info">
                    <h1 className="hero-title">Duty After School</h1>
                    <p className="hero-desc">
                        Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
                    </p>
                    <div className="hero-actions">
                        <div className="action-buttons">
                            <button className="btn-mulai">Mulai</button>
                            <button className="btn-selengkapnya">
                                <img src={infoIcon} alt="" /> Selengkapnya
                            </button>
                            <span className="badge-age">18+</span>
                        </div>

                        <div className="hero-meta">
                            <div className="btn-volume">
                                <img src={volumeIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="movie-section">
                <h2 className="section-title">Melanjutkan Tonton Film</h2>
                <div className="movie-scroll">
                    <MovieCard image={dontLookUp} title="Don't Look Up" variant="card-landscape" rating="★ 4.5/5" onAdd={() => onAdd({ image: dontLookUp, title: "Don't Look Up", variant: "card-landscape", rating: "★ 4.5/5" })} />
                    <MovieCard image={allOfUs} title="All of Us Are Dead" variant="card-landscape" rating="★ 4.0/5" onAdd={() => onAdd({ image: allOfUs, title: "All of Us Are Dead", variant: "card-landscape", rating: "★ 4.0/5" })} />
                    <MovieCard image={blueLock} title="Blue Lock" variant="card-landscape" rating="★ 4.8/5" onAdd={() => onAdd({ image: blueLock, title: "Blue Lock", variant: "card-landscape", rating: "★ 4.8/5" })} />
                    <MovieCard image={otto} title="A Man Called Otto" variant="card-landscape" rating="★ 4.4/5" onAdd={() => onAdd({ image: otto, title: "A Man Called Otto", variant: "card-landscape", rating: "★ 4.4/5" })} />
                    <MovieCard image={avatar2} title="Avatar: Way of Water" variant="card-landscape" rating="★ 4.9/5" onAdd={() => onAdd({ image: avatar2, title: "Avatar: Way of Water", variant: "card-landscape", rating: "★ 4.9/5" })} />
                </div>
            </section>

            <section className="movie-section">
                <h2 className="section-title">Top Rating Film dan Series Hari ini</h2>
                <div className="movie-scroll">
                    <MovieCard image={suzume} title="Suzume" badge="Episode Baru" onAdd={() => onAdd({ image: suzume, title: "Suzume", badge: "Episode Baru" })} />
                    <MovieCard image={jurassic} title="Jurassic World" onAdd={() => onAdd({ image: jurassic, title: "Jurassic World" })} />
                    <MovieCard image={sonic} title="Sonic 2" onAdd={() => onAdd({ image: sonic, title: "Sonic 2" })} />
                    <MovieCard image={allOfUs} title="All Of Us Are Dead" onAdd={() => onAdd({ image: allOfUs, title: "All Of Us Are Dead" })} />
                    <MovieCard image={bigHero} title="Big Hero 6" onAdd={() => onAdd({ image: bigHero, title: "Big Hero 6" })} />
                    <MovieCard image={alice} title="Alice in Borderland" badge="Episode Baru" onAdd={() => onAdd({ image: alice, title: "Alice in Borderland", badge: "Episode Baru" })} />
                </div>
            </section>
            
            <section className="movie-section">
                <h2 className="section-title">Film Trending</h2>
                <div className="movie-scroll">
                    <MovieCard image={tomorrow} title="The Tomorrow War" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: tomorrow, title: "The Tomorrow War", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={antMan} title="Ant-Man Quantumania" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: antMan, title: "Ant-Man Quantumania", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={guardian} title="Guardians Vol. 3" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: guardian, title: "Guardians Vol. 3", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={ottov} title="A Man Called Otto" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: ottov, title: "A Man Called Otto", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={mermaid} title="Little Mermaid" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: mermaid, title: "Little Mermaid", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={spider} title="Spider-Man" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: spider, title: "Spider-Man", variant: "trending-card", badge: "Top 10" })} />
                </div>
            </section>

            <section className="movie-section">
                <h2 className="section-title">Rilis Baru</h2>
                <div className="movie-scroll">
                    <MovieCard image={mermaid} title="Little Mermaid" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: mermaid, title: "Little Mermaid", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={dutyPoster2} title="Duty After School" variant="trending-card" badge="Episode Baru" onAdd={() => onAdd({ image: dutyPoster2, title: "Duty After School", variant: "trending-card", badge: "Episode Baru" })} />
                    <MovieCard image={bigHero} title="Big Hero 6" variant="trending-card" badge="Top 10" onAdd={() => onAdd({ image: bigHero, title: "Big Hero 6", variant: "trending-card", badge: "Top 10" })} />
                    <MovieCard image={allOfUs2} title="All Of Us S2" variant="trending-card" badge="Episode Baru" onAdd={() => onAdd({ image: allOfUs2, title: "All Of Us S2", variant: "trending-card", badge: "Episode Baru" })} />
                    <MovieCard image={missing} title="Missing" variant="trending-card" onAdd={() => onAdd({ image: missing, title: "Missing", variant: "trending-card" })} />
                    <MovieCard image={megan} title="Megan" variant="trending-card" onAdd={() => onAdd({ image: megan, title: "Megan", variant: "trending-card" })} />
                </div>
             </section>

            <footer className="main-footer">
                <div className="footer-container">
                    <div className="footer-brand">
                        <img src={chillLogo} alt="Chill Logo" className="footer-logo" />
                        <span className="footer-copy">@2023 Chill All Rights Reserved.</span>
                    </div>
                    
                    <div className="footer-links-desktop">
                        <div className="footer-column">
                            <span className="footer-title">Genre</span>
                            <div className="genre-grid">
                                <div className="genre-item">Aksi</div>
                                <div className="genre-item">Anak-anak</div>
                                <div className="genre-item">Anime</div>
                                <div className="genre-item">Britania</div>
                                <div className="genre-item">Drama</div>
                                <div className="genre-item">Fantasi Ilmiah & Fantasi</div>
                                <div className="genre-item">Kejahatan</div>
                                <div className="genre-item">KDrama</div>
                                <div className="genre-item">Komedi</div>
                                <div className="genre-item">Petualangan</div>
                                <div className="genre-item">Perang</div>
                                <div className="genre-item">Romantis</div>
                                <div className="genre-item">Sains & Alam</div>
                                <div className="genre-item">Thriller</div>
                            </div>
                        </div>
                        <div className="footer-column">
                            <span className="footer-title">Bantuan</span>
                            <div className="bantuan-list">
                                <div className="footer-item">FAQ</div>
                                <div className="footer-item">Kontak Kami</div>
                                <div className="footer-item">Privasi</div>
                                <div className="footer-item">Syarat & Ketentuan</div>
                            </div>
                        </div>
                    </div>

                    <div className="footer-links-mobile">
                        <div className="footer-mobile-row">
                            <span>Genre</span>
                            <img src={arrowRight} alt="arrow" />
                        </div>
                        <div className="footer-mobile-row">
                            <span>Bantuan</span>
                            <img src={arrowRight} alt="arrow" />
                        </div>
                    </div>
                </div>
            </footer>

        </main>
    </div>
  );
};

export default Home;