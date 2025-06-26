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
            subTitle="As a full-stack developer with hands-on experience in real-world deployments, I focus on building scalable, responsive, and user-focused web applications using modern JavaScript frameworks."
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
                    icon={[ 'far', 'code' ]}
copy="My experience spans client-facing full-stack projects, API integrations, and UI/UX implementations using React, Next.js, Node.js, and Flask. I’ve led product builds from scratch under DDTechnologies, collaborated with peers on live deployments, and delivered custom tools like billing apps and data scrapers. I'm detail-oriented, quick to learn, and committed to writing clean, maintainable code."
                />
                <BadgesBlock 
                    title="Passion for Innovation" 
                    containerClass={about.container}
                    list={methods} 
                    fullContainer="fullContainer"
                    block="methods" 
                    icon="rocket-launch"
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

const methods = [
  { key: 'globe', name: 'Full-Stack Web Development', type: 'far' },
  { key: 'code', name: 'React & Next.js Expertise', type: 'far' },
  { key: 'server', name: 'Backend API Integration', type: 'fad' },
  { key: 'database', name: 'MongoDB & Firebase Experience', type: 'far' },
  { key: 'terminal', name: 'Python Scripting & Automation', type: 'far' },
  { key: 'clock', name: 'Project Execution Under Deadlines', type: 'far' }
];
