import React from 'react';

const ConfirmationModal = ({title, message, successAction, modalData}) => {
    return (
        <section>
            {/* The button to open modal */}
            

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box text-center">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(modalData._id)} htmlFor="my_modal_6" className="btn btn-outline btn-error w-full">Confirm</label>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my_modal_6" className="btn btn-outline w-full">Close</label>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConfirmationModal;