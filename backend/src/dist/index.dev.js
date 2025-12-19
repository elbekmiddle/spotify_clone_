"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _userRoute = _interopRequireDefault(require("./routes/user.route.js"));

var _adminRoute = _interopRequireDefault(require("./routes/admin.route.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var app = (0, _express["default"])();
var PORT = process.env.PORT;
app.use('/api/users', _userRoute["default"]); // app.use('/api/auth', authRoutes)

app.use('/api/admin', _adminRoute["default"]); // app.use('/api/songs', songRoutes)
// app.use('/api/albums', albumRoutes)
// app.use('/api/stats', albumRoutes)

app.listen(PORT, function () {
  console.log("spotify clone serveri ishga tushdi port " + PORT);
});