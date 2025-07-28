import { Modal } from "@/components/ui/modal";
import { useGlobalContext } from "@/providers/global.context";
import { createComponents } from "../plan.constant";
import HotelCreate from "./hotel-create";

function PlanCreateModal() {
  const { modalVisibility, setModalVisibility, type } = useGlobalContext();

  return (
    <Modal
      visibility={modalVisibility}
      setVisibility={() => setModalVisibility(false)}
      showCloseButton
    >
      {(() => {
        const Component = createComponents[type] ?? HotelCreate;
        return <Component />;
      })()}
    </Modal>
  );
}

export default PlanCreateModal;
