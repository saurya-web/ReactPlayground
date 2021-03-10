import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Employees from "../Employee/employees";
import UseRefExample from "../UseRefExamples/useRefExample"
import Handsontable from '../Handontable/handsontable'
import CallForwardRef from '../ForwardRefExamples/callForwardRef'
import InteractWithRedux from '../ReduxStoreInteraction/interactWithRedux';
import Navbar from '../navbar';

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/CallForwardRef" component={CallForwardRef} />
                <Route path="/InteractWithRedux" component={InteractWithRedux} />
                <Route path="/UseRefExample" component={UseRefExample} />
                <Route path="/Handsontable" component={Handsontable} />
                <Route path="/Employees" component={Employees} />
            </Switch>
        </BrowserRouter>
    )
}
