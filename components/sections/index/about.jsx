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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About / >
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
    <Container spacing={['verticalXXXLrg']}>
        <SectionTitle
            title="About Me"
            preTitle="Synopsis"
            subTitle="With a diverse skill set encompassing web development, UX/UI design, and digital marketing, I am a versatile professional passionate about crafting engaging online experiences."
        />
        <section className={about.content}>
            <div className={about.image}>
                <img src="/img/samp1.jpg" alt="photo"/>
                {/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
            </div>
            <div className={about.copy} >
                <CopyBlock 
                    title="Soft Skills & Experience"
                    containerClass={about.container}
                    iconClass={about.icon}
                    icon={[ 'fat', 'ear-listen' ]}
                    copy="In addition to my technical expertise in web development and design, I bring strong leadership, time management, and multitasking skills, developed through my experience as a freelancer and as a student pursuing a B.Tech in Computer Science. Outside of my academic and professional pursuits, I enjoy staying active through activities like hiking and playing basketball. I am confident in my ability to deliver high-quality work and make a positive impact in any project I undertake."
                />
                <BadgesBlock 
                    title="Passion for Innovation" 
                    containerClass={about.container}
                    list={methods} 
                    fullContainer="fullContainer"
                    block="methods" 
                    icon="fingerprint"
                    copy="One of the most rewarding aspects of my work is the opportunity to plan and execute the architecture of a website or digital project. Whether it's developing user-friendly interfaces or devising effective marketing strategies, I thrive on creating seamless and engaging digital experiences for users."
                    //invertedColor="invertedColor"
                    headerIcon={`${about.icon}`}
                />
            </div>
        </section>	
    </Container>
</Section>

	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'Web Development', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'UX/UI Design Skills', 	type: 'fad' },
	{ key: 'window', 			name: 'Multitasking Proficiency', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Digital Marketing Acumen', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Effective Time Management', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Leadership Abilities', 		type: 'fad' },
]