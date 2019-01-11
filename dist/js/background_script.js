
const CommandDirector = function() {
  this.registeredCommand = {};
};

CommandDirector.prototype.run = function(command) {
  console.log('called Command:', command);

  if (this.registeredCommand.hasOwnProperty(command)) {
    this.registeredCommand[command]();
  }
  return this;
};
CommandDirector.prototype.register = function(command, func) {
  this.registeredCommand[command] = func;
  return this;
};

const commandDirector = new CommandDirector();

chrome.commands.onCommand.addListener(function(command) {
  commandDirector.run(command);
});


/**
 * 現在の画面のスクリーンショット
 */
const captureScreenshot = function() {
  console.log('run function!');

  // const chooseDesktopMedia = chrome.desktopCapture.chooseDesktopMedia();
};

// コマンドに処理を登録する
commandDirector
  .register('capture-screenshot', captureScreenshot)
;
