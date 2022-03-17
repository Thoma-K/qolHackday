
const validateInput = (input) => {
  try{
    if (typeof input !== string) throw "please input a city name"
    if (input.length < 2) throw "please input a city name";
    input.replace(/ /g, "_").toLowerCase();
    return input;
    }
    catch(err) {
      console.error(err);
    }
}

module.exports = validateInput;