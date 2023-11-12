import { useState } from "react";
import React, {Component} from 'react';
import '../style.css';

const allPeople = [
{ name: "Rimmy", role: "Director of Graphics", checked: false },
]

export const Checkbox = ({ isChecked, label, role, checkHandler, index }) => {
	console.log({ isChecked })
	return (
		/* add 9 to the indexes since there are 9 previous checkboxes */
		<section class="card">
			<label htmlFor={`checkbox-${index+9}`}>
				<input
					type="checkbox"
					id={`checkbox-${index+9}`}
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

function People() {
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


export default People;
