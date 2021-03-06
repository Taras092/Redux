import { createSelector } from 'reselect';

export const optionsListSelector = state => {
  return Object.values(state.options.optionsList);
};

export const selectedIdsSelector = state => {
  return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (optionsListSelector, selectedIdsSelector) => {
    return optionsListSelector.filter(option => selectedIdsSelector.includes(option.id));
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelector, selectedIdsSelector],
  (optionsListSelector, selectedIdsSelector) => {
    return optionsListSelector.filter(option => !selectedIdsSelector.includes(option.id));
  },
);

// export const selectedOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptionsList.filter(option => selectedIds.includes(option.id));
// };

// export const availableOptionsSelector = state => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdsSelector(state);

//   return allOptionsList.filter(option => !selectedIds.includes(option.id));
// };