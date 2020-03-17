const display = document.getElementById('display');
function add(val) {
  display.value += val;
  validateErrors();
}
function del() {
  var value = display.value;
  banana(value.substr(0, value.length - 1));
}
function elevate() {
  var nums = display.value.split('^');
  banana(Math.pow(nums[0], nums[1]));
}
function exec() {
  if (display.value.includes('^')) elevate();
  banana(eval(display.value));
}
function getRegex(value) {
  return value.match(/[-^*+\/]/g);
}
function operation(val) {
  if (getRegex(display.value) != undefined) {
    exec();
  }
  if (display.value != '') add(val);
}
function clean() {
  banana('');
}
function banana(val) {
  display.value = val;
  validateErrors();
}
function validateErrors() {
  if (display.value.includes('NaN')) banana(display.value.replace('NaN', ''));
  if (display.value.includes('undefined'))
    banana(display.value.replace('undefined', ''));
}
function virg() {
  var value = display.value;
  var regex = getRegex(display.value);
  if (regex != undefined) {
    var nums = value.split(regex);
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
