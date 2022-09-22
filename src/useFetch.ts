import { useState, useEffect } from 'react'
import paginate from './utils'
import { FollowerData } from "./models";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([] as FollowerData[][]);

	const getProducts = async () => {
		const response = await fetch(url)
		const data: FollowerData[] = await response.json()
		setData(paginate(data))
		setLoading(false)
	}

	useEffect(() => {
		getProducts()
	}, [])
	return { loading, data }
}
