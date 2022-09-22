import { MouseEvent, useEffect, useState } from 'react'
import { useFetch } from "./useFetch";
import { FollowerData } from "./models";
import Follower from "./Follower";

function App() {
	const { loading, data } = useFetch();
	const [page, setPage] = useState(0);
	const [followers, setFollowers] = useState([] as FollowerData[]);

	useEffect(() => {
		if (loading) return
		setFollowers(data[page]);
	}, [loading, page, data]);

	const handlePage = (index: number) => {
		setPage(index);
	}

	const switchPage = (e: MouseEvent<HTMLButtonElement>) => {
		if (e.currentTarget.classList.contains('prev-btn')) {
			setPage(page - 1);
		}
		if (e.currentTarget.classList.contains('next-btn')) {
			setPage(page + 1);
		}
	}

	return (
		<main>
			<div className='section-title'>
				<h1>{loading ? 'loading...' : 'pagination'}</h1>
				<div className='underline'></div>
			</div>
			<section className='followers'>
				<div className='container'>
					{followers.map((follower) => {
						return <Follower key={follower.id} {...follower} />
					})}
				</div>
				{!loading && (
					<div className='btn-container'>
						<button
							className='prev-btn'
							onClick={(e) => switchPage(e)}
							disabled={page === 0}
						>
							prev
						</button>
						{data.map((item, index) => {
							return (
								<button
									key={index}
									className={`page-btn ${index === page ? 'active-btn' : null}`}
									onClick={() => handlePage(index)}
								>
									{index + 1}
								</button>
							)
						})}
						<button
							className='next-btn'
							onClick={(e) => switchPage(e)}
							disabled={page === data.length - 1}
						>
							next
						</button>
					</div>
				)}
			</section>
		</main>
	)
}

export default App;
