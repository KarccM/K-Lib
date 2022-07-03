const loadingColor = 'FFF20098';
const loadingStyle = { 'background-color': `#FFF20098` };

export const skeletons = [
  {
    style: { loadingStyle },
    width: 100,
    height: 100,
    variant: 'circular',
    className: '',
  },
  {
    style: { 'background-color': `#${loadingColor}` },
    width: 190,
    height: 30,
    variant: 'text',
    className: '',
  },
  {
    style: { 'background-color': `#${loadingColor}` },
    width: 250,
    height: 140,
    variant: 'rectangular',
    className: 'rounded-xl mb-4',
  },
];
