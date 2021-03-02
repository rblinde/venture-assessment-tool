import Chart from 'chart.js';

Chart.defaults.global.defaultFontColor = 'rgb(20, 33, 61)';

let startupName = '';
let mainScores = [];
let catScores = [];

const ASPECTS = [
  'Desirability',
  'Financial Feasibility',
  'Ambition & Presentation',
  'Competition',
];

const buildRadarChart = (userData) => {
  const canvas = document.getElementById('chart');
  return new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ASPECTS,
      datasets: [{
        label: 'Threshold',
        data: [3, 3, 3, 3],
      }, {
        label: startupName,
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

const buildBarChart = (container, userData) => {
  const canvas = document.getElementById(container);
  const options = {
    type: 'bar',
    data: {
      labels: userData.labels,
      datasets: [{
        label: startupName,
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

const getSubsectionScore = (subsection, property) => {
  const questions = subsection.querySelectorAll('.question input[type="range"]');
  const sWeight = Number(subsection.dataset[property]);
  const sScore = [...questions].reduce(
    (total, question) => total + Number(question.value) * (Number(question.dataset.weight) / 100), 0
  );

  return sScore * (sWeight / 100);
};

const getAspectScore = (name) => {
  const aspect = document.querySelector(name);
  const subsections = aspect.querySelectorAll('.subsection');

  return [...subsections].reduce(
    (total, subsection) => getSubsectionScore(subsection, 'weight') + total, 0
  );
}

const getBarChartData = (name) => {
  const aspect = document.querySelector(name);
  const subsections = aspect.querySelectorAll('.subsection');
  const scores = [];
  const labels = [];

  for (const subsection of subsections) {
    const score = getSubsectionScore(subsection, 'weight');
    const max = 5 * Number(subsection.dataset['weight']) / 100;
    const label = subsection.querySelector('h3').textContent;
    scores.push(Number(score / max * 100).toFixed(2));
    labels.push(label);
  }

  return { scores, labels };
};

const generateFeedback = (i, aspect) => {
  const aspectElem = document.querySelector(aspect);
  // heading
  const heading = document.createElement('h4');
  heading.textContent = ASPECTS[i];
  // content
  const content = document.createElement('p');
  const feedback = aspectElem.querySelector('textarea').value.trim();
  content.textContent = feedback || 'No feedback provided.';;

  return { heading, content };
};

const submit = () => {
  const resultsElem = document.querySelector('.results');
  const feedbackElem = document.querySelector('.feedback');
  const aspectClasses = ['desirability', 'finance', 'ambition', 'competition'];
  const userData = [];
  const feedback = [];
  let i = 0;

  // For all aspects
  for (const aspect of aspectClasses) {
    userData.push(getAspectScore(`.section-${aspect}`).toFixed(2));
    // get data
    const barData = getBarChartData(`.section-${aspect}`);
    // init chart
    buildBarChart(`chart-${aspect}`, barData);
    // build feedback
    feedback.push(generateFeedback(i, `.section-${aspect}`));
    // category scores
    catScores.push(barData);
    i++;
  }

  mainScores = userData;

  // Radar chart init
  buildRadarChart(userData);

  // Show feedback
  feedbackElem.innerHTML = '';
  for (const f of feedback) {
    feedbackElem.appendChild(f.heading);
    feedbackElem.appendChild(f.content);
  }

  // Show results and scroll down
  resultsElem.classList.add('show');
  window.scrollTo({
    top: resultsElem.offsetTop,
    behavior: 'smooth',
  });
};
const submitBtn = document.querySelector('.js-submit');
submitBtn.addEventListener('click', submit, false);

// Start + name
const startElem = document.querySelector('.start');
const startBtn = startElem.querySelector('.btn');
const surveyElem = document.querySelector('.survey');
const nameInput = startElem.querySelector('input');
const startSurvey = (e) => {
  e.preventDefault();
  startElem.classList.add('hide');
  surveyElem.classList.add('show');
  startupName = nameInput.value.trim() || 'Your start-up';
};
startBtn.addEventListener('click', startSurvey, false);

// Save
const saveBtn = document.querySelector('.btn-save');
const save = () => {
  const now = new Date;
  const addFeedback = [...document.querySelectorAll('.add-feedback textarea')];
  const data = {
    id: now.getTime(),
    name: startupName,
    mainScores,
    catScores,
    feedback: addFeedback.map(val => val.value.trim() || null),
  };

  if (!localStorage.getItem('saves')) {
    localStorage.setItem('saves', JSON.stringify([data]));
  } else {
    const saves = JSON.parse(localStorage.getItem('saves'));
    localStorage.setItem('saves', JSON.stringify([...saves, data]));
  }

  window.location.href = 'saves.html';
};
saveBtn.addEventListener('click', save, false);

// Reset everything
const resetBtn = document.querySelector('.btn-reset');
const reset = () => {
  // reset questions
  document.querySelectorAll('.question input[type="range"]').forEach(q => { q.value = '3' });
  // reset custom feedback
  document.querySelectorAll('.add-feedback textarea').forEach(f => { f.value = ''; })
  // hide results
  document.querySelector('.results').classList.remove('show');
  // hide questions
  surveyElem.classList.remove('show');
  // show start
  startElem.classList.remove('hide');
  // reset name
  nameInput.value = '';
  // scroll to top
  window.scrollTo({ top: 0 });
};
resetBtn.addEventListener('click', reset, false);
