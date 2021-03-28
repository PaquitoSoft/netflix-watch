import * as React from 'react';
import { PiletApi } from '@paquitosoft/netflix-piral';
import MovieTile from './components/MovieTile';
import { ToggleProps } from './models/proptypes';

import './style.scss';

export function setup(app: PiletApi) {
  // app.showNotification('Hello from Piral!', {
  //   autoClose: 2000,
  // });
  // app.registerMenu(() =>
  //   <a href="https://docs.piral.io" target="_blank">Documentation</a>
  // );
  // app.registerTile(() => <div>Welcome to Piral!</div>, {
  //   initialColumns: 2,
  //   initialRows: 1,
  // });

	const Toggle: React.FC<ToggleProps> = props => <app.Extension name="ListToggle" params={props} />;
	app.registerExtension('MovieTile', props => <MovieTile {...props.params} Toggle={Toggle} />)

	const WatchPage = React.lazy(() => import('./components/WatchPage'));
	app.registerPage('/watch/:media_type/:video_id', WatchPage);
}
