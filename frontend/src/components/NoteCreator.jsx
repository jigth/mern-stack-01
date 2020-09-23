/**
 * This component is used for both Notes Creation and Updating depending on the route!
 * If route hasn't an ID then this component will be rendered in "Creation Mode"
 * If route has an ID in url params, then this component will be rendering in "Updating Mode"
 * (i.e: Load the data of specified ID to be edited!)
 */

import React, { Component } from 'react';
//import { DatePicker } from 'react-date-picker';
// TODO: Use React-Datepicker here to capture user's date
// TODO: To get url params just use this React Router instruction "this.props.match.params"
// TODO: Using the previous step, create "Creation Mode" and "Updating Mode" in this component!

export default class NoteCreator extends Component {
    render() {
        return (
            <div>
                NOTE CREATOR
            </div>
        )
    }
}
