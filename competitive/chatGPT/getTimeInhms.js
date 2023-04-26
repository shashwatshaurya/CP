const getTimeInhhmmss = (s) => {
    if(typeof s !== 'number' || s < 0)
        throw new Error('Incorrect input provided');
    const hours = Math.floor(s/3600);
    s%=3600;
    const minutes = Math.floor(s/60);
    s%=60;
    const seconds = s;
    return [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
        ];
}
const [h, m, s] = getTimeInhhmmss(100);
// console.log(`${h}:${m}:${s}`);
// console.log(getTimeInhhmmss(100).join(':'));

export default getTimeInhhmmss;