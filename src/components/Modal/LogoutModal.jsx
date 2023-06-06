import React from 'react';
import Logo from '../../assets/svg/logo.svg';

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'flex' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white py-12 px-8 rounded-2xl shadow-lg">
            <div className='mb-10'>
                <img class="mx-auto h-8 w-auto" src={Logo} alt="Wiping-logo" />
            </div>
          <p className='text-[#2F80ED] text-2xl'>Are you sure you want to logout?</p>
          <div className="flex justify-center items-center mt-6">
            <button
              className="px-10 py-2 mr-8 bg-gray-500 text-white rounded-md shadow-md"
              onClick={onClose}
            >
              NO
            </button>
            <button
              className="px-10 py-2 bg-red-500 text-white rounded-md shadow-md"
              onClick={onLogout}
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;