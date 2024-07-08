type ModalPropsType = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({ children }: ModalPropsType) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-lg">{children}</div>
    </div>
  );
};

export default Modal;
