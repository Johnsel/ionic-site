export var styles = ['.custom-spinner-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  margin-bottom: 20px;\n}\n\n.custom-spinner-box[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  position: relative;\n  box-sizing: border-box;\n  border: 4px solid #000;\n  width: 60px;\n  height: 60px;\n  animation: spin 3s infinite linear;\n}\n\n.custom-spinner-box[_ngcontent-%COMP%]:before {\n  content: \'\';\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-sizing: border-box;\n  border: 4px solid #000;\n  width: 40px;\n  height: 40px;\n  animation: pulse 1.5s infinite ease;\n}\n\n.wp[_ngcontent-%COMP%]   .custom-spinner-box[_ngcontent-%COMP%], .wp[_ngcontent-%COMP%]   .custom-spinner-box[_ngcontent-%COMP%]:before {\n  border-color: #fff;\n}\n\n@-webkit-keyframes pulse {\n  50% {\n    border-width: 20px;\n  }\n}\n@keyframes pulse {\n  50% {\n    border-width: 20px;\n  }\n}\n\n@-webkit-keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n@keyframes spin {\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}'];
