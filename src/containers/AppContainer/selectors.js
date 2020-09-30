import { createSelector } from 'reselect'
import { List, fromJS } from 'immutable'

export const modelProperties = state => state.getIn(['AppReducer', 'model', 'parameters'])

export const filterBy = state => state.getIn(['AppReducer', 'filterBy'])

export const propertiesCountByImportance = createSelector([modelProperties], property => {
	const distinct = {}
	if (property.size > 0) {
		property.forEach(each => {
			if (distinct[each.get('importance')]) {
				distinct[each.get('importance')] += 1
			} else {
				distinct[each.get('importance')] = 1
			}
		})
	}
	return distinct
})

export const propertyViaFilter = createSelector(
	[modelProperties, filterBy],
	(property, filterParam) => {
		const newPropetry = []
		if (filterParam === 'all' || property.size === 0) {
			return property
		} else {
			property.forEach(each => {
				if (each.get('importance') === filterParam) {
					newPropetry.push(each)
				}
			})
			return fromJS(newPropetry)
		}
	},
)
