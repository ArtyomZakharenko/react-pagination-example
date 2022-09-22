import { FollowerData } from "./models";

const Follower = ({ avatar_url, html_url, login }: FollowerData) => {
	return (
		<article className='card'>
			<img src={avatar_url} alt={login} />
			<h4>${login}</h4>
			<a href={html_url} className='btn'>
				view profile
			</a>
		</article>
	)
}

export default Follower
