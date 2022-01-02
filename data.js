// TV Show Characters
const characters = [
    {
        id: 1,
        name: 'Bruce Wayne / Batman',
        VA: 'Kevin Conroy',
        portraitURL: 'https://i.pinimg.com/originals/85/4b/0b/854b0b7492d9e01cd0116b4b65456a4c.jpg'
    },
    {
        id: 2,
        name: 'Commissioner James Gordon',
        VA: 'Bob Hastings',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddvsr9q-5592af1e-10bd-4dfd-a12f-ad3479978ab9.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNTUxYjM1NTEtNTY4MS00MDQ5LWFiYzEtMDg3Zjc5NzJiMjAzXC9kZHZzcjlxLTU1OTJhZjFlLTEwYmQtNGRmZC1hMTJmLWFkMzQ3OTk3OGFiOS5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mThmm-D9hb7uvx6A_3ySpYbJrY6Y252zK31EqYYxNmI'
    },
    {
        id: 3,
        name: 'Catwoman / Selina Kyle',
        VA: 'Adrienne Barbeau',
        portraitURL: 'https://www.denofgeek.com/wp-content/uploads/2019/11/batman-the-animated-series-catwoman-adrienne-barbeau.jpeg'
    },
    {
        id: 4,
        name: 'Red Claw',
        VA: 'Kate Mulgrew',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddeomsu-31b125a7-99f3-4b6a-9b06-cb6dc785c890.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGRlb21zdS0zMWIxMjVhNy05OWYzLTRiNmEtOWIwNi1jYjZkYzc4NWM4OTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9fNqruXrN_8MGpI2mcAi30qaBgE57ttu4-5p3vQzl74'
    },
    {
        id: 5,
        name: 'Harvey Dent',
        VA: 'Richard Moll',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/de439ht-b8f953f1-dcae-445e-855c-ac86c56ac9cd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGU0MzlodC1iOGY5NTNmMS1kY2FlLTQ0NWUtODU1Yy1hYzg2YzU2YWM5Y2QucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1HC90h8Pm4AXpCZOkrv-epOhQZXF0eFiBCyXlllv_YQ'
    },
    {
        id: 6,
        name: 'Alfred Pennyworth',
        VA: 'Efrem Zimbalist Jr.',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddh9sql-f0637e65-4209-4ff9-bd57-595d86e4311b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGRoOXNxbC1mMDYzN2U2NS00MjA5LTRmZjktYmQ1Ny01OTVkODZlNDMxMWIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ufaZ4EoskW87wVBzpX62hSeF6lTyTqccC1-IXvdO_cE'
    },
    {
        id: 7,
        name: 'Man-Bat',
        VA: 'Marc Singer',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/dcr2j8z-56b5d344-3173-436b-b22d-c447027cd8f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGNyMmo4ei01NmI1ZDM0NC0zMTczLTQzNmItYjIyZC1jNDQ3MDI3Y2Q4ZjQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LkXvwey_x_aRHLF96QJ84L1kAsjiXclAMrBYFEqoH-8'
    },
    {
        id: 8,
        name: 'Mr. Freeze',
        VA: 'Michael Ansara',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/dcmrsel-5604e87c-4f23-4ff1-b243-bd4719a8a900.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGNtcnNlbC01NjA0ZTg3Yy00ZjIzLTRmZjEtYjI0My1iZDQ3MTlhOGE5MDAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.V7JMOkWpRdCH2tvNs4vkmzO3L_rdqs1HeVZ_ERXHX9M'
    },
    {
        id: 9,
        name: 'Summer Gleeson',
        VA: 'Mari Devon',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/dcs7sbi-95d68309-36e3-42ba-a820-1228430d34df.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGNzN3NiaS05NWQ2ODMwOS0zNmUzLTQyYmEtYTgyMC0xMjI4NDMwZDM0ZGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4e3XOyKttNN-94_rVtXCCMdoG2t0nfitm92u5E09rEo'
    },
    {
        id: 10,
        name: 'Roland Daggett',
        VA: 'Ed Asner',
        portraitURL: 'https://64.media.tumblr.com/6ef7d344e2de6fc4f7b13d72c8f2a455/tumblr_inline_pr3fhqpPoq1rjrtoy_1280.png'
    },
    {
        id: 11,
        name: 'Lucius Fox',
        VA: 'Brock Peters',
        portraitURL: `https://pbs.twimg.com/media/E5RDNMTXEAIXdYd.jpg`
    },
    {
        id: 12,
        name: 'Clayface',
        VA: 'Ron Perlman',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddgsrve-6141a210-ec60-4466-9a1b-1fc726c1132b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGRnc3J2ZS02MTQxYTIxMC1lYzYwLTQ0NjYtOWExYi0xZmM3MjZjMTEzMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rOF6mTfvQHLqzQJRF3_db0bgFtzhSoe-uQrmUMzvx1U'
    },
    {
        id: 13,
        name: 'Detective Harvey Bullock',
        VA: 'Robert Costanzo',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddbzmgq-622fe2a3-b7fd-4198-a4a0-6f6677d958af.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGRiem1ncS02MjJmZTJhMy1iN2ZkLTQxOTgtYTRhMC02ZjY2NzdkOTU4YWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zHuahhSiJ6l0GNhWXb-R3nfKj1JvaPgFZme15WvX1D8'
    },
    {
        id: 14,
        name: 'Rupert Thorne',
        VA: 'John Vernon',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddd6izg-f6d232dd-fca9-4e4a-a7c1-6494e5bdb89c.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGRkNml6Zy1mNmQyMzJkZC1mY2E5LTRlNGEtYTdjMS02NDk0ZTViZGI4OWMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.A2kRRN9oedsgLcQuWAKbWxGLz_XA54N7CZ9ySmraY4c'
    },
    {
        id: 15,
        name: 'The Joker',
        VA: 'Mark Hamill',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/ddfostg-8b8db4a2-edb6-4695-9fb5-6d55837da29a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGRmb3N0Zy04YjhkYjRhMi1lZGI2LTQ2OTUtOWZiNS02ZDU1ODM3ZGEyOWEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U3urSYF-jLyDjxn6WuAG_ELgpc2D0pwMeaUly2GDaA4'
    },
    {
        id: 16,
        name: 'Harley Quinn',
        VA: 'Arleen Sorkin',
        portraitURL: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/551b3551-5681-4049-abc1-087f7972b203/dcqhmxc-b942eb7f-6b58-4571-a6f8-bfdc90122749.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1MWIzNTUxLTU2ODEtNDA0OS1hYmMxLTA4N2Y3OTcyYjIwM1wvZGNxaG14Yy1iOTQyZWI3Zi02YjU4LTQ1NzEtYTZmOC1iZmRjOTAxMjI3NDkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.W0g-Y1KMHVaoe-lq6hsqzx6e86C6DSxZX5kY0wcWeh0'
    }
];

