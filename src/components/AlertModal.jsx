import { motion } from "framer-motion";

function AlertModal({ message, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl"
      >
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                stroke="#EF4444"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            သတိပေးချက်
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>
          <button
            onClick={onClose}
            className="w-full bg-primary text-white px-4 py-3 rounded-full font-semibold text-[14px] transition-all duration-300 ease-in-out hover:bg-opacity-90 active:bg-opacity-80"
          >
            ကောင်းပြီ
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default AlertModal;
