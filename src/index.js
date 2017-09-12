import _ from 'lodash';
import printMe from './print';
import './style.css';

function component() {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join([ 'Hello', 'webpack' ], ' ');


    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console';
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
//document.body.appendChild(component());

let element = component(); // Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        //printMe();
        document.body.removeChild(element); // Re-render the "component" to update the click handler
        element = component();
        document.body.appendChild(element);
    });
}