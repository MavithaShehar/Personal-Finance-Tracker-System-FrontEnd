import React, { useState } from 'react';
import Button from './Button';
import Modal from './Modal'; // Import the Modal component

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' }); // State for modal content

    let Links = [
        { name: "Dashboard", link: "/", icon: "stats-chart-outline" },
        { name: "My Profile", link: "/MyProfile", icon: "person-circle-outline" },
        { name: "Transaction", link: "/TransactionForm", icon: "swap-horizontal-outline" },
    ];

    const handleLinkClick = (link) => {
        if (link.name === "My Profile") { // Only show modal for My Profile
            setModalContent({ title: link.name, content: `You clicked on ${link.name}` });
            setOpen(true); // Open the modal
        } else {
            // Redirect to other links
            window.location.href = link.link; // Redirect to the link
        }
    };

    return (
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                <div className='font-bold lg:text-2xl md:text-xl cursor-pointer flex items-center font-sans text-indigo-600'>
                    <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                        <ion-icon name="wallet-outline"></ion-icon>
                    </span>
                    Money Mate
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='lg:ml-8 md:ml-6 lg:text-xl md:text-base md:my-0 my-7 font-medium '>
                                <a 
                                    href={link.link} 
                                    className='flex items-center space-x-2 text-gray-600 hover:text-indigo-600 duration-500'
                                    onClick={(e) => {
                                        e.preventDefault(); // Prevent the default link behavior
                                        handleLinkClick(link); // Handle link click
                                    }}
                                >
                                    <ion-icon name={link.icon}></ion-icon>
                                    <span>{link.name}</span>
                                </a>
                            </li>
                        ))
                    }
                    <Button name="Logout" icon="log-out-outline" size="text-5xl" />
                </ul>
            </div>
            <Modal isOpen={open} onClose={() => setOpen(false)} title={modalContent.title}>
                <p>{modalContent.content}</p>
            </Modal>
        </div>
    );
}

export default Nav;
