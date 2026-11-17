export type Project = {
	title: string;
	description: string;
	stack: string;
	year: number;
	href?: string;
};

export const projects: Project[] = [
	{
		title: 'Sistem Absensi Kelas',
		description: 'Aplikasi pencatatan kehadiran siswa dengan rekap otomatis per bulan.',
		stack: 'SvelteKit',
		year: 2026,
		href: 'https://github.com/nama-kamu/absensi'
	},
	{
		title: 'Landing Page UKM',
		description: 'Halaman profil organisasi sekolah dengan formulir pendaftaran anggota.',
		stack: 'Tailwind',
		year: 2026,
		href: 'https://github.com/nama-kamu/ukm'
	},
	{
		title: 'Serverless Ticketing',
		description: 'as the name suggests.',
		stack: 'AWS',
		year: 2026,
		href: 'https://github.com/handipradana/lks-serverless/blob/main/README.md'
	}
];

export const profile = {
	bio: 'cloud computing is love, cloud computing is life, cloud computing IS the new meta <3',
	facts: [
		{ label: 'FOKUS', value: 'Antarmuka web & sistem informasi' },
		{ label: 'STACK', value: 'SvelteKit · TypeScript · Tailwind' },
		{ label: 'LOKASI', value: 'Indonesia' },
		{ label: 'STATUS', value: 'Terbuka untuk kolaborasi' }
	],
	skills: ['CLOUD ENGINEERING WITH AWS,Python']
};
