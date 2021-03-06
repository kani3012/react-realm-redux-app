import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import NoteMainScreen from './components/NoteMainScreen';
import NoteAdd from './components/NoteAdd';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene
                    key="noteMain"
                    component={NoteMainScreen}
                    title="StickyNotes"
                    rightTitle="Add"
                    onRight={() => Actions.noteAdd()}
                    initial
                />
                <Scene
                    key="noteAdd"
                    component={NoteAdd}
                    title="Add Note"
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;