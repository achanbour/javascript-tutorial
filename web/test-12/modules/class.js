'use strict';

function MessageClass(message) {
    this.message = message;
}

MessageClass.prototype.printMessage = function () {
    console.log(this.message);
};


// Export the class as default (one export per module)
// export { MessageClass as default };

// This line is equivalent (notice the lack of curly braces) to the previous line:
export default MessageClass;
