export const localHost =
  "https://conversapal-mahmoud-mn-rashids-projects.vercel.app";
export const extractTime = (dateString) => {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
};

function padZero(number) {
  return number.toString().padStart(2, "0");
}
