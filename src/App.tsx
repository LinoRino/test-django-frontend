import { useState } from 'react';
import reactLogo from './assets/react.svg';
import {useQuery} from '@tanstack/react-query'
import './App.css';
import { Hdr } from './lib/layout';

function App() {
	type Article = { body: string; id: number; title: string };
	const [count, setCount] = useState<Article[]>([]);
	const { isLoading, error, data } = useQuery({
		queryKey: ['articles'],
		queryFn: async()=>
			await fetch('http://127.0.0.1:8000/blog/api/articles')
			.then((res) => res.json())
		
	})
	if (isLoading) return <p>Loading...</p>
	console.log(data);
	return (
		<div className="App">
			<Hdr />
			<div className="flex h-full">
				<div className='bg-slate-600 rounded-r-lg h-[calc(100%_-_4rem)] py-3 w-64 px-4 text-white [&_li]:mb-2'>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li><a href="">Showcase</a></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
				<main></main>
			</div>
		</div>
	);
}

export default App;
