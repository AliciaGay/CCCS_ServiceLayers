import React from 'react';
import ReactDOM from 'react-dom';
import { AutoAddressfill } from '@mapbox/search-js-react';
 
const ACCESS_TOKEN = "pk.eyJ1IjoiYWxpY2lhc29tYTE2OCIsImEiOiJjbDcyYjZoNDgwd3VvM29yMW1qZDYzdGR4In0.BqHDL3zE9y73D1l4d_UeCQ";

let autfillCollection;
letminimap;

function showMap() {
    const el = document.getElementById("minimap-container");
    el.classList.remove;
}

function App() {
    return (
        <form>
            <input 
                name="date" placeholder="date" type="text"/>
            <AddressAutofill accessToken="pk.eyJ1IjoiYWxpY2lhc29tYTE2OCIsImEiOiJjbDcyYjZoNDgwd3VvM29yMW1qZDYzdGR4In0.BqHDL3zE9y73D1l4d_UeCQ">
            <input 
                name="address" placeholder="Address" type="text" 
                autoComplete="address-line1" />
            </AddressAutofill>
            <input
                name = "violation" placeholder = "violation" type = "text"
                />
                 
            </form>
            );
        }
        
        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
            document.getElementById('root')
        );