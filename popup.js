// 버튼 클릭 시 메시지 전송 함수
const sendMessageToContent = (actionName) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { action: actionName }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("오류 발생:", chrome.runtime.lastError.message);
          alert("엔트리 페이지를 새로고침한 후 다시 시도해주세요.");
        } else {
          console.log("결과:", response);
        }
      });
    }
  });
};

document.getElementById('toggleTimer').addEventListener('click', () => {
  sendMessageToContent("toggleTimer");
});

document.getElementById('toggleAnswer').addEventListener('click', () => {
  sendMessageToContent("toggleAnswer");
});
