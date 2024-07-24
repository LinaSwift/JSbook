let browser;

if (browser === "edge") {
  alert("You've got the Edge!");
} else if (
  browser === "chrome" ||
  browser === "safari" ||
  browser === "opera" ||
  browser === "firefox"
) {
  alert("'Okay we support these browsers too'");
} else {
  alert("We hope that this page looks ok!");
}
