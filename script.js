const display = document.getElementById('display');

function includeNumber(val) {
  display.value += val;
  validateErrors();
}

function del() {
  var value = display.value;
  evaluate(value.substr(0, value.length - 1));
}

function elevate() {
  var nums = display.value.split('^');
  evaluate(Math.pow(nums[0], nums[1]));
}

function executeOperation() {
  if (display.value.includes('^')) elevate();
  evaluate(eval(display.value));
}

function getOperation(value) {
  return value.match(/[-^*+\/]/g);
}

function operation(val) {
  if (getOperation(display.value) != undefined) {
    executeOperation();
  }
  if (display.value != '') includeNumber(val);
}

function clean() {
  evaluate('');
}

function evaluate(val) {
  display.value = val;
  validateErrors();
}

function validateErrors() {
  if (display.value.includes('NaN')) evaluate(display.value.replace('NaN', ''));
  if (display.value.includes('undefined'))
    evaluate(display.value.replace('undefined', ''));
}

function includeComma() {
  let value = display.value;
  let regex = getOperation(display.value);
  if (regex != undefined) {
    let nums = value.split(regex);
    if (
      nums.length != undefined &&
      !nums[1].includes('.') &&
      !regex.includes('^')
    ) {
      if (nums[1] == undefined || nums[1] == '') display.value += '0';
      display.value += '.';
    }
  } else {
    if (!value.includes('.')) {
      if (value == '') display.value += '0';
      display.value += '.';
    }
  }
}
