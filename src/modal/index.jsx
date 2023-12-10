import modals from "~/routes/modals";
import { useModal } from "~/stores/modal/hooks";

export default function Modal() {
    const modal = useModal();

    const currentModal = modals.find((m) => m.name === modal.name);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#5b7083]/40">
            <div className="bg-black max-w-[600px] max-h-[90vh] h-[600px] overflow-auto rounded-2xl">
                {currentModal && <currentModal.component />}
            </div>
        </div>
    );
}
