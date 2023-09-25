import React from 'react';
import MainPage from '../assets/images/MainPage.png';
import Map from '../assets/images/Map.png';
import UserProfile from '../assets/images/UserProfile.png';
import Post from '../assets/images/Post.png';
import Create from '../assets/images/Create.png';
import Chat from '../assets/images/Chat.png';
import Notification from '../assets/images/Notification.png';

function KeyFeaturesSection() {
    const features = [
        {
            screenshot: MainPage,
            title: 'Main Page',
            instruction: 'Dive into a dynamic feed curated just for you. On the main page, you can explore the latest updates from your network, scroll through an endless stream of posts, view captivating stories, and immerse yourself in a vibrant community. Engage with content by liking, commenting, or sharing—keeping your connections alive and well.'
        },
        {
            screenshot: Map,
            title: 'Map',
            instruction: 'Unveil a world of social possibilities with our interactive map feature. Discover friends, acquaintances, and events in your vicinity. View real-time locations, join spontaneous meetups, or simply check in to your favorite spots to let others know where they can find you.'
        },
        {
            screenshot: UserProfile,
            title: 'User Profile',
            instruction: 'Turn your profile into a personal canvas. Customize it to reflect who you are: showcase your interests, hobbies, and milestones. Update your profile picture to your latest selfie, curate posts that resonate with you, and have full control over your privacy settings.'
        },
        {
            screenshot: Post,
            title: 'Posts',
            instruction: 'Chronicle your life\'s moments, big or small. Whether you\'re sharing a picture of a mesmerizing sunset, penning down thoughts about a recent book you\'ve read, or just updating your status about your day, the posts feature lets you express and connect. Engage with friends through comments, gather likes, or even spark a conversation.'
        },
        {
            screenshot: Create,
            title: 'Create',
            instruction: 'Ignite your creativity. The \'Create\' feature is more than just a tool—it\'s a platform for you to express, share, and engage. Craft compelling posts, conduct intriguing polls, or start trends. The digital canvas awaits your touch.'
        },
        {
            screenshot: Chat,
            title: 'Live Chat',
            instruction: 'Conversations, now more fluid and lively than ever. With the Live Chat feature, you can connect with friends and family instantaneously. Whether you\'re sharing a joke, sending over important photos, or just catching up after a long day, the chat ensures your conversations are smooth and uninterrupted.'
        },
        {
            screenshot: Notification,
            title: 'Notifications',
            instruction: 'In the bustling world of social interactions, our notifications ensure you never skip a beat. Be it a like on your latest post, a comment on your shared memory, or a mention in a friend\'s story, the notification center keeps you in the loop. It\'s more than just alerts—it\'s your window to your social world\'s happenings.'
        },
    ];

    return (
        <section className="features-container" id="features">
            {features.map((feature, index) => (
                <div className="feature-card" key={index} data-aos="fade-up">
                    <img className="feature-icon" src={feature.screenshot} alt={feature.title} />
                    <div className="feature-content">
                        <h2 className="feature-title">{feature.title}</h2>
                        <p className="feature-description">{feature.instruction}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}

export default KeyFeaturesSection;
