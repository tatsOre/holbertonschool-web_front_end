/**
 * Simple callback
 */
const createElement = (data) => {
  const paragraph = document.createElement('p');
  paragraph.innerText = data;
  document.body.appendChild(paragraph);
};

const queryWikipedia = (callback) => {
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';
  const xhr = new XMLHttpRequest();

  xhr.onload = () => {
    if (xhr.status === 200) {
      callback(JSON.parse(xhr.responseText).query.pages['21721040'].extract);
    }
  };
  xhr.open('GET', url);
  xhr.send();
};

queryWikipedia(createElement);
