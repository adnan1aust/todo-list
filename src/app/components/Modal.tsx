import { OPERATION_MODE } from "../const";

type ModalPropsType = {
  mode: OPERATION_MODE;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ onClose, children }: ModalPropsType) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">
        {children}
        {/* <button onClick={onClose} className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700">
          Close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
