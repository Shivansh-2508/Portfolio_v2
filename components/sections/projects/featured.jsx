import { useEffect } from 'react'
import { m, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import FeaturedProject from '../../blocks/projects/featured'
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'

import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProjects() {

	const controls = useAnimation();
	const { ref, inView } = useInView({
		"threshold": 0.25,
		"triggerOnce": false
	})

	useEffect(() => {
		if (inView) { controls.start("visible") }
		if (!inView) { controls.start("hidden") }
	}, [controls, inView])

	return (
		<Section classProp={css.hasBg} ref={ref} animate={controls}>
			<Container spacing={'verticalXXLrg'}>
				<SectionTitle
					title="Featured Projects"
					preTitle="Web dev Full Stack"
					subTitle="Focused on the experience, driven by the engineering."
				/>
				{content.map((data, index) => {
					return (
						<FeaturedProject content={data} index={index} key={index} />
					)
				})}
			</Container>
			<div className={css.bgContainer}>
				<span className={css.orbitalBg}>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
					<span class={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight} ${css.heroOrbital}`}></span></span>
				</span>
				<span className={css.afterGlowBg}></span>
			</div>
		</Section>
	)
}
