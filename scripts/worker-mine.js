importScripts("imageManips-mine.js");

this.onmessage = function(e){
	var imageData = e.data.imageData;
	var type = e.data.type;
	var a =[], b=[], g=[], i, imageData, length, pixel=[], r=[];
	try {
			length = imageData.data.length / 4;
			var manipulate = getManipFunc(type);
	    //for (i = j = 0, ref = length; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
	    for (i = 0; i<length; i++ ) {
	      r = imageData.data[i * 4 + 0];
	      g = imageData.data[i * 4 + 1];
	      b = imageData.data[i * 4 + 2];
	      a = imageData.data[i * 4 + 3];
	      pixel = manipulate(r, g, b, a);
	      imageData.data[i * 4 + 0] = pixel[0];
	      imageData.data[i * 4 + 1] = pixel[1];
	      imageData.data[i * 4 + 2] = pixel[2];
	      imageData.data[i * 4 + 3] = pixel[3];
	    }
	    postMessage(imageData);
	}catch (e) {
	    function ManipulatorException(message) {
	      this.name = "ManipulationException";
	      this.message = message;
	    };
	    throw new InverterException('Image manipulation error');
	    postMessage(undefined);
	}
};
