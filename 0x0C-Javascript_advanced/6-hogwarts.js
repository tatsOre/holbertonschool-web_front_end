/**
 * @function studentHogwarts - self invoking function that define
 * a Hogwarts student.
 */

const studentHogwarts = function () {
  let privateScore = 0;
  let name = null;
  /**
   * changeScoreBy - Private method that changes score
   * @param {Number} points
   */
  function changeScoreBy (points) {
    privateScore += points;
  }
  /**
   * setName - Public method and setter for name variable
   * @param {String} newName
   */
  studentHogwarts.prototype.setName = function (newName) {
    name = newName;
  };
  /**
   * rewardStudent - Public method that increments privateScore
   */
  studentHogwarts.prototype.rewardStudent = function () {
    changeScoreBy(1);
  };
  /**
   * penalizeStudent - Public method that decrements privateScore
   */
  studentHogwarts.prototype.penalizeStudent = function () {
    changeScoreBy(-1);
  };
  /**
   * getScore - Getter name and score
   * @returns string
   */
  studentHogwarts.prototype.getScore = function () {
    return `${name}: ${privateScore}`;
  };
};

/**
 * @var {Any} harry - Instance of studentHogwarts
 * @var {Any} draco - Instance of studentHogwarts
 */

const harry = new studentHogwarts();
harry.setName('Harry');
for (let i = 0; i < 4; i++) harry.rewardStudent();
console.log(harry.getScore());

const draco = new studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
for (let i = 0; i < 3; i++) draco.penalizeStudent();
console.log(draco.getScore());
