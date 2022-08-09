const setRandomStyle = () => {
  // const min = 400;
  // const max = 900;
  // const colors = ['rose', 'green', 'red', 'indigo', 'blue'];
  const colors = [
    'text-red-800    bg-red-400    hover:text-white hover:bg-red-600 transition duration-300',
    'text-blue-800   bg-blue-400   hover:text-white hover:bg-blue-600 transition duration-300',
    'text-indigo-800 bg-indigo-400 hover:text-white hover:bg-indigo-600 transition duration-300',
    'text-green-800  bg-green-400  hover:text-white hover:bg-green-600 transition duration-300',
    'text-cyan-800   bg-cyan-400   hover:text-white hover:bg-cyan-600 transition duration-300',
    'text-yellow-800   bg-yellow-400   hover:text-white hover:bg-yellow-600 transition duration-300',
    'text-pink-800   bg-pink-400   hover:text-white hover:bg-pink-600 transition duration-300',
    'text-orange-800   bg-orange-400   hover:text-white hover:bg-orange-600 transition duration-300',
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return color + ' font-bold';
};

export default setRandomStyle;
