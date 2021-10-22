const double = (number: number) => 2 * number;

console.log(double(5));

const numbersArray = [1, 2, 3, 4, 5];

console.log(numbersArray.map((number: number) => 2 * number));

const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    return this.members.map(
      function (member) {
        return `${member}は${this.teamName}の所属です。`;
      }.bind(this)
    );
  },
};
const team2 = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    let self = this;
    return this.members.map(function (member) {
      return `${member}は${self.teamName}の所属です。`;
    });
  },
};
const team3 = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member}は${this.teamName}の所属です。`;
    });
  },
};
console.log(team.teamSummary());

console.log(team3.teamSummary());

const profile = {
  name: '太郎',
  getName: function () {
    return this.name;
  },
};

console.log(profile.getName());

const fibonacci = (n: number): number => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(10));
