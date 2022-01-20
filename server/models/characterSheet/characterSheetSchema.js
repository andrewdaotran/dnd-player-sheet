const characterSheetOptions = {
	// stats: {
	// 	type: [{ type: { String } }],
	// 	default: [
	// 		{
	// 			strength: {
	// 				stat: 0,
	// 				savingThrow: 0,
	// 			},
	// 		},
	// 		{
	// 			dexterity: {
	// 				stat: 0,
	// 				savingThrow: 0,
	// 			},
	// 		},
	// 		{
	// 			constitution: {
	// 				stat: 0,
	// 				savingThrow: 0,
	// 			},
	// 		},
	// 		{
	// 			intelligence: {
	// 				stat: 0,
	// 				savingThrow: 0,
	// 			},
	// 		},
	// 		{
	// 			wisdom: {
	// 				stat: 0,
	// 				savingThrow: 0,
	// 			},
	// 		},
	// 		{
	// 			charisma: {
	// 				stat: 0,
	// 				savingThrow: 0,
	// 			},
	// 		},
	// 	],
	// },
	inventory: [
		{
			type: { Object },
			default: {
				title: '',
				items: [{}],
				isEditing: false,
			},
		},
	],
	hitPoints: Number,
	armorClass: Number,
	initiative: Number,
	speed: Number,
	characterName: String,
	class: String,
	level: Number,
	race: String,
	alignment: String,
	background: String,
	experiencePoints: Number,
	skills: [String],
	weapons: [String],
	spells: [String],
	// deathSaves: {
	// 	type: [{ type: [Boolean] }],
	// 	default: [{ sucesses: [] }, { failures: [] }],
	// },
	hitDice: [String],
	ideals: [String],
	personalityTraits: [String],
	bonds: [String],
	flaws: [String],
	backgroundStory: [String],
	abilityScores: {
		default: [],
		type: [Object],
	},
}

export default characterSheetOptions
