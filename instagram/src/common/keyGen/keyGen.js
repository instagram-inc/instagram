const keyGen = () =>{
    const MAX_KEY_RANGE = 99999;
    const MIN_KEY_RANGE = 1;
    const key = Math.floor(Math.random() * (MAX_KEY_RANGE - MIN_KEY_RANGE + 1) + MAX_KEY_RANGE);
    return key
}

export default keyGen