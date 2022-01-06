import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import * as api from '../../api/dndApi'

export const getAbilityScores = createAsyncThunk(
	'Ability Scores/getAbilityScores',
	async () => {
		const { data } = await api.getAbilityScores()
		return data.results
	}
)
