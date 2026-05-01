// popup.js에서 보낸 메시지를 수신합니다.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "toggleTimer") {
    const timer = document.querySelector('.entryTimerWrapper');
    if (timer) {
      const isHidden = timer.style.display === 'none';
      timer.style.display = isHidden ? 'block' : 'none';
      sendResponse({ status: "success", visible: !isHidden });
    } else {
      sendResponse({ status: "fail", message: "초시계를 찾을 수 없습니다." });
    }
  }

  if (request.action === "toggleAnswer") {
    const answer = document.querySelector('.entryAnswerWrapper');
    if (answer) {
      const isHidden = answer.style.display === 'none';
      answer.style.display = isHidden ? 'block' : 'none';
      sendResponse({ status: "success", visible: !isHidden });
    } else {
      sendResponse({ status: "fail", message: "대답창을 찾을 수 없습니다." });
    }
  }
  return true; // 비동기 응답을 위해 true 반환
});
