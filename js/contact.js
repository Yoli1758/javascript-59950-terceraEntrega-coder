
document.addEventListener('DOMContentLoaded', () => {

    const contenedorFormulario = document.querySelector(".contenedor-formulario");

    const h2 = document.createElement("h2");
    h2.textContent = "FORMULARIO DE CONTACTO";
    contenedorFormulario.appendChild(h2);

    const form = document.createElement('form');
    form.id = 'formulario';

    const fields = [
        { id: 'nombre', label: 'Nombre:', type: 'text', required: 'true' },
        { id: 'apellido', label: 'Apellido:', type: 'text', required: 'true' },
        { id: 'correo', label: 'Correo Electrónico:', type: 'email', required: 'true' },
        { id: 'comentarios', label: 'Escribi tu Comentario:', type: 'textarea', required: 'true' }
    ]

    fields.forEach(field => {
        const div = document.createElement('div');
        div.className = 'form-group';
        if (field.type === 'textarea') {
            div.classList.add('textarea-group');
        }
        const label = document.createElement('label');
        label.setAttribute('for', field.id);
        label.textContent = field.label;
        let input;
        if (field.type === 'textarea') {
            input = document.createElement('textarea');
            input.rows = '10';
            input.cols = '30';

        }
        else {
            input = document.createElement('input')
            input.type = field.type;
        }
        input.id = field.id;
        input.name = field.id;
        input.required = field.required;

        div.appendChild(label);
        div.appendChild(input);
        form.appendChild(div);
    });
    let data;
    let formData = {};


    const buttonSubmit = document.createElement('input');
    buttonSubmit.type = 'submit';
    buttonSubmit.value = 'Enviar';
    buttonSubmit.className = 'btn-enviar';
    form.appendChild(buttonSubmit);

    contenedorFormulario.appendChild(form);


    form.addEventListener('submit', (e) => {
        e.preventDefault();

        form.querySelectorAll('.form-group').forEach(group => {
            data = group.querySelector('input,textarea');
            if (data) {
                formData[data.name] = data.value;
            }
        });
        let storeData = localStorage.getItem('formData');
        storeData = storeData ? JSON.parse(storeData) : [];

        storeData.push(formData);
        localStorage.setItem('formData', JSON.stringify(storeData));


    })
})


