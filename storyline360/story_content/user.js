function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5twFNLNBwXK":
        Script1();
        break;
      case "6puLu9flSFp":
        Script2();
        break;
      case "6aKfd5VSuO4":
        Script3();
        break;
      case "6myjLP7MBgW":
        Script4();
        break;
      case "6bFFWOaeCqP":
        Script5();
        break;
      case "5db1JXc0Zk8":
        Script6();
        break;
      case "6bXkThUbzR8":
        Script7();
        break;
      case "5aIYNaH7k7Y":
        Script8();
        break;
      case "65wGPYkc1oT":
        Script9();
        break;
      case "6GHXHGUKyoh":
        Script10();
        break;
      case "69RgD3tYdrJ":
        Script11();
        break;
      case "6WmgTHpoAE0":
        Script12();
        break;
      case "5mM6lLbgqgB":
        Script13();
        break;
      case "6cvZ1dMiTup":
        Script14();
        break;
      case "6mlFRYoDuG8":
        Script15();
        break;
      case "6mOiVp0UGsO":
        Script16();
        break;
      case "6cI1uTjkPDP":
        Script17();
        break;
      case "6V8RfRRW7yN":
        Script18();
        break;
      case "5p7tPuEodRw":
        Script19();
        break;
      case "6isHtCDKlSA":
        Script20();
        break;
      case "6kUti1aKtrK":
        Script21();
        break;
      case "5dRYF7eytn5":
        Script22();
        break;
      case "5cjyqj2cSI1":
        Script23();
        break;
      case "6m21Rwn2ZGY":
        Script24();
        break;
      case "6fVBoZUqjdl":
        Script25();
        break;
      case "6h9xl98GLCd":
        Script26();
        break;
      case "5t4cvNOpmMf":
        Script27();
        break;
      case "5hp1UpsPOIk":
        Script28();
        break;
      case "6qwDyP5HVMA":
        Script29();
        break;
      case "6Oucy00oluT":
        Script30();
        break;
      case "6PCHkBv1op1":
        Script31();
        break;
      case "5egs5vKnXsF":
        Script32();
        break;
      case "6J4cWVjcftl":
        Script33();
        break;
      case "6eQDDlXqUht":
        Script34();
        break;
      case "5p2OsXriLpX":
        Script35();
        break;
      case "6kaTQdFeOFp":
        Script36();
        break;
      case "6k6L5AAUJXq":
        Script37();
        break;
      case "6hGj4p0PZ9I":
        Script38();
        break;
      case "6cI7mNXhOe5":
        Script39();
        break;
      case "5k8G8fVQ71r":
        Script40();
        break;
      case "6FgdWoTQQSA":
        Script41();
        break;
      case "6bBGu5bChQO":
        Script42();
        break;
      case "6NI7jXsfpn4":
        Script43();
        break;
      case "6CtTSfod0OA":
        Script44();
        break;
      case "6bBh5C30bvI":
        Script45();
        break;
      case "6SgQsMnpQoV":
        Script46();
        break;
  }
}

function Script1()
{
  // Name of the certificate html file
var certFilename = 'start-button.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script2()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script3()
{
  var input_state = 0.5;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script4()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script5()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script6()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script7()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script8()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script9()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script10()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script11()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script12()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script13()
{
  var object = document.querySelectorAll("[data-acc-text='keya']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script14()
{
  var object = document.querySelectorAll("[data-acc-text='keyc']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script15()
{
  var object = document.querySelectorAll("[data-acc-text='keye']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script16()
{
  var object = document.querySelectorAll("[data-acc-text='keyo']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script17()
{
  var object = document.querySelectorAll("[data-acc-text='keyw']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script18()
{
  var object = document.querySelectorAll("[data-acc-text='check']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script19()
{
  var object = document.querySelectorAll("[data-acc-text='clear']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script20()
{
  var object = document.querySelectorAll("[data-acc-text='next']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script21()
{
  var input_state = 1.5;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script22()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script23()
{
  var object = document.querySelectorAll("[data-acc-text='keyt']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script24()
{
  var object = document.querySelectorAll("[data-acc-text='keyc']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script25()
{
  var object = document.querySelectorAll("[data-acc-text='keya']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script26()
{
  var object = document.querySelectorAll("[data-acc-text='keyo']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script27()
{
  var object = document.querySelectorAll("[data-acc-text='keyg']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script28()
{
  var object = document.querySelectorAll("[data-acc-text='check']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script29()
{
  var object = document.querySelectorAll("[data-acc-text='clear']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script30()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script31()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

function Script32()
{
  var input_state = 1;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script33()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script34()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script35()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script36()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script37()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script38()
{
  var object = document.querySelectorAll("[data-acc-text='go']"); 
gsap.fromTo(object,.4, { visible:true,
      scale:1.4,
}, {
      scale:1,
      //ease: RoughEase.ease,
      //ease: Elastic.easeOut,
      //ease: Elastic.easeOut.config(1.75, 1),
      yoyo: true
  });
}

function Script39()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'progress-bar.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script40()
{
  var object = document.querySelectorAll("[data-acc-text='retry']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script41()
{
  var input_state = 2;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script42()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script43()
{
  var object = document.querySelectorAll("[data-acc-text='retry']"); 
gsap.to(object, { 
scale: 1.25,
  opacity: 20,
  duration: 0.8, ease: "expo.out",
  stagger: {
    each: 0.2,
    repeat: -1
  }
});
}

function Script44()
{
  var input_state = 3;

function load_default_state() {
    var certFilename = 'result-screen.html';
    // HTMLCollection of elements of type iFrame
    var iframeElements = document.getElementsByTagName("iframe");
    // Iterate over the iFrameElements HTMLCollection
    for (var i = 0; i < iframeElements.length; i++) {
        /* If src of current iFrame element equals the filename set in variable
            ** certFilename call the generatePDF() function.
            */
        var src = iframeElements[i].getAttribute('src');
        if (src.indexOf(certFilename) != -1) {
            if (typeof iframeElements[i].contentWindow.change_state !== 'undefined' && typeof iframeElements[i].contentWindow.is_rive_loaded !== 'undefined') {
            	if (iframeElements[i].contentWindow.is_rive_loaded == true) {
            		iframeElements[i].contentWindow.change_state(input_state);
	                console.log("loaded done!");
	                return;
            	}
            }
        }
    }

    window.setTimeout(load_default_state, 200);
}

load_default_state()
}

function Script45()
{
  window.focus();
var certFilename = "result-screen.html";

window.addEventListener("blur", () => {
  if (document.activeElement.tagName === "IFRAME") {
  	var src = document.activeElement.getAttribute('src');
    if (src.indexOf(certFilename) != -1) {
	    console.log("clicked");
	    var player = GetPlayer();
	    player.SetVar("is_moved_to_next_slide",true);
    }
  }
});
}

function Script46()
{
  // Name of the certificate html file
var certFilename = 'progress-bar.html';
// HTMLCollection of elements of type iFrame
var iframeElements = document.getElementsByTagName("iframe");
// Iterate over the iFrameElements HTMLCollection
for(var i = 0; i < iframeElements.length; i++){
/* If src of current iFrame element equals the filename set in variable
    ** certFilename call the generatePDF() function.
    */
var src = iframeElements[i].getAttribute('src');
if (src.indexOf(certFilename) !=-1) {
        iframeElements[i].contentWindow.fireup();
    }
 }
}

