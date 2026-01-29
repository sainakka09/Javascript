// we can remove properties at anytime
const sai = {
  name: "suma",
  age: 21,
};
sai.favoritefood = "fish";
sai["favoritechocolate"] = "choco";
console.log(sai);
delete sai.age;
console.log(sai);
