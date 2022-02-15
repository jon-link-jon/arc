const output = {};

// uses an inivisble input to copy text to the clipboard
output.copyToClipboard = function(text_to_copy) {
  const input = document.createElement('input');
  input.style='position:absolute;opacity:0';
  input.value = text_to_copy;
  document.body.append(input);
  input.select();
  document.execCommand('copy');
  input.remove();
};

// turn special URI characters in to underscores
output.makeAnchorHash = function makeAnchorHash(user_text) {
  let ret = encodeURIComponent(user_text);
  ret = ret.replace(/%[0-9A-F]{2}/g, '_');
  ret = ret.replace(/_{2,10}/g, '_');
  return ret;
};

export default output;