// TV Show Episodes
const episodes = [
    {
        id: 1,
        season: 1,
        episode: 1,
        name: 'The Cat and the Claw Part I',
        airDate: '1992-09-05T00:00:00.000Z',
        runtime: 22,
        summary: 'Catwoman and Batman join forces in an attempt to foil the evil forces of a terrorist by the name of Red Claw.',
        characters: [1,2,3,4],
        director: 'Kevin Altieri',
        titleSplash: 'https://i0.wp.com/www.tor.com/wp-content/uploads/2014/12/01.jpg?fit=540%2C%209999&crop=0%2C0%2C100%2C405px'
    },
    {
        id: 2,
        season: 1,
        episode: 2,
        name: 'On Leather Wings',
        airDate: '1992-09-06T00:00:00.000Z',
        runtime: 22,
        summary: 'Batman finds himself tangling with a Jekyll-and-Hyde bat creature after it attacks a night watchman and the police wage a war on the Dark Knight.',
        characters: [1,2,5,6,7],
        director: 'Kevin Altieri',
        titleSplash: 'https://64.media.tumblr.com/eb3c0476529379f72736192129de5be5/52fbc096e19e7944-a3/s1280x1920/13615bf485dad92b1b18f8bc14fd9eb1a8b3afbc.png'
    },
    {
        id: 3,
        season: 1,
        episode: 3,
        name: 'Heart of Ice',
        airDate: '1992-09-07T00:00:00.000Z',
        runtime: 22,
        summary: 'Batman must stop a vengeful Mr. Freeze from fulfilling his vendetta against a callous businessman.',
        characters: [1,6,8,9],
        director: 'Bruce Timm',
        titleSplash: 'https://m.media-amazon.com/images/M/MV5BYTcwYzdlOTctNmRmMS00ODkxLThjZDgtNDRiMzMwNTgzZWFhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg'
    },
    {
        id: 4,
        season: 1,
        episode: 4,
        name: 'Feat of Clay Part I',
        airDate: '1992-09-08T00:00:00.000Z',
        runtime: 22,
        summary: 'A disfigured actor is forced to frame Bruce Wayne.',
        characters: [1,6,9,10,11,12],
        director: 'Dick Sebast',
        titleSplash: 'https://www.denofgeek.com/wp-content/uploads/2017/08/batman_animated_essential_feat_of_clay.jpg'
    },
    {
        id: 5,
        season: 1,
        episode: 5,
        name: 'Feat of Clay Part II',
        airDate: '1992-09-09T00:00:00.000Z',
        runtime: 22,
        summary: 'Forcibly overdosed on a shapechanging substance, Matt Hagan has become the shapeshifting monster, Clayface, and now wants revenge on Roland Dagget.',
        characters: [1,6,9,10,11,12],
        director: 'Kevin Altieri',
        titleSplash: 'https://m.media-amazon.com/images/M/MV5BNGQzNzZmNTgtYmJkZS00MzFlLTk0Y2YtOWUxZTg5M2FiMWM5XkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_.jpg'
    },
    {
        id: 6,
        season: 1,
        episode: 6,
        name: `It's Never Too Late`,
        airDate: '1992-09-10T00:00:00.000Z',
        runtime: 22,
        summary: 'Batman intervenes in a gang war and tries to convince the older of two rival bosses to change his ways.',
        characters: [1,2,13,14],
        director: 'Boyd Kirkland',
        titleSplash: 'https://m.media-amazon.com/images/M/MV5BYzU4OWE4ZDMtODI3YS00NjZlLWFkMDgtMzFiMjVkZmZlMWE1XkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_.jpg'
    },
    {
        id: 7,
        season: 1,
        episode: 7,
        name: `Joker's Favor`,
        airDate: '1992-09-11T00:00:00.000Z',
        runtime: 22,
        summary: 'An ordinary man finds himself forced to assist The Joker in one of his crimes.',
        characters: [1,2,6,13,15,16],
        director: 'Boyd Kirkland',
        titleSplash: 'https://m.media-amazon.com/images/M/MV5BODY0MmZlYmEtOWExMC00ZGFhLWEyZmEtZjFlZGE1ZjBjZTY5XkEyXkFqcGdeQXVyNTQ0NjQzNTE@._V1_.jpg'
    },
];

module.exports = {
    episodes,
    characters
};