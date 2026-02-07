const ModalLayout = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      onClick={onClose}
      className="absolute top-0 w-full h-full flex justify-center content-center items-center"
    >
      {children}
    </div>
  );
};

export default ModalLayout;
