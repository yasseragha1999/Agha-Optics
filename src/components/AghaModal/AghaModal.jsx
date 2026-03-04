import FormModal from "@/components/AghaModal/FormModal";

const AghaModal = ({ closeModal, onSave }) => {
    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <FormModal closeModal={closeModal} onSave={onSave} />
        </div>
    );
};

export default AghaModal;