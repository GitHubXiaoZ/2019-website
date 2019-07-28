//import
import React, { Component } from "react";

/* class: Error_404
 * @no params
 * 404 page
 */
class Error_404 extends Component {
    //renders 404 page
    render() {
        return (
            <div className="404">
            <h2>404</h2>
            <p>Page not found.</p>
            </div>
        );
    }
}
//exports 404 page
export default Error_404;