(（）=> {
	console.log('fired!');

	function logKeyCode(event) {
		debugger;
	}
  window.addEventListener("Keydown",logKeyCode)
})();