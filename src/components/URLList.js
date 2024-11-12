import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'; // Import CSS for styling

const URLList = ({ urls }) => {
    return (
        <div className="url-list-container">
            <h2>URL List</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Shortened URL</th>
                        <th>Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.length > 0 ? (
                        urls.map((url) => (
                            <tr key={url.id}>
                                <td>{url.originalUrl}</td>
                                <td>{url.shortenedUrl}</td>
                                <td>{url.clicks}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">No URLs found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

// Prop validation
URLList.propTypes = {
    urls: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            originalUrl: PropTypes.string.isRequired,
            shortenedUrl: PropTypes.string.isRequired,
            clicks: PropTypes.number.isRequired,
        })
    ),
};

// Default props
URLList.defaultProps = {
    urls: [],
};

export default URLList;
