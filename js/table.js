const tableContainer = document.getElementById('tableContainer');
								let isDragging = false;
								let startX, scrollLeft;

								tableContainer.addEventListener('mousedown', (e) => {
									isDragging = true;
									startX = e.pageX - tableContainer.offsetLeft;
									scrollLeft = tableContainer.scrollLeft;
									tableContainer.style.cursor = 'grabbing';
								});

								tableContainer.addEventListener('mouseleave', () => {
									isDragging = false;
									tableContainer.style.cursor = 'grab';
								});

								tableContainer.addEventListener('mouseup', () => {
									isDragging = false;
									tableContainer.style.cursor = 'grab';
								});

								tableContainer.addEventListener('mousemove', (e) => {
									if (!isDragging) return;
									e.preventDefault();
									const x = e.pageX - tableContainer.offsetLeft;
									const walk = (x - startX);
									tableContainer.scrollLeft = scrollLeft - walk;
								});