import { useState } from 'react';

const RevokeInvite = () => {
  const [isOpen, setIsOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleRoleChange = (e) => {
//     setRole(e.target.value);
//   };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleInvite = () => {
    // Perform invite logic here, e.g., send email to the specified address

    // Close the modal after inviting the user
    closeModal();
  };

  return (
    <div>
        <div className='pr-24'>
            <button className='bg-[#EB5757] rounded-md py-2 px-3 text-white whitespace-nowrap' 
              onClick={openModal}
              >
                Revoke Invite
            </button>
        </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-gray-800 bg-opacity-50 absolute inset-0"></div>
          <div className="bg-[#F4F4F4] rounded-xl shadow-md p-16 z-20 w-[35rem]">
          <p className='text-[#2F80ED] text-center text-xl font-semibold whitespace-nowrap mb-3'>Are you sure you want to revoke this invite?</p>
          <div className="flex justify-center items-center mt-6">
            <button
              className="px-10 py-2 mr-8 bg-[#EB5757] text-white rounded-lg shadow-lg"
              onClick={closeModal}
            >
              NO
            </button>
            <button
              className="px-10 py-2 bg-blue text-white rounded-lg shadow-lg"
              onClick={handleInvite}
            >
              YES
            </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default RevokeInvite;