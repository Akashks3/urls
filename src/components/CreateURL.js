import React, { useState } from 'react';
import axios from 'axios';

const CreateURL = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');

    const handleCreateURL = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/create-url', { longUrl });
            setShortUrl(response.data.shortUrl);
        } catch (err) {
            console.error('Error creating URL');
        }
    };

    return (
        <div>
            <h2>Create Short URL</h2>
            <form class='form-container' onSubmit={handleCreateURL}>
                <input
                    class='form-group input'
                    type="url"
                    placeholder="Enter Long URL"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                />
                <button className='btn-primary' type="submit">Create URL</button>
            </form>
            {shortUrl && (
                <p>Short URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>
            )}
        </div>
    );
};

export default CreateURL;
