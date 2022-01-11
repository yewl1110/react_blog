import Post from './models/post'

export default function createFakeData() {
	const posts = [...Array(40).keys()].map((i) => ({
		title: `포스트#${i}`,
		body: '도톰 도톰 5개월 전 항상 돌려듣는 엔플 최애곡 중 하나 이 노래 꼭 떠야한다 진짜... 54 D Uchil D Uchil 5개월 전 This will forever be my healing song..K-pop stans need to up their game and move onto less hyped groups like n.flying cuz they are pure talent and entertainment..regardless of the views Im proud of these guys for always being their brightest ❤️ 33 Mafer CM Mafer CM 2년 전 N.Flying deserves more love and support!! You guys are really talented!! 2.9천 BusyBee BusyBee 1년 전',
		tags: ['fake', 'data'],
	}))

	Post.insertMany(posts, (err, docs) => {
		console.log(docs)
	})
}
