import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/styles';
import {theme} from "./theme/index"
import { App } from './App';

ReactDOM.render(
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>
, document.getElementById("root"));