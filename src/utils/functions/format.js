export const formatMinutes = (minutes) => {
  let outputStr;
  const hours = Math.floor(minutes/60);
  const mins = minutes % 60;
  hours > 0 && mins > 0 ? 
    outputStr = `${hours} hr ${mins} min` 
  : hours > 0 && mins === 0 ? 
    outputStr = `${hours} hr`
  : outputStr = `${mins} min`;
  return outputStr;
}
