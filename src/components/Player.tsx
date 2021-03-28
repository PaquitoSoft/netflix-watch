import * as React from 'react';
import { PlayerProps } from '../models/proptypes';

const Player: React.FC<PlayerProps> = props => (
	<div>
		<iframe
			className="Player"
			width="560"
			height="315"
			src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0"
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	</div>
);
	
export default Player;