export const GO_PREV = 'COUNTER/GO_PREV';
export const GO_NEXT = 'COUNTER/GO_NEXT';

export const goNext = () => {
  return {
    type: GO_NEXT,
  };
};

export const goPrev = () => {
  return {
    type: GO_PREV,
  };
};

