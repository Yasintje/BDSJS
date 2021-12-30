class PlayerVector{

    /** @type {int} */
    x = null;

    /** @type {int} */
    y = null;

    /** @type {int} */
    z = null;

    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    /** @param {PlayerVector} vector */
    distance(vector){
        return Math.sqrt(this.distanceSquared(vector))
    }

    /** @param {PlayerVector} vector */
    distanceSquared(vector){
		return Math.pow(this.x - vector.x) + Math.pow(this.y - vector.y) + Math.pow(this.z - vector.z);
	}


}

module.exports = PlayerVector;