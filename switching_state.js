// changine state of element

function nextState(element) {
    element.classList.replace('state-1', 'state-2') ||
    element.classList.replace('state-2', 'state-3') ||
    element.classList.replace('state-3', 'state-4') ||
    element.classList.add('state-1');
}

// data attribute State Machine

let stateMachine = {
    "1": "state-1",
    "2": "state-2",
    "3": "state-3",
}

function setState(el) {
    el.dataset.state = stateMachine[el.dataset.state] || stateMachine["1"];
}

// rotator function by Kyle Simpson

const rotate = classes => ({classList}) => {
    let current = classes.findIndex(c => classList.contains(c));
    let next = (current + 1) % classes.length;
    classList.replace(classes[current], classes[next]);
}
