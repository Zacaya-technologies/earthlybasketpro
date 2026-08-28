const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\pugal\\Downloads\\earthly\\assets\\js\\site-images.js', 'utf8');

// Try to evaluate the JavaScript
try {
  // Wrap in a function to evaluate
  const func = new Function('return ' + content.substring(content.indexOf('{')));
  const result = func();
  console.log('Evaluated successfully!');
  console.log('Keys:', Object.keys(result));
  console.log('Hero type:', typeof result.hero);
  console.log('Hero starts with data:', result.hero ? result.hero.startsWith('data:') : 'missing');
} catch (e) {
  console.log('Eval error:', e.message);
  console.log('Stack:', e.stack);
}