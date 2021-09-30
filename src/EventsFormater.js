import events from './events';

const EventFormater = ({ event }) => {
  function createPaths(aliases, propName, path) {
    aliases.set(propName, path);
  }
  const formatHours = (h) => {
    const detectH = String(h).split(':')[0];
    const detectM = String(h).split(':')[1];
    return new Date(2021, 9, 29, detectH, detectM, 0);
  };

  const formatEndHour = (n) => {
    var num = n;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var rminutes = Math.round(minutes);
    rminutes = rminutes < 10 ? '0' + rminutes : rminutes;
    return rhours + ':' + rminutes;
  };
  const object2 = Object.fromEntries(
    Object.entries(events).map(([key, val]) => [key, formatHours(val)])
  );
  console.log('object : ', object2);
  /*
  var map = new Map(events),
    object = {};

  createPaths(map, 'paths.aliases.server.entry', 'src/test');
  createPaths(map, 'paths.aliases.dist.entry', 'dist/test');

  map.forEach((value, key) => {
    var keys = key.split('.'),
      last = keys.pop();
    keys.reduce((r, a) => (r[a] = r[a] || {}), object)[last] = value;
  });
  */
};

export default EventFormater;
