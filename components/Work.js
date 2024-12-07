import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'

export const Skills = ({ title, cards }) => {
	return (
		<div id="skills" className="bg-secondary py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							link={value.link}
							listlinks={value.listlinks} />
					))}
				</div>
			</div>
		</div>
	);
}

export const Projects = ({ title, cards }) => {
	return (
		<div id="projects" className="bg-primary py-5 px-5">
			<div className="container">
				<h1 className="text-light fw-bold">Projects</h1>
				<div className="d-flex flex-row flex-wrap justify-content-center">
					{cards.map((value, index) => (
						<Card
							key={index}
							title={value.title}
							description={value.description}
							icons={value.icons}
							listlinks={value.listlinks} />
					))}
				</div>
				{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			</div>
		</div>
	);
}

export const Card = ({ title, description, icons, listlinks }) => {
	return (
		<div className="card py-3 px-3 mx-2 my-3 card-work">
			<h4 className="text-primary">{title}</h4>

			{/* Description now supports HTML content */}
			<div
				className="text-dark card-description"
				dangerouslySetInnerHTML={{ __html: description }}
			></div>

			<div className="text-end">
				{/* Icons Section */}
				{icons &&
					icons.map((value, index) => (
						<Link key={index} href={value.link}>
							<a target="_blank" rel="noreferrer" className="hover-icon">
								<FontAwesomeIcon
									className="icon-style mx-1"
									icon={value.icon}
									size="2x"
								/>
							</a>
						</Link>
					))}

				{/* List Links Section */}
				<div className="list-links-container">
					{listlinks &&
						listlinks.map((linkObj, index) => (
							<div
								key={index}
								className={`d-flex align-items-center mb-2 ${linkObj.link ? "hover-link-container" : "unclickable-link"
									}`}
							>
								{/* Icon */}
								<FontAwesomeIcon
									icon={linkObj.icon}
									size="2x"
									className="icon-style me-2"
								/>

								{/* Text */}
								{linkObj.link ? (
									<Link href={linkObj.link}>
										<a
											target="_blank"
											rel="noreferrer"
											className="hover-link"
										>
											{linkObj.title}
										</a>
									</Link>
								) : (
									<span className="unclickable-text">{linkObj.title}</span>
								)}
							</div>
						))}
				</div>
			</div>
		</div>
	);
};
