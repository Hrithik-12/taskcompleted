// This component is a modal that displays submitted feedbacks.
import { useState, useEffect } from "react";
import Modal from "./Modal";

const AdminView = ({ feedbacks, show, onClose }) => {
  return (
    <div className="mt-6">
      <Modal show={show} onClose={onClose} feedbacks={feedbacks} />
    </div>
  );
};

export default AdminView;