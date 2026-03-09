import React from 'react'; 
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/home.css';
import MovieCard from '../components/MovieCard';

import miniLogo from '../assets/images/mini-logo.png';
import chillLogo from '../assets/images/logo.png'; 
import avatar from '../assets/images/Vector/avatar.png';
import arrowDown from '../assets/images/Vector/arrow-down.png';
import profileIcon from '../assets/images/Vector/profile-ector.jpg';
import starIcon from '../assets/images/Vector/star-vector.png';
import logoutIcon from '../assets/images/Vector/login-vector.png';
import arrowRight from '../assets/images/Vector/arrow-right.png';

const MyList = ({ myList, onRemove, onEdit }) => { 

  return (
    <div className="home-wrapper">
        
        <nav className="navbar">
            <div className="nav-left">
                <div className="logo-container">
                    <Link to="/home" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={miniLogo} alt="Logo Chill" className="logo-mobile" />
                    <img src={chillLogo} alt="Logo Chill" className="logo-desktop" />
                    </Link>
                </div>
                <ul className="nav-menu">
                    <li><Link to="/home">Series</Link></li>
                    <li><Link to="/home">Film</Link></li>
                    <li><Link to="/mylist" className="active-menu">Daftar Saya</Link></li>
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

        <main className="content-wrapper content-padded">            
            <section className="movie-section">
                <h2 className="section-title">Daftar Saya</h2>
                
                {myList.length === 0 ? (
                    <p style={{ color: '#aaa', marginTop: '20px' }}>Belum ada film di Daftar Saya. Ayo tambahkan dari beranda!</p>
                ) : (
                    <div className="movie-grid">
                        {myList.map((item) => (
                            <MovieCard 
                                key={item.title}
                                image={item.image} 
                                title={item.title} 
                                badge={item.badge}
                                isMyList={true}
                                onRemove={() => onRemove(item.title)}
                                onEdit={() => {
                                    const newTitle = prompt("Edit judul film:", item.title);
                                    if (newTitle && newTitle.trim() !== "") {
                                        onEdit(item.title, newTitle);
                                    }
                                }}
                            />
                        ))}
                    </div>
                )}
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

MyList.propTypes = {
  myList: PropTypes.array.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default MyList;