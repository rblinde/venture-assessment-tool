const init = () => {
  if (!localStorage.getItem('saves')) {
    return false;
  }
  const saves = JSON.parse(localStorage.getItem('saves'));

  if (!saves.length) {
    return false;
  }

  const savesList = document.querySelector('.saves-list');
  const initialText = document.querySelector('.initial-text');
  initialText.classList.add('hide');

  let i = 1;
  for (const save of saves) {
    const p = document.createElement('p');
    p.innerText = `#${i}: ${save.name} - `;
    const a = document.createElement('a');
    a.innerText = 'View';
    a.href = 'save.html?id=' + save.id;

    p.appendChild(a);
    savesList.appendChild(p);
    i++;
  }
};

init();
