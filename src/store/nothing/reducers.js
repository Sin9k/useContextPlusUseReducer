const manager = {
	addCash(){
		this.cash += this.need;
	},
	getCash(){
		this.cash -= this.need;
	},
	inputFilter(e){
		const value = parseInt(e.target.value);
		this.need = isNaN(value) ? 0 : value;
	}
};

export default manager;