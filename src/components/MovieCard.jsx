import React from 'react';
import arrowDown from '../assets/images/Vector/arrow-down.png';

const MovieCard = ({ image, title, variant, rating, badge, onAdd, onRemove, isMyList }) => {
  return (
    <div className={`movie-card ${variant || ''}`}>
      {badge === 'Top 10' && <div className="top-10-badge">Top 10</div>}
      {badge === 'Episode Baru' && <div className="badge-episode">Episode Baru</div>}

      <img src={image} alt={title} className="card-image" />
      
      <div className="card-overlay">
        <span>{title}</span>
        {rating && <span>{rating}</span>}
      </div>

      <div className="hover-data">
        <div className="hover-actions">
          <div className="left-actions">
            <button className="btn-icon-play">▶</button>
            
            {isMyList ? (
              <button className="btn-icon-add" onClick={onRemove} style={{ color: '#E71414', borderColor: '#E71414' }}>
                ✖
              </button>
            ) : (
              <button className="btn-icon-add" onClick={onAdd}>
                ✔
              </button>
            )}

          </div>
          <button className="btn-icon-more">
            <img src={arrowDown} alt="More" style={{ width: '15px', height: 'auto', filter: 'brightness(0) invert(1)' }} />
          </button>
        </div>

        <div className="hover-meta">
          <span className="meta-age">13+</span>
          <span className="meta-duration">2j 15m</span>
        </div>

        <div className="hover-genres">
          <span>Misteri</span>
          <span className="dot">•</span>
          <span>Kriminal</span>
          <span className="dot">•</span>
          <span>Fantasi</span>
        </div>
      </div>

    </div>
  );
};

export default MovieCard;