"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-hotkey";
exports.ids = ["vendor-chunks/is-hotkey"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-hotkey/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/is-hotkey/lib/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\n\n/**\n * Constants.\n */\n\nvar IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);\n\nvar MODIFIERS = {\n  alt: 'altKey',\n  control: 'ctrlKey',\n  meta: 'metaKey',\n  shift: 'shiftKey'\n};\n\nvar ALIASES = {\n  add: '+',\n  break: 'pause',\n  cmd: 'meta',\n  command: 'meta',\n  ctl: 'control',\n  ctrl: 'control',\n  del: 'delete',\n  down: 'arrowdown',\n  esc: 'escape',\n  ins: 'insert',\n  left: 'arrowleft',\n  mod: IS_MAC ? 'meta' : 'control',\n  opt: 'alt',\n  option: 'alt',\n  return: 'enter',\n  right: 'arrowright',\n  space: ' ',\n  spacebar: ' ',\n  up: 'arrowup',\n  win: 'meta',\n  windows: 'meta'\n};\n\nvar CODES = {\n  backspace: 8,\n  tab: 9,\n  enter: 13,\n  shift: 16,\n  control: 17,\n  alt: 18,\n  pause: 19,\n  capslock: 20,\n  escape: 27,\n  ' ': 32,\n  pageup: 33,\n  pagedown: 34,\n  end: 35,\n  home: 36,\n  arrowleft: 37,\n  arrowup: 38,\n  arrowright: 39,\n  arrowdown: 40,\n  insert: 45,\n  delete: 46,\n  meta: 91,\n  numlock: 144,\n  scrolllock: 145,\n  ';': 186,\n  '=': 187,\n  ',': 188,\n  '-': 189,\n  '.': 190,\n  '/': 191,\n  '`': 192,\n  '[': 219,\n  '\\\\': 220,\n  ']': 221,\n  '\\'': 222\n};\n\nfor (var f = 1; f < 20; f++) {\n  CODES['f' + f] = 111 + f;\n}\n\n/**\n * Is hotkey?\n */\n\nfunction isHotkey(hotkey, options, event) {\n  if (options && !('byKey' in options)) {\n    event = options;\n    options = null;\n  }\n\n  if (!Array.isArray(hotkey)) {\n    hotkey = [hotkey];\n  }\n\n  var array = hotkey.map(function (string) {\n    return parseHotkey(string, options);\n  });\n  var check = function check(e) {\n    return array.some(function (object) {\n      return compareHotkey(object, e);\n    });\n  };\n  var ret = event == null ? check : check(event);\n  return ret;\n}\n\nfunction isCodeHotkey(hotkey, event) {\n  return isHotkey(hotkey, event);\n}\n\nfunction isKeyHotkey(hotkey, event) {\n  return isHotkey(hotkey, { byKey: true }, event);\n}\n\n/**\n * Parse.\n */\n\nfunction parseHotkey(hotkey, options) {\n  var byKey = options && options.byKey;\n  var ret = {};\n\n  // Special case to handle the `+` key since we use it as a separator.\n  hotkey = hotkey.replace('++', '+add');\n  var values = hotkey.split('+');\n  var length = values.length;\n\n  // Ensure that all the modifiers are set to false unless the hotkey has them.\n\n  for (var k in MODIFIERS) {\n    ret[MODIFIERS[k]] = false;\n  }\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var value = _step.value;\n\n      var optional = value.endsWith('?') && value.length > 1;\n\n      if (optional) {\n        value = value.slice(0, -1);\n      }\n\n      var name = toKeyName(value);\n      var modifier = MODIFIERS[name];\n\n      if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {\n        throw new TypeError('Unknown modifier: \"' + value + '\"');\n      }\n\n      if (length === 1 || !modifier) {\n        if (byKey) {\n          ret.key = name;\n        } else {\n          ret.which = toKeyCode(value);\n        }\n      }\n\n      if (modifier) {\n        ret[modifier] = optional ? null : true;\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator.return) {\n        _iterator.return();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n\n  return ret;\n}\n\n/**\n * Compare.\n */\n\nfunction compareHotkey(object, event) {\n  for (var key in object) {\n    var expected = object[key];\n    var actual = void 0;\n\n    if (expected == null) {\n      continue;\n    }\n\n    if (key === 'key' && event.key != null) {\n      actual = event.key.toLowerCase();\n    } else if (key === 'which') {\n      actual = expected === 91 && event.which === 93 ? 91 : event.which;\n    } else {\n      actual = event[key];\n    }\n\n    if (actual == null && expected === false) {\n      continue;\n    }\n\n    if (actual !== expected) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\n/**\n * Utils.\n */\n\nfunction toKeyCode(name) {\n  name = toKeyName(name);\n  var code = CODES[name] || name.toUpperCase().charCodeAt(0);\n  return code;\n}\n\nfunction toKeyName(name) {\n  name = name.toLowerCase();\n  name = ALIASES[name] || name;\n  return name;\n}\n\n/**\n * Export.\n */\n\nexports[\"default\"] = isHotkey;\nexports.isHotkey = isHotkey;\nexports.isCodeHotkey = isCodeHotkey;\nexports.isKeyHotkey = isKeyHotkey;\nexports.parseHotkey = parseHotkey;\nexports.compareHotkey = compareHotkey;\nexports.toKeyCode = toKeyCode;\nexports.toKeyName = toKeyName;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtaG90a2V5L2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7O0FBRUY7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixhQUFhO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxnRUFBZ0U7QUFDM0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWU7QUFDZixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixtQkFBbUI7QUFDbkIscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0ZW5haS8uL25vZGVfbW9kdWxlcy9pcy1ob3RrZXkvbGliL2luZGV4LmpzPzNhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG4vKipcbiAqIENvbnN0YW50cy5cbiAqL1xuXG52YXIgSVNfTUFDID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiAvTWFjfGlQb2R8aVBob25lfGlQYWQvLnRlc3Qod2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSk7XG5cbnZhciBNT0RJRklFUlMgPSB7XG4gIGFsdDogJ2FsdEtleScsXG4gIGNvbnRyb2w6ICdjdHJsS2V5JyxcbiAgbWV0YTogJ21ldGFLZXknLFxuICBzaGlmdDogJ3NoaWZ0S2V5J1xufTtcblxudmFyIEFMSUFTRVMgPSB7XG4gIGFkZDogJysnLFxuICBicmVhazogJ3BhdXNlJyxcbiAgY21kOiAnbWV0YScsXG4gIGNvbW1hbmQ6ICdtZXRhJyxcbiAgY3RsOiAnY29udHJvbCcsXG4gIGN0cmw6ICdjb250cm9sJyxcbiAgZGVsOiAnZGVsZXRlJyxcbiAgZG93bjogJ2Fycm93ZG93bicsXG4gIGVzYzogJ2VzY2FwZScsXG4gIGluczogJ2luc2VydCcsXG4gIGxlZnQ6ICdhcnJvd2xlZnQnLFxuICBtb2Q6IElTX01BQyA/ICdtZXRhJyA6ICdjb250cm9sJyxcbiAgb3B0OiAnYWx0JyxcbiAgb3B0aW9uOiAnYWx0JyxcbiAgcmV0dXJuOiAnZW50ZXInLFxuICByaWdodDogJ2Fycm93cmlnaHQnLFxuICBzcGFjZTogJyAnLFxuICBzcGFjZWJhcjogJyAnLFxuICB1cDogJ2Fycm93dXAnLFxuICB3aW46ICdtZXRhJyxcbiAgd2luZG93czogJ21ldGEnXG59O1xuXG52YXIgQ09ERVMgPSB7XG4gIGJhY2tzcGFjZTogOCxcbiAgdGFiOiA5LFxuICBlbnRlcjogMTMsXG4gIHNoaWZ0OiAxNixcbiAgY29udHJvbDogMTcsXG4gIGFsdDogMTgsXG4gIHBhdXNlOiAxOSxcbiAgY2Fwc2xvY2s6IDIwLFxuICBlc2NhcGU6IDI3LFxuICAnICc6IDMyLFxuICBwYWdldXA6IDMzLFxuICBwYWdlZG93bjogMzQsXG4gIGVuZDogMzUsXG4gIGhvbWU6IDM2LFxuICBhcnJvd2xlZnQ6IDM3LFxuICBhcnJvd3VwOiAzOCxcbiAgYXJyb3dyaWdodDogMzksXG4gIGFycm93ZG93bjogNDAsXG4gIGluc2VydDogNDUsXG4gIGRlbGV0ZTogNDYsXG4gIG1ldGE6IDkxLFxuICBudW1sb2NrOiAxNDQsXG4gIHNjcm9sbGxvY2s6IDE0NSxcbiAgJzsnOiAxODYsXG4gICc9JzogMTg3LFxuICAnLCc6IDE4OCxcbiAgJy0nOiAxODksXG4gICcuJzogMTkwLFxuICAnLyc6IDE5MSxcbiAgJ2AnOiAxOTIsXG4gICdbJzogMjE5LFxuICAnXFxcXCc6IDIyMCxcbiAgJ10nOiAyMjEsXG4gICdcXCcnOiAyMjJcbn07XG5cbmZvciAodmFyIGYgPSAxOyBmIDwgMjA7IGYrKykge1xuICBDT0RFU1snZicgKyBmXSA9IDExMSArIGY7XG59XG5cbi8qKlxuICogSXMgaG90a2V5P1xuICovXG5cbmZ1bmN0aW9uIGlzSG90a2V5KGhvdGtleSwgb3B0aW9ucywgZXZlbnQpIHtcbiAgaWYgKG9wdGlvbnMgJiYgISgnYnlLZXknIGluIG9wdGlvbnMpKSB7XG4gICAgZXZlbnQgPSBvcHRpb25zO1xuICAgIG9wdGlvbnMgPSBudWxsO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGhvdGtleSkpIHtcbiAgICBob3RrZXkgPSBbaG90a2V5XTtcbiAgfVxuXG4gIHZhciBhcnJheSA9IGhvdGtleS5tYXAoZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHJldHVybiBwYXJzZUhvdGtleShzdHJpbmcsIG9wdGlvbnMpO1xuICB9KTtcbiAgdmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soZSkge1xuICAgIHJldHVybiBhcnJheS5zb21lKGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIHJldHVybiBjb21wYXJlSG90a2V5KG9iamVjdCwgZSk7XG4gICAgfSk7XG4gIH07XG4gIHZhciByZXQgPSBldmVudCA9PSBudWxsID8gY2hlY2sgOiBjaGVjayhldmVudCk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGlzQ29kZUhvdGtleShob3RrZXksIGV2ZW50KSB7XG4gIHJldHVybiBpc0hvdGtleShob3RrZXksIGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gaXNLZXlIb3RrZXkoaG90a2V5LCBldmVudCkge1xuICByZXR1cm4gaXNIb3RrZXkoaG90a2V5LCB7IGJ5S2V5OiB0cnVlIH0sIGV2ZW50KTtcbn1cblxuLyoqXG4gKiBQYXJzZS5cbiAqL1xuXG5mdW5jdGlvbiBwYXJzZUhvdGtleShob3RrZXksIG9wdGlvbnMpIHtcbiAgdmFyIGJ5S2V5ID0gb3B0aW9ucyAmJiBvcHRpb25zLmJ5S2V5O1xuICB2YXIgcmV0ID0ge307XG5cbiAgLy8gU3BlY2lhbCBjYXNlIHRvIGhhbmRsZSB0aGUgYCtgIGtleSBzaW5jZSB3ZSB1c2UgaXQgYXMgYSBzZXBhcmF0b3IuXG4gIGhvdGtleSA9IGhvdGtleS5yZXBsYWNlKCcrKycsICcrYWRkJyk7XG4gIHZhciB2YWx1ZXMgPSBob3RrZXkuc3BsaXQoJysnKTtcbiAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgLy8gRW5zdXJlIHRoYXQgYWxsIHRoZSBtb2RpZmllcnMgYXJlIHNldCB0byBmYWxzZSB1bmxlc3MgdGhlIGhvdGtleSBoYXMgdGhlbS5cblxuICBmb3IgKHZhciBrIGluIE1PRElGSUVSUykge1xuICAgIHJldFtNT0RJRklFUlNba11dID0gZmFsc2U7XG4gIH1cblxuICB2YXIgX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiA9IHRydWU7XG4gIHZhciBfZGlkSXRlcmF0b3JFcnJvciA9IGZhbHNlO1xuICB2YXIgX2l0ZXJhdG9yRXJyb3IgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSB2YWx1ZXNbU3ltYm9sLml0ZXJhdG9yXSgpLCBfc3RlcDsgIShfaXRlcmF0b3JOb3JtYWxDb21wbGV0aW9uID0gKF9zdGVwID0gX2l0ZXJhdG9yLm5leHQoKSkuZG9uZSk7IF9pdGVyYXRvck5vcm1hbENvbXBsZXRpb24gPSB0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgdmFyIG9wdGlvbmFsID0gdmFsdWUuZW5kc1dpdGgoJz8nKSAmJiB2YWx1ZS5sZW5ndGggPiAxO1xuXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gdG9LZXlOYW1lKHZhbHVlKTtcbiAgICAgIHZhciBtb2RpZmllciA9IE1PRElGSUVSU1tuYW1lXTtcblxuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEgJiYgIW1vZGlmaWVyICYmICFBTElBU0VTW3ZhbHVlXSAmJiAhQ09ERVNbbmFtZV0pIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5rbm93biBtb2RpZmllcjogXCInICsgdmFsdWUgKyAnXCInKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxlbmd0aCA9PT0gMSB8fCAhbW9kaWZpZXIpIHtcbiAgICAgICAgaWYgKGJ5S2V5KSB7XG4gICAgICAgICAgcmV0LmtleSA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0LndoaWNoID0gdG9LZXlDb2RlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobW9kaWZpZXIpIHtcbiAgICAgICAgcmV0W21vZGlmaWVyXSA9IG9wdGlvbmFsID8gbnVsbCA6IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZGlkSXRlcmF0b3JFcnJvciA9IHRydWU7XG4gICAgX2l0ZXJhdG9yRXJyb3IgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX2l0ZXJhdG9yTm9ybWFsQ29tcGxldGlvbiAmJiBfaXRlcmF0b3IucmV0dXJuKSB7XG4gICAgICAgIF9pdGVyYXRvci5yZXR1cm4oKTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kaWRJdGVyYXRvckVycm9yKSB7XG4gICAgICAgIHRocm93IF9pdGVyYXRvckVycm9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogQ29tcGFyZS5cbiAqL1xuXG5mdW5jdGlvbiBjb21wYXJlSG90a2V5KG9iamVjdCwgZXZlbnQpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIHZhciBleHBlY3RlZCA9IG9iamVjdFtrZXldO1xuICAgIHZhciBhY3R1YWwgPSB2b2lkIDA7XG5cbiAgICBpZiAoZXhwZWN0ZWQgPT0gbnVsbCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gJ2tleScgJiYgZXZlbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIGFjdHVhbCA9IGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnd2hpY2gnKSB7XG4gICAgICBhY3R1YWwgPSBleHBlY3RlZCA9PT0gOTEgJiYgZXZlbnQud2hpY2ggPT09IDkzID8gOTEgOiBldmVudC53aGljaDtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0dWFsID0gZXZlbnRba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoYWN0dWFsID09IG51bGwgJiYgZXhwZWN0ZWQgPT09IGZhbHNlKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoYWN0dWFsICE9PSBleHBlY3RlZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFV0aWxzLlxuICovXG5cbmZ1bmN0aW9uIHRvS2V5Q29kZShuYW1lKSB7XG4gIG5hbWUgPSB0b0tleU5hbWUobmFtZSk7XG4gIHZhciBjb2RlID0gQ09ERVNbbmFtZV0gfHwgbmFtZS50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gIHJldHVybiBjb2RlO1xufVxuXG5mdW5jdGlvbiB0b0tleU5hbWUobmFtZSkge1xuICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICBuYW1lID0gQUxJQVNFU1tuYW1lXSB8fCBuYW1lO1xuICByZXR1cm4gbmFtZTtcbn1cblxuLyoqXG4gKiBFeHBvcnQuXG4gKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNIb3RrZXk7XG5leHBvcnRzLmlzSG90a2V5ID0gaXNIb3RrZXk7XG5leHBvcnRzLmlzQ29kZUhvdGtleSA9IGlzQ29kZUhvdGtleTtcbmV4cG9ydHMuaXNLZXlIb3RrZXkgPSBpc0tleUhvdGtleTtcbmV4cG9ydHMucGFyc2VIb3RrZXkgPSBwYXJzZUhvdGtleTtcbmV4cG9ydHMuY29tcGFyZUhvdGtleSA9IGNvbXBhcmVIb3RrZXk7XG5leHBvcnRzLnRvS2V5Q29kZSA9IHRvS2V5Q29kZTtcbmV4cG9ydHMudG9LZXlOYW1lID0gdG9LZXlOYW1lOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-hotkey/lib/index.js\n");

/***/ })

};
;