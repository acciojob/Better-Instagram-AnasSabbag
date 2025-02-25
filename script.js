document.addEventListener("DOMContentLoaded",function(){
	const images = document.querySelectorAll(".image");
	let draggedItem = null;
	
	images.forEach((image)=>{
	
		image.addEventListener("dragstart",function(e) {
			draggedItem = this;
			setTimeout(()=>{
				this.style.display="none";
			},0);
			
		})	

		image.addEventListener("dragend",function(e) {
			setTimeout(()=>{
				draggedItem = null;
				this.style.display="block";
			},0);
		});	
		
		image.addEventListener("dragover",function(e) {
			e.preventDefault();
		});	
		image.addEventListener("dragenter",function(e) {
			this.classList.add("selected");
		});	
		image.addEventListener("dragleave",function(e) {
			this.classList.remove("selected");
		});	
		
		image.addEventListener("drop",function(e) {
			this.classList.remove("selected");
			if(draggedItem !==this){
				let temp = this.innerHTML;
				this.innerHTML=draggedItem.innerHTML;
				draggedItem.innerHTML=temp;
			}
			
		});	
	});
	
});