document.getElementById('toggleTimer').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      func: () => {
        const timer = document.querySelector('.entryTimerWrapper'); // 엔트리 초시계 클래스
        if (timer) {
          timer.style.display = (timer.style.display === 'none') ? 'block' : 'none';
        }
      }
    });
  });
});

document.getElementById('toggleAnswer').addEventListener('click', () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.scripting.executeScript({
      target: {tabId: tabs[0].id},
      func: () => {
        const answer = document.querySelector('.entryAnswerWrapper'); // 엔트리 대답창 클래스
        if (answer) {
          answer.style.display = (answer.style.display === 'none') ? 'block' : 'none';
        }
      }
    });
  });
});
