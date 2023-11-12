import { useState } from "react";
import React, {Component} from 'react';
import '../style.css';

const allPeople = [
{ name: "Emaan", role: "Co-President", checked: false },
{ name: "Raida", role: "Co-President", checked: false },
]

export const Checkbox = ({ isChecked, label, role, checkHandler, index }) => {
	console.log({ isChecked })
	return (
		<section class="card">
			<label htmlFor={`checkbox-${index}`}>
				<input
					type="checkbox"
					id={`checkbox-${index}`}
					checked={isChecked}
					onChange={checkHandler}
				/>
				<span class="profile">
					<h1>{label}</h1>
					<img
						src= {`../src/profiles/StockPhoto.png`}
						alt={label}
						width="250"
						height="250"
					/>
					<p>Hi I'm {label}</p>
				</span>
				<figure>
					<img
						src= {`../src/profiles/StockPhoto.png`}
						alt={label}
						width="500"
						height="500"
					/>
					<figcaption>{label}</figcaption>
				</figure>
				<p>{role}</p>
			</label>
		</section>
	)
}

function Presidents() {
	const [people, setPerson] = useState(allPeople)

	const updateCheckStatus = index => {
		setPerson(
			people.map((person, currentIndex) =>
				currentIndex === index
					? { ...person, checked: !person.checked }
					: { ...person, checked: false }
			)
		)
	}

	return (
		<section class="cards">
			{people.map((person, index) => (

				<Checkbox
					key={person.name}
					isChecked={person.checked}
					checkHandler={() => updateCheckStatus(index)}
					label={person.name}
					role={person.role}
					index={index}
				/>
			))}
		</section>
	)
}


export default Presidents;
