import events from '/javascripts/event.js';

// const today = new Date();
// document.getElementById('date').value = today.getFullYear() + '-' + today.getUTCMonth() + '-' + today.getDay();

document.getElementById('date').value = '2020-06-12';

document.getElementById('randomButton').onclick = (e) => {
    const event = getEvent(randomizeDate());
    setEvent(event);
}

document.getElementById('date').onchange = (e) => {
    const event = getEvent(e.target.value);
    setEvent(event);
}

const getEvent = (date) => {
    return events.find(e => e.date === date);
}

const randomizeDate = () => {
    return '2018-12-23';
}

const setEvent = (event) => {
    if (event) {
        document.getElementById('eventImage').setAttribute('src', `/images/pictures/${event.url}`);
        document.getElementById('eventTitle').innerHTML = event.title;
        document.getElementById('eventDescription').innerHTML = event.description;
        document.querySelector('.dinamic-content').classList.remove('invisible');
    } else {
        document.querySelector('.dinamic-content').classList.add('invisible');
    }
}