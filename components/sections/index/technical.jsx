// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Technical"
					preTitle="Hardskills"
					subTitle="As a full-stack developer, I build scalable web applications and deliver end-to-end solutions using modern technologies and best practices."
				/>
				<section className={`${about.content} ${about.container}`}>
					<div className={about.copy}>
						<CopyBlock 
							title="Full-stack expertise"
							icon={[ 'fat', 'chart-network' ]}
							copy="With hands-on experience delivering real-world client projects, I specialize in building complete web solutions from frontend interfaces to backend APIs. My work at DD Technologies has enabled 24K+ impressions and 200+ transactions across various platforms."
							iconClass={about.icon}
							containerClass={about.container}
						/>
						<BadgesBlock 
							title="Tools & Software I work with" 
							copy="From design to deployment, I use industry-standard tools to create efficient workflows and deliver professional results. These are the essential tools in my development arsenal."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Technologies I build with" 
							copy="I love solving complex problems through code, building everything from dynamic frontends to robust backends with database integration. No challenge is too big when you have the right tech stack."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					<div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div>
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software = [
	{ key: 'vscode', 		name: 'VSCode', 			type: 'devicon' },
	{ key: 'figma', 		name: 'Figma', 				type: 'devicon' },
	{ key: 'photoshop', 	name: 'Photoshop', 			type: 'devicon' },
	{ key: 'mailbox', 		name: 'Postman', 			type: 'fas' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'computer-mouse',name: 'Project Management', 	type: 'fas' },
	{ key: 'wordpress', 	name: 'WordPress Admin', 	type: 'devicon' },
	{ key: 'google',		name: 'Google APIs', 		type: 'devicon' },
	{ key: 'stripe',		name: 'Stripe', 			type: 'fas' },
]

const tech	= [
	// Frontend
	{ key: 'react', 		name: 'React.js', 			type: 'devicon' },
	{ key: 'nextjs', 		name: 'Next.js', 			type: 'devicon' },
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'tailwindcss', 	name: 'Tailwind CSS', 		type: 'devicon' },
	{ key: 'sass', 			name: 'SCSS', 				type: 'devicon' },
	
	// Backend
	{ key: 'nodejs', 		name: 'Node.js', 			type: 'devicon' },
	{ key: 'python', 		name: 'Python', 			type: 'devicon' },
	{ key: 'flask', 		name: 'Flask', 				type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'java', 			name: 'Java', 				type: 'devicon' },
	
	// Database & Services
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'firebase', 		name: 'Firebase', 			type: 'devicon' },
	{ key: 'wordpress', 	name: 'WordPress', 			type: 'devicon' },
]