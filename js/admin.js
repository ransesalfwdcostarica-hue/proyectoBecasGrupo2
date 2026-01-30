/**
 * Admin Panel Logic Simulation
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Panel de Administración cargado');
    // Basic interaction for the modal
    const btnNuevaBeca = document.getElementById('btn-nueva-beca');
    const modalBeca = document.getElementById('modal-beca');

    if (btnNuevaBeca && modalBeca) {
        btnNuevaBeca.addEventListener('click', () => {
            modalBeca.showModal();
        });
    }
});
