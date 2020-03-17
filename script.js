const display = document.getElementById('display');
function add(val) {
  display.value += val;
}
function del() {
  var value = display.value;
  display.value = value.substr(0, value.length - 1);
}
function elevate() {
  var nums = display.value.split('^');
  display.value = Math.pow(nums[0], nums[1]);
}
function exec() {
  if (display.value.includes('^')) elevate();
  display.value = eval(display.value);
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
  display.value = '';
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
