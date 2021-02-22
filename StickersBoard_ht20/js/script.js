const CREATE_BUTTON = '#add-stick';
const READ_BUTTON = '#read';
const UPDATE_BUTTON = '#update';
const DELETE_BUTTON = '#delete';
const DELETE_STICK = '.delete'
const EDIT_STICK = '.stick-desc'

const STICKER_TEMPLATE = '#stick-template';
const STICK_LIST = '#stick-list';

function renderSticker(sticker) {
    const template = $(STICKER_TEMPLATE).html();
    const stickList = $(STICK_LIST);
    const htmlSticker = template.replace('{{title}}', sticker.title)
        .replace('{{text}}', sticker.description)
        .replace('{{id}}', sticker.id);
    stickList.append(htmlSticker);
}

function createSticker() {
    create({description:''}).then(function(sticker){
        renderSticker(sticker);
    })
};

function readSticker() {
    read().then(function(stickers){
        stickers.forEach(sticker => renderSticker(sticker));
    })
};

function updateSticker(event) {
    update()
};

function deleteSticker(event) {
    $(this).closest('.col-md-3').remove();
  const delID = $(event.currentTarget).data('id');
  del(delID);
}

$(document).ready(function () {
    readSticker();
    $(CREATE_BUTTON).on('click', createSticker);
    $(READ_BUTTON).on('click', readSticker);
    $(UPDATE_BUTTON).on('click', updateSticker);
    $(document).on('click', `${STICK_LIST} ${DELETE_STICK}`, deleteSticker);
});



