import { useState } from 'react';

const ResendInvite = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleInvite = () => {
    // Perform invite logic here, e.g., send email to the specified address
    console.log('Inviting user:', email, role, message);

    // Close the modal after inviting the user
    closeModal();
  };

  return (
    <div>
        <div className=''>
            <button className='bg-[#828282] rounded-md mr-5 py-2 px-3 text-white whitespace-nowrap' 
                onClick={openModal}
                >
                Resend Invite
            </button>
        </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-gray-800 bg-opacity-75 absolute inset-0"></div>
          <div className="bg-[#F4F4F4] rounded-lg p-8 z-20 w-[28rem] md:w-[35rem]">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-1 font-medium text-2xl">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="border border-[#407BFF] px-3 py-2 rounded w-full outline-none"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="role" className="block mb-1 font-medium text-2xl">
                Assign Role
              </label>
              <select
                id="role"
                className="border border-[#407BFF] px-3 py-2 rounded w-full outline-none"
                value={role}
                onChange={handleRoleChange}
              >
                <option value="">Manager</option>
                <option value="">Admin</option>
                <option value="">Reporting</option>
                <option value="">Reviewer</option>
                <option value="">Super Admin</option>
                <option value="">Customer Support</option>
              </select>
            </div>
            <div className="mb-4">
                <div className='flex justify-between'>
                    <label htmlFor="message" className="block mb-1 font-medium text-2xl">
                    Additional Message
                    </label>
                    <p className='text-[#BDBDBD] text-lg'>Optional</p>
                </div>
              <textarea
                id="message"
                className="border border-[#407BFF] px-3 py-2 h-32 rounded w-full outline-none resize-none"
                value={message}
                onChange={handleMessageChange}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-[#828282] text-white py-2 px-6 rounded-md text-sm mr-4"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button
                className="bg-[#2F80ED] text-white py-2 px-6 rounded-md text-sm"
                onClick={handleInvite}
              >
                Invite
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResendInvite;