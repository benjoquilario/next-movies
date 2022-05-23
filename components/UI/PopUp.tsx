import React from 'react';

const PopUp = ({ logout, setIsOpen }: any) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed top-0 left-0 flex justify-center items-center w-full h-screen z-50 bg-gradient-to-r from-[#00000080] to-[#00000080]"
    >
      <div className="w-full max-w-[347px] mx-5 bg-[#0B1622] rounded-sm py-6 px-8">
        <h3 className="text-white mb-7 text-xl font-bold uppercase">
          Confirm Logout
        </h3>
        <div className="flex justify-end gap-2">
          <button
            onClick={() => setIsOpen(false)}
            className="bg-white text-sm font-semibold w-[87px] text-slate-900 py-[8px] px-[20px] rounded"
          >
            Cancel
          </button>
          <button
            onClick={logout}
            className="bg-[#6a55fa] text-sm font-semibold w-[87px] text-white py-[8px] px-[20px] rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
