
function Volf(sex, x, y) {
	this.id = numberCreatures;
	this.name = "Volf " + (sex ? "Man" : "Woman");
	this.sex = sex;
	this.age = 180;
	this.hungry = 0;
	this.notHungry = 3;
	this.inLove = 1;
	this.image = sex ? volfM : volfW;
	this.food = [];
	this.freeCells = [];
	this.fans = [];
	this.x = x;
	this.y = y;
	this.dx = x * 48;
	this.dy = y * 48;
	this.direction = 0;

	numberVolfs++;
	numberCreatures++;
}
