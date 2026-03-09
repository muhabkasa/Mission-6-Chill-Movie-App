import React from 'react';
import PropTypes from 'prop-types';
import arrowDown from '../assets/images/Vector/arrow-down.png';

const MovieCard = ({ image, title, variant, rating, badge, onAdd, onRemove, isMyList, onEdit }) => {
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
              <>
                <button className="btn-icon-add" onClick={onEdit} style={{ color: '#F39C12', borderColor: '#F39C12', marginRight: '8px' }}>
                  ✏️
                </button>
                <button className="btn-icon-add" onClick={onRemove} style={{ color: '#E71414', borderColor: '#E71414' }}>
                  ✖
                </button>
              </>
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

MovieCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  rating: PropTypes.string,
  badge: PropTypes.string,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  isMyList: PropTypes.bool,
  onEdit: PropTypes.func,
};

export default MovieCard;