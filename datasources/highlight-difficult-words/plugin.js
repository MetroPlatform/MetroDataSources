const sendDatapoint = function(text, mc) {
  let datapoint = {};
  datapoint['text'] = text;
  console.log(datapoint);

  mc.sendDatapoint(datapoint);
}

const sendDifficultWord = function() {
  let text = window.getSelection().toString();
  sendDatapoint(text, mc);
  return {
    'status': 1,
    'msg': 'Success!'
  };
}

const createMenuButton = function(mc) {
  mc.createContextMenuButton({
    functionName: 'highlightDifficultWordsFunction',
    buttonTitle: 'Difficult Word',
    contexts: ['selection']
  }, sendDifficultWord);
}

var mc;

function initDataSource(metroClient) {
  mc = metroClient;
  createMenuButton(metroClient);
}
