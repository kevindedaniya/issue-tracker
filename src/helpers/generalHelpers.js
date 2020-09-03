window.create_UUID = function createUUID() {
  let dt = new Date().getTime();
  const uuid = 'xxxxxxxxxxxx5xxxkxxxxxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    // eslint-disable-next-line
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

  return uuid;
};
