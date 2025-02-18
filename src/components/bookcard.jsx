import React from 'react'

const Bookcard = ({ image, name, genre, author }) => {
  const cardStyle = {
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    width: '250px',
    padding: '20px',
    margin: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '5px',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    margin: '15px 0',
    color: '#333',
  };

  const textStyle = {
    fontSize: '1rem',
    margin: '5px 0',
    color: '#666',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img src={image} alt="image" style={imgStyle} />
      <h1 style={titleStyle}>{name}</h1>
      <h3 style={textStyle}>{genre}</h3>
      <h3 style={textStyle}>{author}</h3>
    </div>
  );
}

export default Bookcard;
