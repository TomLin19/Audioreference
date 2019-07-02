(()=> {
	console.log('fired!');

	function logKeyCode(event) {
		//debugger;//
		//event is an object  that is generated byany event
		//it contains all of the info about the event,what 
		//elements triggered it,where it occurred on the page
		console.log(event.keyCode);


       const currentKey = document.querySelector(`div[data-key="${event.keyCode}"]`);

        if(!currentKey){return;}
        	

        	currentKey.classlist.add('playing');


        	let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        	currentAudioClip.currentTime=0;
        	currentAudioClip.play();
        	//also play the audio
        }
        
        // currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        
        //bang operator) is a test for a  falsy 
       // if (!currentAudioClip) {
        	//return;
        	
        //}else {
        	//there ia
        	//currentAudioClip.currentTime=0;
        	//currentAudioClip.play();
       // }
       

	}
	

	//function resetSound(event) {
		//let currentAudioClip = document.querySelector(`audio[data-key="${event.keyCode}"]`);

		//if (!currentAudioClip) {
		//	return;
		//}else{
      //  currentAudioClip.currentTime= 0;
  //  }
	//}

	//try to get the keyboard keypress events
  function removePlayingClass(event){
  	//listen  for  the trasntion to end  and  then remove the playing 
  	//need a transition  that only  fires once  so  that  i  only run this   function once =>tranction?
  	//might work
  	if (event.propertyName !=="transform"){return;} 
  		//event.target is the  target of the  current event ->in this  case the div, because that's the
  		//transitioning
  		console.log('transform transition is done');
  		event.target.classList.remove('playing');

  	}
  	const keys = Array.from(document.querySelectorAll('.key'));
	keys.forEach(key=>key.addEventListener('transitioned', removePlayingClass));
  	
  
  window.addEventListener("keydown",logKeyCode);
  //window.addEventListener("keyup", resetSound);
})();