import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const InviteForm = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [githubUsername, setGithubUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://project-tracker-be.vercel.app/projects/${id}/invite`, { name, email, github_username: githubUsername });
      alert('Invitation sent successfully!');
      setName('');
      setEmail('');
      setGithubUsername('');
    } catch (error) {
      console.error('Error sending invitation:', error);
      alert('Failed to send invitation. Please try again.');
    }
  };

  return (
    <div className="invite-form">
      <h2>Invite Contributor</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>GitHub Username</label>
        <input type="text" value={githubUsername} onChange={(e) => setGithubUsername(e.target.value)} required />
        <button type="submit">Send Invite</button>
      </form>
    </div>
  );
};

export default InviteForm;