import Input from './input'

let app = {};

addEventListener('DOMContentLoaded', function () {
    app.input = new Input();
});
// export default app;
window.app = app;