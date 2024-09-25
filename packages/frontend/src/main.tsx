import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { PortalProvider } from '@blueprintjs/core';
import './shared/styles/global-styles.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import { ThemeProvider } from '@emotion/react';
import AppRouter from './router/router';
import { theme } from '~shared/styles/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<PortalProvider portalClassName="my-custom-class">
		<ThemeProvider theme={theme}>
			<AppRouter />
		</ThemeProvider>
	</PortalProvider>,
);
