var double = function (number) { return 2 * number; };
console.log(double(5));
var numbersArray = [1, 2, 3, 4, 5];
console.log(numbersArray.map(function (number) { return 2 * number; }));
var team = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function () {
        return this.members.map(function (member) {
            return member + "\u306F" + this.teamName + "\u306E\u6240\u5C5E\u3067\u3059\u3002";
        }.bind(this));
    }
};
var team2 = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function () {
        var self = this;
        return this.members.map(function (member) {
            return member + "\u306F" + self.teamName + "\u306E\u6240\u5C5E\u3067\u3059\u3002";
        });
    }
};
var team3 = {
    members: ['太郎', '花子'],
    teamName: 'スーパーチーム',
    teamSummary: function () {
        var _this = this;
        return this.members.map(function (member) {
            return member + "\u306F" + _this.teamName + "\u306E\u6240\u5C5E\u3067\u3059\u3002";
        });
    }
};
console.log(team.teamSummary());
console.log(team3.teamSummary());
var profile = {
    name: '太郎',
    getName: function () {
        return this.name;
    }
};
console.log(profile.getName());
var fibonacci = function (n) {
    if (n < 3)
        return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
console.log(fibonacci(10));
