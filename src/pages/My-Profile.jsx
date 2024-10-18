// MyProfile.js
import React, { useState } from 'react';
import Modal from '../components/Modal'; // Adjust the path as necessary

function MyProfile() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to My Profile</h1>
            <button onClick={handleOpenModal} className="bg-indigo-600 text-white py-2 px-4 rounded">
                View Profile Details
            </button>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Profile Details">
                <p>Your profile information goes here.</p>
                {/* Add more content as needed */}
            </Modal>
        </div>
    );
}

export default MyProfile;
