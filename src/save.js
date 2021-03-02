import Chart from 'chart.js';

Chart.defaults.global.defaultFontColor = 'rgb(20, 33, 61)';

const ASPECTS = [
  'Desirability',
  'Financial Feasibility',
  'Ambition & Presentation',
  'Competition',
];

const buildRadarChart = (userData, name) => {
  const canvas = document.getElementById('chart');
  return new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ASPECTS,
      datasets: [{
        label: 'Threshold',
        data: [3, 3, 3, 3],
      }, {
        label: name,
        data: userData,
        backgroundColor: 'rgba(20, 33, 61, 0.2)',
        borderColor: 'rgb(20, 33, 61)',
        pointBackgroundColor: 'rgb(20, 33, 61)',
      }]
    },
    options: {
      scale: {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 5,
          stepSize: 1,
        }
      }
    }
  });
};

const buildBarChart = (container, userData, name) => {
  const canvas = document.getElementById(container);
  const options = {
    type: 'bar',
    data: {
      labels: userData.labels,
      datasets: [{
        label: name,
        data: userData.scores,
        backgroundColor: 'rgba(20, 33, 61, 0.2)',
        borderColor: 'rgb(20, 33, 61)',
      }]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Activities completed (%)'
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 100,
            stepSize: 10,
          }
        }],
        xAxes: [{
          ticks: {
            autoSkip: false,
            maxRotation: 45,
            minRotation: 45
          }
        }]
      }
    }
  };

  return new Chart(canvas, options);
};

const deleteSave = (saves, id) => {
  const newSaves = saves.filter(s => s.id !== id);
  localStorage.setItem('saves', JSON.stringify(newSaves));
  window.location.href = 'saves.html';
};

const generateFeedback = (i, feedback) => {
  // heading
  const heading = document.createElement('h4');
  heading.textContent = ASPECTS[i];

  // content
  const content = document.createElement('p');
  content.textContent = feedback || 'No feedback provided.';

  return { heading, content };
};

const init = () => {
  if (!localStorage.getItem('saves')) {
    window.location.href = 'saves.html';
  }

  const urlParams = new URLSearchParams(window.location.search);
  const pageId = Number(urlParams.get('id'));
  const saves = JSON.parse(localStorage.getItem('saves'));
  const save = saves.filter(elem => elem.id === pageId)[0];

  if (!save) {
    window.location.href = 'saves.html';
  }

  // Name
  const nameElem = document.querySelector('.name');
  nameElem.textContent += ': ' + save.name;

  // Radar chart
  buildRadarChart(save.mainScores, save.name);

  const aspectClasses = ['desirability', 'finance', 'ambition', 'competition'];
  const feedback = [];
  let i = 0;

  for (const aspect of aspectClasses) {
    buildBarChart(`chart-${aspect}`, save.catScores[i], save.name);
    feedback.push(generateFeedback(i, save.feedback[i]));
    i++;
  }

  const feedbackElem = document.querySelector('.feedback');
  for (const f of feedback) {
    feedbackElem.appendChild(f.heading);
    feedbackElem.appendChild(f.content);
  }

  // Delete
  const delButton = document.querySelector('.btn-delete');
  delButton.addEventListener('click', () => deleteSave(saves, save.id), false);
};

init();
